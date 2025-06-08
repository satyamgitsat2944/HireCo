// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { toast } from "react-toastify";
// // import {
// //   clearAllJobErrors,
// //   deleteJob,
// //   getMyJobs,
// //   resetJobSlice,
// // } from "../store/slices/jobSlice";
// // import Spinner from "../components/Spinner";

// // const MyJobs = () => {
// //   const { loading, error, myJobs, message } = useSelector(
// //     (state) => state.jobs
// //   );
// //   const dispatch = useDispatch();
// //   useEffect(() => {
// //     if (error) {
// //       toast.error(error);
// //       dispatch(clearAllJobErrors());
// //     }
// //     if (message) {
// //       toast.success(message);
// //       dispatch(resetJobSlice());
// //     }
// //     dispatch(getMyJobs());
// //   }, [dispatch, error, message]);

// //   const handleDeleteJob = (id) => {
// //     dispatch(deleteJob(id));
// //   };

// //   return (
// //     <>
// //       {loading ? (
// //         <Spinner />
// //       ) : myJobs && myJobs.length <= 0 ? (
// //         <h1 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
// //           You have not posted any job!
// //         </h1>
// //       ) : (
// //         <>
// //           <div className="account_components">
// //             <h3>My Jobs</h3>
// //             <div className="applications_container">
// //               {myJobs.map((element) => (
// //                 <div className="card" key={element._id}>
// //                   <p className="sub-sec">
// //                     <span>Job Title: </span>
// //                     {element.title}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Job Niche:</span> {element.jobNiche}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Salary: </span> {element.salary}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Location:</span> {element.location}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Job Type:</span> {element.jobType}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Company Name:</span> {element.companyName}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Introduction:</span> {element.introduction}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Qualifications:</span> {element.qualifications}
// //                   </p>
// //                   <p className="sub-sec">
// //                     <span>Responsibilities:</span> {element.responsibilities}
// //                   </p>
// //                   {element.offers && (
// //                     <p className="sub-sec">
// //                       <span>What Are We Offering:</span> {element.offers}
// //                     </p>
// //                   )}
// //                   <button
// //                     className="btn"
// //                     onClick={() => handleDeleteJob(element._id)}
// //                   >
// //                     Delete Job
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </>
// //       )}
// //     </>
// //   );
// // };

// // export default MyJobs;



// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import {
//   clearAllJobErrors,
//   deleteJob,
//   getMyJobs,
//   resetJobSlice,
// } from "../store/slices/jobSlice";
// import Spinner from "../components/Spinner";

// const MyJobs = () => {
//   const { loading, error, myJobs, message } = useSelector(
//     (state) => state.jobs
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getMyJobs());
//   }, [dispatch]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllJobErrors());
//     }
//     if (message) {
//       toast.success(message);
//       dispatch(resetJobSlice());
//     }
//   }, [dispatch, error, message]);

//   const handleDeleteJob = (id) => {
//     if (window.confirm("Are you sure you want to delete this job?")) {
//       dispatch(deleteJob(id));
//     }
//   };

//   if (loading) {
//     return <Spinner />;
//   }

//   if (!myJobs || myJobs.length === 0) {
//     return (
//       <div className="account_components">
//         <h1 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
//           You have not posted any jobs yet!
//         </h1>
//       </div>
//     );
//   }

//   return (
//     <div className="account_components">
//       <h3>My Posted Jobs</h3>
//       <div className="applications_container">
//         {myJobs.map((job) => (
//           <div className="card" key={`job-${job._id}`}>
//             <h4>{job.title}</h4>
//             <p className="sub-sec">
//               <span>Company:</span> {job.companyName}
//             </p>
//             <p className="sub-sec">
//               <span>Type:</span> {job.jobType}
//             </p>
//             <p className="sub-sec">
//               <span>Location:</span> {job.location}
//             </p>
//             <p className="sub-sec">
//               <span>Salary:</span> {job.salary}
//             </p>
//             <p className="sub-sec">
//               <span>Niche:</span> {job.jobNiche}
//             </p>
//             <div className="job-details">
//               <h5>Job Details:</h5>
//               <p>{job.introduction}</p>
//             </div>
//             <div className="job-section">
//               <h5>Responsibilities:</h5>
//               <p>{job.responsibilities}</p>
//             </div>
//             <div className="job-section">
//               <h5>Qualifications:</h5>
//               <p>{job.qualifications}</p>
//             </div>
//             {job.offers && (
//               <div className="job-section">
//                 <h5>What We Offer:</h5>
//                 <p>{job.offers}</p>
//               </div>
//             )}
//             <button
//               className="btn danger"
//               onClick={() => handleDeleteJob(job._id)}
//               disabled={loading}
//             >
//               Delete Job
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyJobs;




import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { 
  FiBriefcase,
  FiHome,
  FiClock,
  FiMapPin,
  FiDollarSign,
  FiList,
  FiAward,
  FiGift,
  FiTrash2
} from "react-icons/fi";
import {
  clearAllJobErrors,
  deleteJob,
  getMyJobs,
  resetJobSlice,
} from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import './myjobs.css';
const MyJobs = () => {
  const { loading, error, myJobs, message } = useSelector(
    (state) => state.jobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyJobs());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
    }
  }, [dispatch, error, message]);

  const handleDeleteJob = (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      dispatch(deleteJob(id));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="my-jobs-container">
      <div className="glass-card">
        <h2 className="my-jobs-title">
          <FiBriefcase className="title-icon" /> My Posted Jobs
        </h2>

        {!myJobs || myJobs.length === 0 ? (
          <div className="empty-state">
            <h3>You haven't posted any jobs yet</h3>
            <p>Start by creating your first job posting</p>
          </div>
        ) : (
          <div className="jobs-grid">
            {myJobs.map((job) => (
              <div className="job-card" key={`job-${job._id}`}>
                <div className="job-header">
                  <h3 className="job-title">
                    <FiBriefcase /> {job.title}
                  </h3>
                  <div className="job-company">
                    <FiHome /> {job.companyName}
                  </div>
                </div>

                <div className="job-meta">
                  <div className="meta-item">
                    <FiClock /> {job.jobType}
                  </div>
                  <div className="meta-item">
                    <FiMapPin /> {job.location}
                  </div>
                  <div className="meta-item">
                    <FiDollarSign /> {job.salary}
                  </div>
                  <div className="meta-item">
                    <FiAward /> {job.jobNiche}
                  </div>
                </div>

                <div className="job-section">
                  <h4>Job Description</h4>
                  <p>{job.introduction}</p>
                </div>

                <div className="job-section">
                  <h4><FiList /> Responsibilities</h4>
                  <p>{job.responsibilities}</p>
                </div>

                <div className="job-section">
                  <h4><FiAward /> Qualifications</h4>
                  <p>{job.qualifications}</p>
                </div>

                {job.offers && (
                  <div className="job-section">
                    <h4><FiGift /> What We Offer</h4>
                    <p>{job.offers}</p>
                  </div>
                )}

                <div className="job-actions">
                  <button
                    className="danger-button"
                    onClick={() => handleDeleteJob(job._id)}
                    disabled={loading}
                  >
                    <FiTrash2 className="button-icon" /> Delete Job
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;