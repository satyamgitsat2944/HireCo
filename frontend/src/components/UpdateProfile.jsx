// import React, { useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
// import {
//   clearAllUpdateProfileErrors,
//   updateProfile,
// } from "../store/slices/updateProfileSlice";
// import { getUser } from "../store/slices/userSlice";
// import "./new1.css";
// const UpdateProfile = () => {
//   const { user } = useSelector((state) => state.user);
//   const { loading, error, isUpdated } = useSelector(
//     (state) => state.updateProfile
//   );
//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     name: user?.name || "",
//     email: user?.email || "",
//     phone: user?.phone || "",
//     address: user?.address || "",
//     coverLetter: user?.coverLetter || "",
//     firstNiche: user?.niches?.firstNiche || "",
//     secondNiche: user?.niches?.secondNiche || "",
//     thirdNiche: user?.niches?.thirdNiche || ""
//   });
//   const [resume, setResume] = useState(null);
//   const [resumePreview, setResumePreview] = useState(user?.resume?.url || "");

//   const nichesArray = [
//     "Software Development", "Web Development", "Cybersecurity",
//     "Data Science", "Artificial Intelligence", "Cloud Computing",
//     "DevOps", "Mobile App Development", "Blockchain",
//     "Database Administration", "Network Administration", "UI/UX Design",
//     "Game Development", "IoT (Internet of Things)", "Big Data",
//     "Machine Learning", "IT Project Management", "IT Support and Helpdesk",
//     "Systems Administration", "IT Consulting"
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleUpdateProfile = useCallback(() => {
//     const data = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       if (value) data.append(key, value);
//     });
    
//     if (user?.role === "Job Seeker") {
//       if (resume) data.append("resume", resume);
//     }
    
//     dispatch(updateProfile(data));
//   }, [dispatch, formData, resume, user?.role]);

//   const resumeHandler = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         setResumePreview(reader.result);
//         setResume(file);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUpdateProfileErrors());
//     }
//     if (isUpdated) {
//       toast.success("Profile Updated Successfully");
//       dispatch(getUser());
//     }
//   }, [dispatch, error, isUpdated]);

//   return (
//     <div className="auth-container">
//       <div className="glass-card profile-card">
//         <h2 className="auth-title">Update Profile</h2>
        
//         <div className="input-group">
//           <label>Full Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleInputChange}
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="input-group">
//           <label>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="input-group">
//           <label>Phone Number</label>
//           <input
//             type="tel"
//             name="phone"
//             value={formData.phone}
//             onChange={handleInputChange}
//             placeholder="Enter your phone number"
//           />
//         </div>

//         <div className="input-group">
//           <label>Address</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleInputChange}
//             placeholder="Enter your address"
//           />
//         </div>

//         {user?.role === "Job Seeker" && (
//           <>
//             <div className="input-group">
//               <label>Preferred Job Niches</label>
//               <div className="niches-container">
//                 <select
//                   name="firstNiche"
//                   value={formData.firstNiche}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select First Niche</option>
//                   {nichesArray.map((niche, index) => (
//                     <option value={niche} key={`first-${index}`}>
//                       {niche}
//                     </option>
//                   ))}
//                 </select>

//                 <select
//                   name="secondNiche"
//                   value={formData.secondNiche}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Second Niche</option>
//                   {nichesArray.map((niche, index) => (
//                     <option value={niche} key={`second-${index}`}>
//                       {niche}
//                     </option>
//                   ))}
//                 </select>

//                 <select
//                   name="thirdNiche"
//                   value={formData.thirdNiche}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Third Niche</option>
//                   {nichesArray.map((niche, index) => (
//                     <option value={niche} key={`third-${index}`}>
//                       {niche}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="input-group">
//               <label>Cover Letter</label>
//               <textarea
//                 name="coverLetter"
//                 value={formData.coverLetter}
//                 onChange={handleInputChange}
//                 placeholder="Write your cover letter"
//                 rows={5}
//               />
//             </div>

//             <div className="input-group">
//               <label>Upload Resume</label>
//               <input 
//                 type="file" 
//                 onChange={resumeHandler} 
//                 className="file-input"
//                 accept=".pdf,.doc,.docx"
//               />
//               {resumePreview && (
//                 <div className="resume-preview">
//                   <a
//                     href={resumePreview}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="resume-link"
//                   >
//                     View Current Resume
//                   </a>
//                 </div>
//               )}
//             </div>
//           </>
//         )}

//         <button
//           className="auth-button"
//           onClick={handleUpdateProfile}
//           disabled={loading}
//         >
//           {loading ? "Saving..." : "Save Changes"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;



import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  clearAllUpdateProfileErrors,
  updateProfile,
} from "../store/slices/updateProfileSlice";
import { getUser } from "../store/slices/userSlice";
import { FiUser, FiMail, FiPhone, FiMapPin, FiFileText, FiUpload, FiSave } from "react-icons/fi";
import { FaCode, FaShieldAlt, FaDatabase, FaRobot, FaCloud } from "react-icons/fa";
import "./new1.css";


const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector(
    (state) => state.updateProfile
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    coverLetter: user?.coverLetter || "",
    firstNiche: user?.niches?.firstNiche || "",
    secondNiche: user?.niches?.secondNiche || "",
    thirdNiche: user?.niches?.thirdNiche || ""
  });
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(user?.resume?.url || "");

  const nichesArray = [
    { name: "Software Development", icon: <FaCode className="niche-icon" /> },
    { name: "Web Development", icon: <FaCode className="niche-icon" /> },
    { name: "Cybersecurity", icon: <FaShieldAlt className="niche-icon" /> },
    { name: "Data Science", icon: <FaDatabase className="niche-icon" /> },
    { name: "Artificial Intelligence", icon: <FaRobot className="niche-icon" /> },
    { name: "Cloud Computing", icon: <FaCloud className="niche-icon" /> },
    { name: "DevOps", icon: <FaCode className="niche-icon" /> },
    { name: "Mobile App Development", icon: <FaCode className="niche-icon" /> },
    { name: "Blockchain", icon: <FaCode className="niche-icon" /> },
    { name: "Database Administration", icon: <FaDatabase className="niche-icon" /> },
    { name: "Network Administration", icon: <FaShieldAlt className="niche-icon" /> },
    { name: "UI/UX Design", icon: <FaCode className="niche-icon" /> },
    { name: "Game Development", icon: <FaCode className="niche-icon" /> },
    { name: "IoT (Internet of Things)", icon: <FaCode className="niche-icon" /> },
    { name: "Big Data", icon: <FaDatabase className="niche-icon" /> },
    { name: "Machine Learning", icon: <FaRobot className="niche-icon" /> },
    { name: "IT Project Management", icon: <FaCode className="niche-icon" /> },
    { name: "IT Support and Helpdesk", icon: <FaShieldAlt className="niche-icon" /> },
    { name: "Systems Administration", icon: <FaShieldAlt className="niche-icon" /> },
    { name: "IT Consulting", icon: <FaCode className="niche-icon" /> }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdateProfile = useCallback(() => {
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    
    if (user?.role === "Job Seeker") {
      if (resume) data.append("resume", resume);
    }
    
    dispatch(updateProfile(data));
  }, [dispatch, formData, resume, user?.role]);

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setResumePreview(reader.result);
        setResume(file);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdated) {
      toast.success("Profile Updated Successfully");
      dispatch(getUser());
    }
  }, [dispatch, error, isUpdated]);

  return (
    <div className="update-profile-container">
      <div className="glass-card profile-card">
        <h2 className="auth-title">
          <FiUser className="title-icon" /> Update Profile
        </h2>
        
        <div className="input-group">
          <label><FiUser className="input-icon" /> Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
        </div>

        <div className="input-group">
          <label><FiMail className="input-icon" /> Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label><FiPhone className="input-icon" /> Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>

        <div className="input-group">
          <label><FiMapPin className="input-icon" /> Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="Enter your address"
          />
        </div>

        {user?.role === "Job Seeker" && (
          <>
            <div className="input-group">
              <label><FaCode className="input-icon" /> Preferred Job Niches</label>
              <div className="niches-container">
                <select
                  name="firstNiche"
                  value={formData.firstNiche}
                  onChange={handleInputChange}
                >
                  <option value="">Select First Niche</option>
                  {nichesArray.map((niche, index) => (
                    <option value={niche.name} key={`first-${index}`}>
                      {niche.icon} {niche.name}
                    </option>
                  ))}
                </select>

                <select
                  name="secondNiche"
                  value={formData.secondNiche}
                  onChange={handleInputChange}
                >
                  <option value="">Select Second Niche</option>
                  {nichesArray.map((niche, index) => (
                    <option value={niche.name} key={`second-${index}`}>
                      {niche.icon} {niche.name}
                    </option>
                  ))}
                </select>

                <select
                  name="thirdNiche"
                  value={formData.thirdNiche}
                  onChange={handleInputChange}
                >
                  <option value="">Select Third Niche</option>
                  {nichesArray.map((niche, index) => (
                    <option value={niche.name} key={`third-${index}`}>
                      {niche.icon} {niche.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="input-group">
              <label><FiFileText className="input-icon" /> Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                placeholder="Write your cover letter"
                rows={5}
              />
            </div>

            <div className="input-group">
              <label><FiUpload className="input-icon" /> Upload Resume</label>
              <div className="file-upload-wrapper">
                <label className="file-upload-label">
                  <input 
                    type="file" 
                    onChange={resumeHandler} 
                    className="file-input"
                    accept=".pdf,.doc,.docx"
                  />
                  Choose File
                </label>
                {resumePreview && (
                  <div className="resume-preview">
                    <a
                      href={resumePreview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-link"
                    >
                      <FiFileText /> View Current Resume
                    </a>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        <button
          className="auth-button"
          onClick={handleUpdateProfile}
          disabled={loading}
        >
          {loading ? "Saving..." : <><FiSave className="button-icon" /> Save Changes</>}
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;