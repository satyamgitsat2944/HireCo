// import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
// import ErrorHandler from "../middlewares/error.js";
// import { Application } from "../models/applicationSchema.js";
// import { Job } from "../models/jobSchema.js";
// import { v2 as cloudinary } from "cloudinary";

// export const postApplication = catchAsyncErrors(async (req, res, next) => {
//   const { id } = req.params;
//   const { name, email, phone, address, coverLetter } = req.body;
//   if (!name || !email || !phone || !address || !coverLetter) {
//     return next(new ErrorHandler("All fields are required.", 400));
//   }
//   const jobSeekerInfo = {
//     id: req.user._id,
//     name,
//     email,
//     phone,
//     address,
//     coverLetter,
//     role: "Job Seeker",
//   };
//   const jobDetails = await Job.findById(id);
//   if (!jobDetails) {
//     return next(new ErrorHandler("Job not found.", 404));
//   }
//   const isAlreadyApplied = await Application.findOne({
//     "jobInfo.jobId": id,
//     "jobSeekerInfo.id": req.user._id,
//   });
//   if (isAlreadyApplied) {
//     return next(
//       new ErrorHandler("You have already applied for this job.", 400)
//     );
//   }
//   if (req.files && req.files.resume) {
//     const { resume } = req.files;
//     try {
//       const cloudinaryResponse = await cloudinary.uploader.upload(
//         resume.tempFilePath,
//         {
//           folder: "Job_Seekers_Resume",
//         }
//       );
//       if (!cloudinaryResponse || cloudinaryResponse.error) {
//         return next(
//           new ErrorHandler("Failed to upload resume to cloudinary.", 500)
//         );
//       }
//       jobSeekerInfo.resume = {
//         public_id: cloudinaryResponse.public_id,
//         url: cloudinaryResponse.secure_url,
//       };
//     } catch (error) {
//       return next(new ErrorHandler("Failed to upload resume", 500));
//     }
//   } else {
//     if (req.user && !req.user.resume.url) {
//       return next(new ErrorHandler("Please upload your resume.", 400));
//     }
//     jobSeekerInfo.resume = {
//       public_id: req.user && req.user.resume.public_id,
//       url: req.user && req.user.resume.url,
//     };
//   }
//   const employerInfo = {
//     id: jobDetails.postedBy,
//     role: "Employer",
//   };
//   const jobInfo = {
//     jobId: id,
//     jobTitle: jobDetails.title,
//   };
//   const application = await Application.create({
//     jobSeekerInfo,
//     employerInfo,
//     jobInfo,
//   });
//   res.status(201).json({
//     success: true,
//     message: "Application submitted.",
//     application,
//   });
// });

// export const employerGetAllApplication = catchAsyncErrors(
//   async (req, res, next) => {
//     const { _id } = req.user;
//     const applications = await Application.find({
//       "employerInfo.id": _id,
//       "deletedBy.employer": false,
//     });
//     res.status(200).json({
//       success: true,
//       applications,
//     });
//   }
// );

// export const jobSeekerGetAllApplication = catchAsyncErrors(
//   async (req, res, next) => {
//     const { _id } = req.user;
//     const applications = await Application.find({
//       "jobSeekerInfo.id": _id,
//       "deletedBy.jobSeeker": false,
//     });
//     res.status(200).json({
//       success: true,
//       applications,
//     });
//   }
// );

// export const deleteApplication = catchAsyncErrors(async (req, res, next) => {
//   const { id } = req.params;
//   const application = await Application.findById(id);
//   if (!application) {
//     return next(new ErrorHandler("Application not found.", 404));
//   }
//   const { role } = req.user;
//   switch (role) {
//     case "Job Seeker":
//       application.deletedBy.jobSeeker = true;
//       await application.save();
//       break;
//     case "Employer":
//       application.deletedBy.employer = true;
//       await application.save();
//       break;

//     default:
//       console.log("Default case for application delete function.");
//       break;
//   }

//   if (
//     application.deletedBy.employer === true &&
//     application.deletedBy.jobSeeker === true
//   ) {
//     await application.deleteOne();
//   }
//   res.status(200).json({
//     success: true,
//     message: "Application Deleted.",
//   });
// });



import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import { Job } from "../models/jobSchema.js";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const postApplication = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const { name, email, phone, address, coverLetter } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !address || !coverLetter) {
    return next(new ErrorHandler("All fields are required", 400));
  }

  // Check if job exists
  const job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }

  // Check if already applied
  const existingApplication = await Application.findOne({
    "jobInfo.jobId": id,
    "jobSeekerInfo.id": req.user._id,
  });
  if (existingApplication) {
    return next(new ErrorHandler("You've already applied for this job", 400));
  }

  // Prepare application data
  const applicationData = {
    jobSeekerInfo: {
      id: req.user._id,
      name,
      email,
      phone,
      address,
      coverLetter,
      role: "Job Seeker",
    },
    employerInfo: {
      id: job.postedBy,
      role: "Employer",
    },
    jobInfo: {
      jobId: id,
      jobTitle: job.title,
    },
  };

  // Handle resume upload
  if (req.files?.resume) {
    try {
      const result = await cloudinary.uploader.upload(req.files.resume.tempFilePath, {
        folder: "job_portal/resumes",
        resource_type: "auto",
      });
      applicationData.jobSeekerInfo.resume = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    } catch (error) {
      return next(new ErrorHandler("Failed to upload resume", 500));
    }
  } else if (!req.user.resume?.url) {
    return next(new ErrorHandler("Resume is required", 400));
  } else {
    applicationData.jobSeekerInfo.resume = req.user.resume;
  }

  // Create application
  const application = await Application.create(applicationData);

  res.status(201).json({
    success: true,
    message: "Application submitted successfully",
    application,
  });
});

export const employerGetAllApplication = catchAsyncErrors(async (req, res, next) => {
  const applications = await Application.find({
    "employerInfo.id": req.user._id,
    "deletedBy.employer": false,
  }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    applications,
    count: applications.length,
  });
});

export const jobSeekerGetAllApplication = catchAsyncErrors(async (req, res, next) => {
  const applications = await Application.find({
    "jobSeekerInfo.id": req.user._id,
    "deletedBy.jobSeeker": false,
  }).sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    applications,
    count: applications.length,
  });
});

export const deleteApplication = catchAsyncErrors(async (req, res, next) => {
  const application = await Application.findById(req.params.id);
  
  if (!application) {
    return next(new ErrorHandler("Application not found", 404));
  }

  // Soft delete based on user role
  if (req.user.role === "Job Seeker") {
    application.deletedBy.jobSeeker = true;
  } else if (req.user.role === "Employer") {
    application.deletedBy.employer = true;
  }

  await application.save();

  // Hard delete if both parties have deleted it
  if (application.deletedBy.jobSeeker && application.deletedBy.employer) {
    await Application.findByIdAndDelete(req.params.id);
  }

  res.status(200).json({
    success: true,
    message: "Application deleted successfully",
  });
});