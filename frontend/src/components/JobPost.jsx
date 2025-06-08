// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   clearAllJobErrors,
//   postJob,
//   resetJobSlice,
// } from "../store/slices/jobSlice";
// import { CiCircleInfo } from "react-icons/ci";

// const JobPost = () => {
//   const [title, setTitle] = useState("");
//   const [jobType, setJobType] = useState("");
//   const [location, setLocation] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [introduction, setIntroduction] = useState("");
//   const [responsibilities, setResponsibilities] = useState("");
//   const [qualifications, setQualifications] = useState("");
//   const [offers, setOffers] = useState("");
//   const [jobNiche, setJobNiche] = useState("");
//   const [salary, setSalary] = useState("");
//   const [hiringMultipleCandidates, setHiringMultipleCandidates] = useState("");
//   const [personalWebsiteTitle, setPersonalWebsiteTitle] = useState("");
//   const [personalWebsiteUrl, setPersonalWebsiteUrl] = useState("");

//   const nichesArray = [
//     "Software Development",
//     "Web Development",
//     "Cybersecurity",
//     "Data Science",
//     "Artificial Intelligence",
//     "Cloud Computing",
//     "DevOps",
//     "Mobile App Development",
//     "Blockchain",
//     "Database Administration",
//     "Network Administration",
//     "UI/UX Design",
//     "Game Development",
//     "IoT (Internet of Things)",
//     "Big Data",
//     "Machine Learning",
//     "IT Project Management",
//     "IT Support and Helpdesk",
//     "Systems Administration",
//     "IT Consulting",
//   ];

//   const cities = [
//     "All",
//     "Bangalore",
//     "Hyderabad",
//     "Chennai",
//     "Mumbai",
//     "Pune",
//     "Delhi",
//     "Kolkata",
//     "Noida",
//     "Gurgaon",
//     "Gurugram",
//     "Ahmedabad",
//     "Vizeg",
//     "Lucknow",
//     "Bhopal",
//     "Jaipur",
//     "Indore",
//     "Kanpur",
//     "Nagpur",
//     "Patna",
//     "Vadodara",
//   ];

//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const { loading, error, message } = useSelector((state) => state.jobs);
//   const dispatch = useDispatch();

//   const handlePostJob = (e) => {
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("jobType", jobType);
//     formData.append("location", location);
//     formData.append("companyName", companyName);
//     formData.append("introduction", introduction);
//     formData.append("responsibilities", responsibilities);
//     formData.append("qualifications", qualifications);
//     offers && formData.append("offers", offers);
//     formData.append("jobNiche", jobNiche);
//     formData.append("salary", salary);
//     hiringMultipleCandidates &&
//       formData.append("hiringMultipleCandidates", hiringMultipleCandidates);
//     personalWebsiteTitle &&
//       formData.append("personalWebsiteTitle", personalWebsiteTitle);
//     personalWebsiteUrl &&
//       formData.append("personalWebsiteUrl", personalWebsiteUrl);

//     dispatch(postJob(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllJobErrors());
//     }
//     if (message) {
//       toast.success(message);
//       dispatch(resetJobSlice());
//     }
//   }, [dispatch, error, loading, message]);

//   return (
//     <div className="account_components">
//       <h3>Post A Job</h3>
//       <div>
//         <label>Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           placeholder="Job Title"
//         />
//       </div>
//       <div>
//         <label>Job Type</label>
//         <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
//           <option value="">Select Job Type</option>
//           <option value="Full-time">Full-time</option>
//           <option value="Part-time">Part-time</option>
//         </select>
//       </div>
//       <div>
//         <label>Location (City)</label>
//         <select value={location} onChange={(e) => setLocation(e.target.value)}>
//           <option value="">Select Job Type</option>
//           {cities.map((element) => {
//             return <option value={element}>{element}</option>;
//           })}
//         </select>
//       </div>
//       <div>
//         <label>Company Name</label>
//         <input
//           type="text"
//           value={companyName}
//           onChange={(e) => setCompanyName(e.target.value)}
//           placeholder="Company Name"
//         />
//       </div>
//       <div>
//         <label>Company/Job Introduction</label>
//         <textarea
//           value={introduction}
//           onChange={(e) => setIntroduction(e.target.value)}
//           placeholder="Company / Job Introduction"
//           rows={7}
//         />
//       </div>
//       <div>
//         <label>Responsibilities</label>
//         <textarea
//           value={responsibilities}
//           onChange={(e) => setResponsibilities(e.target.value)}
//           placeholder="Job Responsibilities"
//           rows={7}
//         />
//       </div>
//       <div>
//         <label>Qualifications</label>
//         <textarea
//           value={qualifications}
//           onChange={(e) => setQualifications(e.target.value)}
//           placeholder="Required Qualifications For Job"
//           rows={7}
//         />
//       </div>
//       <div>
//         <div className="label-infoTag-wrapper">
//           <label>What We Offer</label>
//           <span>
//             <CiCircleInfo /> Optional
//           </span>
//         </div>
//         <textarea
//           value={offers}
//           onChange={(e) => setOffers(e.target.value)}
//           placeholder="What are we offering in return!"
//           rows={7}
//         />
//       </div>
//       <div>
//         <label>Job Niche</label>
//         <select value={jobNiche} onChange={(e) => setJobNiche(e.target.value)}>
//           <option value="">Select Job Niche</option>
//           {nichesArray.map((element) => {
//             return <option value={element}>{element}</option>;
//           })}
//         </select>
//       </div>
//       <div>
//         <label>Salary</label>
//         <input
//           type="text"
//           value={salary}
//           onChange={(e) => setSalary(e.target.value)}
//           placeholder="50000 - 800000"
//         />
//       </div>
//       <div>
//         <div className="label-infoTag-wrapper">
//           <label>Hiring Multiple Candidates?</label>
//           <span>
//             <CiCircleInfo /> Optional
//           </span>
//         </div>
//         <select
//           value={hiringMultipleCandidates}
//           onChange={(e) => setHiringMultipleCandidates(e.target.value)}
//         >
//           <option value="">Hiring Multiple Candidates?</option>
//           <option value="Yes">Yes</option>
//           <option value="No">No</option>
//         </select>
//       </div>
//       <div>
//         <div className="label-infoTag-wrapper">
//           <label>Personal Website Name</label>
//           <span>
//             <CiCircleInfo /> Optional
//           </span>
//         </div>
//         <input
//           type="text"
//           value={personalWebsiteTitle}
//           onChange={(e) => setPersonalWebsiteTitle(e.target.value)}
//           placeholder="Peronsal Website Name/Title"
//         />
//       </div>
//       <div>
//         <div className="label-infoTag-wrapper">
//           <label>Personal Website Link (URL)</label>
//           <span>
//             <CiCircleInfo /> Optional
//           </span>
//         </div>
//         <input
//           type="text"
//           value={personalWebsiteUrl}
//           onChange={(e) => setPersonalWebsiteUrl(e.target.value)}
//           placeholder="Peronsal Website Link (URL)"
//         />
//       </div>
//       <div>
//         <button
//           style={{ margin: "0 auto" }}
//           className="btn"
//           onClick={handlePostJob}
//           disabled={loading}
//         >
//           Post Job
//         </button>
//       </div>
//     </div>
//   );
// };

// export default JobPost;

// // import React, { useEffect, useState, useCallback } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { toast } from "react-toastify";
// // import { CiCircleInfo } from "react-icons/ci";
// // import {
// //   clearAllJobErrors,
// //   postJob,
// //   resetJobSlice,
// // } from "../store/slices/jobSlice";
// // import "./new1.css";

// // const JobPost = () => {
// //   const [formData, setFormData] = useState({
// //     title: "",
// //     jobType: "",
// //     location: "",
// //     companyName: "",
// //     introduction: "",
// //     responsibilities: "",
// //     qualifications: "",
// //     offers: "",
// //     jobNiche: "",
// //     salary: "",
// //     hiringMultipleCandidates: "",
// //     personalWebsiteTitle: "",
// //     personalWebsiteUrl: ""
// //   });

// //   const nichesArray = [
// //     "Software Development", "Web Development", "Cybersecurity",
// //     "Data Science", "Artificial Intelligence", "Cloud Computing",
// //     "DevOps", "Mobile App Development", "Blockchain",
// //     "Database Administration", "Network Administration", "UI/UX Design",
// //     "Game Development", "IoT (Internet of Things)", "Big Data",
// //     "Machine Learning", "IT Project Management", "IT Support and Helpdesk",
// //     "Systems Administration", "IT Consulting"
// //   ];

// //   const cities = [
// //     "Bangalore", "Hyderabad", "Chennai", "Mumbai", "Pune",
// //     "Delhi", "Kolkata", "Noida", "Gurgaon", "Gurugram",
// //     "Ahmedabad", "Vizeg", "Lucknow", "Bhopal", "Jaipur",
// //     "Indore", "Kanpur", "Nagpur", "Patna", "Vadodara"
// //   ];

// //   const { loading, error, message } = useSelector((state) => state.jobs);
// //   const dispatch = useDispatch();

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   const handlePostJob = useCallback(() => {
// //     const data = new FormData();
// //     Object.entries(formData).forEach(([key, value]) => {
// //       if (value) data.append(key, value);
// //     });
// //     dispatch(postJob(data));
// //   }, [dispatch, formData]);

// //   useEffect(() => {
// //     if (error) {
// //       toast.error(error);
// //       dispatch(clearAllJobErrors());
// //     }
// //     if (message) {
// //       toast.success(message);
// //       dispatch(resetJobSlice());
// //       setFormData({
// //         title: "",
// //         jobType: "",
// //         location: "",
// //         companyName: "",
// //         introduction: "",
// //         responsibilities: "",
// //         qualifications: "",
// //         offers: "",
// //         jobNiche: "",
// //         salary: "",
// //         hiringMultipleCandidates: "",
// //         personalWebsiteTitle: "",
// //         personalWebsiteUrl: ""
// //       });
// //     }
// //   }, [dispatch, error, message]);

// //   return (
// //     <div className="auth-container">
// //       <div className="glass-card job-post-card">
// //         <h2 className="auth-title">Post A Job</h2>
        
// //         <div className="input-group">
// //           <label>Job Title</label>
// //           <input
// //             type="text"
// //             name="title"
// //             value={formData.title}
// //             onChange={handleInputChange}
// //             placeholder="Enter job title"
// //             required
// //           />
// //         </div>

// //         <div className="form-row">
// //           <div className="input-group">
// //             <label>Job Type</label>
// //             <select
// //               name="jobType"
// //               value={formData.jobType}
// //               onChange={handleInputChange}
// //               required
// //             >
// //               <option value="">Select Job Type</option>
// //               <option value="Full-time">Full-time</option>
// //               <option value="Part-time">Part-time</option>
// //             </select>
// //           </div>

// //           <div className="input-group">
// //             <label>Location</label>
// //             <select
// //               name="location"
// //               value={formData.location}
// //               onChange={handleInputChange}
// //               required
// //             >
// //               <option value="">Select Location</option>
// //               {cities.map(city => (
// //                 <option key={city} value={city}>{city}</option>
// //               ))}
// //             </select>
// //           </div>
// //         </div>

// //         <div className="input-group">
// //           <label>Company Name</label>
// //           <input
// //             type="text"
// //             name="companyName"
// //             value={formData.companyName}
// //             onChange={handleInputChange}
// //             placeholder="Enter company name"
// //             required
// //           />
// //         </div>

// //         <div className="input-group">
// //           <label>Job Introduction</label>
// //           <textarea
// //             name="introduction"
// //             value={formData.introduction}
// //             onChange={handleInputChange}
// //             placeholder="Describe the job and company"
// //             rows={5}
// //             required
// //           />
// //         </div>

// //         <div className="input-group">
// //           <label>Responsibilities</label>
// //           <textarea
// //             name="responsibilities"
// //             value={formData.responsibilities}
// //             onChange={handleInputChange}
// //             placeholder="List job responsibilities"
// //             rows={5}
// //             required
// //           />
// //         </div>

// //         <div className="input-group">
// //           <label>Qualifications</label>
// //           <textarea
// //             name="qualifications"
// //             value={formData.qualifications}
// //             onChange={handleInputChange}
// //             placeholder="List required qualifications"
// //             rows={5}
// //             required
// //           />
// //         </div>

// //         <div className="input-group">
// //           <div className="label-with-info">
// //             <label>What We Offer</label>
// //             <span className="info-tag"><CiCircleInfo /> Optional</span>
// //           </div>
// //           <textarea
// //             name="offers"
// //             value={formData.offers}
// //             onChange={handleInputChange}
// //             placeholder="Describe benefits and perks"
// //             rows={5}
// //           />
// //         </div>

// //         <div className="form-row">
// //           <div className="input-group">
// //             <label>Job Niche</label>
// //             <select
// //               name="jobNiche"
// //               value={formData.jobNiche}
// //               onChange={handleInputChange}
// //               required
// //             >
// //               <option value="">Select Job Niche</option>
// //               {nichesArray.map(niche => (
// //                 <option key={niche} value={niche}>{niche}</option>
// //               ))}
// //             </select>
// //           </div>

// //           <div className="input-group">
// //             <label>Salary Range</label>
// //             <input
// //               type="text"
// //               name="salary"
// //               value={formData.salary}
// //               onChange={handleInputChange}
// //               placeholder="e.g., 50000 - 80000"
// //               required
// //             />
// //           </div>
// //         </div>

// //         <div className="input-group">
// //           <div className="label-with-info">
// //             <label>Hiring Multiple Candidates?</label>
// //             <span className="info-tag"><CiCircleInfo /> Optional</span>
// //           </div>
// //           <select
// //             name="hiringMultipleCandidates"
// //             value={formData.hiringMultipleCandidates}
// //             onChange={handleInputChange}
// //           >
// //             <option value="">Select Option</option>
// //             <option value="Yes">Yes</option>
// //             <option value="No">No</option>
// //           </select>
// //         </div>

// //         <div className="form-row">
// //           <div className="input-group">
// //             <div className="label-with-info">
// //               <label>Website Title</label>
// //               <span className="info-tag"><CiCircleInfo /> Optional</span>
// //             </div>
// //             <input
// //               type="text"
// //               name="personalWebsiteTitle"
// //               value={formData.personalWebsiteTitle}
// //               onChange={handleInputChange}
// //               placeholder="Enter website name"
// //             />
// //           </div>

// //           <div className="input-group">
// //             <div className="label-with-info">
// //               <label>Website URL</label>
// //               <span className="info-tag"><CiCircleInfo /> Optional</span>
// //             </div>
// //             <input
// //               type="url"
// //               name="personalWebsiteUrl"
// //               value={formData.personalWebsiteUrl}
// //               onChange={handleInputChange}
// //               placeholder="Enter website URL"
// //             />
// //           </div>
// //         </div>

// //         <button
// //           className="auth-button"
// //           onClick={handlePostJob}
// //           disabled={loading || !formData.title || !formData.jobType || 
// //                    !formData.location || !formData.companyName || 
// //                    !formData.introduction || !formData.responsibilities || 
// //                    !formData.qualifications || !formData.jobNiche || 
// //                    !formData.salary}
// //         >
// //           {loading ? "Posting..." : "Post Job"}
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default JobPost;






// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import {
//   clearAllJobErrors,
//   postJob,
//   resetJobSlice,
// } from "../store/slices/jobSlice";
// import { CiCircleInfo } from "react-icons/ci";

// const JobPost = () => {
//   const [title, setTitle] = useState("");
//   const [jobType, setJobType] = useState("");
//   const [location, setLocation] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [introduction, setIntroduction] = useState("");
//   const [responsibilities, setResponsibilities] = useState("");
//   const [qualifications, setQualifications] = useState("");
//   const [offers, setOffers] = useState("");
//   const [jobNiche, setJobNiche] = useState("");
//   const [salary, setSalary] = useState("");
//   const [hiringMultipleCandidates, setHiringMultipleCandidates] = useState("");
//   const [personalWebsiteTitle, setPersonalWebsiteTitle] = useState("");
//   const [personalWebsiteUrl, setPersonalWebsiteUrl] = useState("");

//   const nichesArray = [
//     "Software Development",
//     "Web Development",
//     "Cybersecurity",
//     "Data Science",
//     "Artificial Intelligence",
//     "Cloud Computing",
//     "DevOps",
//     "Mobile App Development",
//     "Blockchain",
//     "Database Administration",
//     "Network Administration",
//     "UI/UX Design",
//     "Game Development",
//     "IoT (Internet of Things)",
//     "Big Data",
//     "Machine Learning",
//     "IT Project Management",
//     "IT Support and Helpdesk",
//     "Systems Administration",
//     "IT Consulting",
//   ];

//   const cities = [
//     "All",
//     "Bangalore",
//     "Hyderabad",
//     "Chennai",
//     "Mumbai",
//     "Pune",
//     "Delhi",
//     "Kolkata",
//     "Noida",
//     "Gurgaon",
//     "Gurugram",
//     "Ahmedabad",
//     "Vizeg",
//     "Lucknow",
//     "Bhopal",
//     "Jaipur",
//     "Indore",
//     "Kanpur",
//     "Nagpur",
//     "Patna",
//     "Vadodara",
//   ];

//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const { loading, error, message } = useSelector((state) => state.jobs);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handlePostJob = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("jobType", jobType);
//     formData.append("location", location);
//     formData.append("companyName", companyName);
//     formData.append("introduction", introduction);
//     formData.append("responsibilities", responsibilities);
//     formData.append("qualifications", qualifications);
//     formData.append("offers", offers);
//     formData.append("jobNiche", jobNiche);
//     formData.append("salary", salary);
//     formData.append("hiringMultipleCandidates", hiringMultipleCandidates);
//     formData.append("personalWebsiteTitle", personalWebsiteTitle);
//     formData.append("personalWebsiteUrl", personalWebsiteUrl);

//     dispatch(postJob(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllJobErrors());
//     }
//     if (message) {
//       toast.success(message);
//       dispatch(resetJobSlice());
//       navigate('/myjobs');
//     }
//   }, [dispatch, error, message, navigate]);

//   return (
//     <div className="account_components">
//       <h3>Post A Job</h3>
//       <form onSubmit={handlePostJob}>
//         {/* Title */}
//         <div>
//           <label>Title</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Job Title"
//             required
//           />
//         </div>

//         {/* Job Type */}
//         <div>
//           <label>Job Type</label>
//           <select 
//             value={jobType} 
//             onChange={(e) => setJobType(e.target.value)}
//             required
//           >
//             <option value="">Select Job Type</option>
//             <option value="Full-time">Full-time</option>
//             <option value="Part-time">Part-time</option>
//             <option value="Contract">Contract</option>
//             <option value="Internship">Internship</option>
//           </select>
//         </div>

//         {/* Location */}
//         <div>
//           <label>Location (City)</label>
//           <select 
//             value={location} 
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           >
//             <option value="">Select Location</option>
//             {cities.map((city) => (
//               <option key={`city-${city}`} value={city}>
//                 {city}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Company Name */}
//         <div>
//           <label>Company Name</label>
//           <input
//             type="text"
//             value={companyName}
//             onChange={(e) => setCompanyName(e.target.value)}
//             placeholder="Company Name"
//             required
//           />
//         </div>

//         {/* Job Niche */}
//         <div>
//           <label>Job Niche</label>
//           <select 
//             value={jobNiche} 
//             onChange={(e) => setJobNiche(e.target.value)}
//             required
//           >
//             <option value="">Select Job Niche</option>
//             {nichesArray.map((niche) => (
//               <option key={`niche-${niche}`} value={niche}>
//                 {niche}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Salary */}
//         <div>
//           <label>Salary</label>
//           <input
//             type="text"
//             value={salary}
//             onChange={(e) => setSalary(e.target.value)}
//             placeholder="50000 - 800000"
//             required
//           />
//         </div>

//         {/* Introduction */}
//         <div>
//           <label>Company/Job Introduction</label>
//           <textarea
//             value={introduction}
//             onChange={(e) => setIntroduction(e.target.value)}
//             placeholder="Company / Job Introduction"
//             rows={7}
//             required
//           />
//         </div>

//         {/* Responsibilities */}
//         <div>
//           <label>Responsibilities</label>
//           <textarea
//             value={responsibilities}
//             onChange={(e) => setResponsibilities(e.target.value)}
//             placeholder="Job Responsibilities"
//             rows={7}
//             required
//           />
//         </div>

//         {/* Qualifications */}
//         <div>
//           <label>Qualifications</label>
//           <textarea
//             value={qualifications}
//             onChange={(e) => setQualifications(e.target.value)}
//             placeholder="Required Qualifications For Job"
//             rows={7}
//             required
//           />
//         </div>

//         {/* Offers */}
//         <div>
//           <div className="label-infoTag-wrapper">
//             <label>What We Offer</label>
//             <span>
//               <CiCircleInfo /> Optional
//             </span>
//           </div>
//           <textarea
//             value={offers}
//             onChange={(e) => setOffers(e.target.value)}
//             placeholder="What are we offering in return!"
//             rows={7}
//           />
//         </div>

//         {/* Hiring Multiple */}
//         <div>
//           <div className="label-infoTag-wrapper">
//             <label>Hiring Multiple Candidates?</label>
//             <span>
//               <CiCircleInfo /> Optional
//             </span>
//           </div>
//           <select
//             value={hiringMultipleCandidates}
//             onChange={(e) => setHiringMultipleCandidates(e.target.value)}
//           >
//             <option value="">Select Option</option>
//             <option value="Yes">Yes</option>
//             <option value="No">No</option>
//           </select>
//         </div>

//         {/* Website Title */}
//         <div>
//           <div className="label-infoTag-wrapper">
//             <label>Personal Website Name</label>
//             <span>
//               <CiCircleInfo /> Optional
//             </span>
//           </div>
//           <input
//             type="text"
//             value={personalWebsiteTitle}
//             onChange={(e) => setPersonalWebsiteTitle(e.target.value)}
//             placeholder="Personal Website Name/Title"
//           />
//         </div>

//         {/* Website URL */}
//         <div>
//           <div className="label-infoTag-wrapper">
//             <label>Personal Website Link (URL)</label>
//             <span>
//               <CiCircleInfo /> Optional
//             </span>
//           </div>
//           <input
//             type="url"
//             value={personalWebsiteUrl}
//             onChange={(e) => setPersonalWebsiteUrl(e.target.value)}
//             placeholder="Personal Website Link (URL)"
//           />
//         </div>

//         <div>
//           <button
//             type="submit"
//             className="btn"
//             disabled={loading}
//           >
//             {loading ? "Posting..." : "Post Job"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default JobPost;




import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  FiBriefcase,
  FiType,
  FiMapPin,
  FiHome,
  FiFileText,
  FiList,
  FiAward,
  FiDollarSign,
  FiUsers,
  FiGlobe,
  FiLink
} from "react-icons/fi";
import { CiCircleInfo } from "react-icons/ci";
import {
  clearAllJobErrors,
  postJob,
  resetJobSlice,
} from "../store/slices/jobSlice";
import './postjob.css';

const JobPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    jobType: "",
    location: "",
    companyName: "",
    introduction: "",
    responsibilities: "",
    qualifications: "",
    offers: "",
    jobNiche: "",
    salary: "",
    hiringMultipleCandidates: "",
    personalWebsiteTitle: "",
    personalWebsiteUrl: ""
  });

  const nichesArray = [
    { name: "Software Development", icon: <FiBriefcase /> },
    { name: "Web Development", icon: <FiBriefcase /> },
    { name: "Cybersecurity", icon: <FiBriefcase /> },
    { name: "Data Science", icon: <FiBriefcase /> },
    { name: "Artificial Intelligence", icon: <FiBriefcase /> },
    { name: "Cloud Computing", icon: <FiBriefcase /> },
    { name: "DevOps", icon: <FiBriefcase /> },
    { name: "Mobile App Development", icon: <FiBriefcase /> },
    { name: "Blockchain", icon: <FiBriefcase /> },
    { name: "Database Administration", icon: <FiBriefcase /> },
    { name: "Network Administration", icon: <FiBriefcase /> },
    { name: "UI/UX Design", icon: <FiBriefcase /> },
    { name: "Game Development", icon: <FiBriefcase /> },
    { name: "IoT (Internet of Things)", icon: <FiBriefcase /> },
    { name: "Big Data", icon: <FiBriefcase /> },
    { name: "Machine Learning", icon: <FiBriefcase /> },
    { name: "IT Project Management", icon: <FiBriefcase /> },
    { name: "IT Support and Helpdesk", icon: <FiBriefcase /> },
    { name: "Systems Administration", icon: <FiBriefcase /> },
    { name: "IT Consulting", icon: <FiBriefcase /> }
  ];

  const cities = [
    "Bangalore", "Hyderabad", "Chennai", "Mumbai", "Pune",
    "Delhi", "Kolkata", "Noida", "Gurgaon", "Gurugram",
    "Ahmedabad", "Vizeg", "Lucknow", "Bhopal", "Jaipur",
    "Indore", "Kanpur", "Nagpur", "Patna", "Vadodara"
  ];

  const { loading, error, message } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) data.append(key, value);
    });
    dispatch(postJob(data));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
      navigate('/myjobs');
    }
  }, [dispatch, error, message, navigate]);

  return (
    <div className="job-post-container">
      <div className="glass-card job-post-card">
        <h2 className="job-post-title">
          <FiBriefcase className="title-icon" /> Post A Job
        </h2>

        <form onSubmit={handleSubmit} className="job-post-form">
          <div className="form-row">
            <div className="input-group">
              <label><FiType className="input-icon" /> Job Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter job title"
                required
              />
            </div>

            <div className="input-group">
              <label><FiBriefcase className="input-icon" /> Job Type</label>
              <select
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Job Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label><FiMapPin className="input-icon" /> Location</label>
              <select
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Location</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label><FiHome className="input-icon" /> Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Enter company name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label><FiAward className="input-icon" /> Job Niche</label>
              <select
                name="jobNiche"
                value={formData.jobNiche}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Job Niche</option>
                {nichesArray.map(niche => (
                  <option key={niche.name} value={niche.name}>
                    {niche.icon} {niche.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label><FiDollarSign className="input-icon" /> Salary Range</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="e.g., 50000 - 80000"
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label><FiFileText className="input-icon" /> Job Introduction</label>
            <textarea
              name="introduction"
              value={formData.introduction}
              onChange={handleInputChange}
              placeholder="Describe the job and company"
              rows={5}
              required
            />
          </div>

          <div className="input-group">
            <label><FiList className="input-icon" /> Responsibilities</label>
            <textarea
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleInputChange}
              placeholder="List job responsibilities"
              rows={5}
              required
            />
          </div>

          <div className="input-group">
            <label><FiAward className="input-icon" /> Qualifications</label>
            <textarea
              name="qualifications"
              value={formData.qualifications}
              onChange={handleInputChange}
              placeholder="List required qualifications"
              rows={5}
              required
            />
          </div>

          <div className="input-group">
            <div className="label-with-info">
              <label><FiBriefcase className="input-icon" /> What We Offer</label>
              <span className="info-tag"><CiCircleInfo /> Optional</span>
            </div>
            <textarea
              name="offers"
              value={formData.offers}
              onChange={handleInputChange}
              placeholder="Describe benefits and perks"
              rows={5}
            />
          </div>

          <div className="form-row">
            <div className="input-group">
              <div className="label-with-info">
                <label><FiUsers className="input-icon" /> Hiring Multiple?</label>
                <span className="info-tag"><CiCircleInfo /> Optional</span>
              </div>
              <select
                name="hiringMultipleCandidates"
                value={formData.hiringMultipleCandidates}
                onChange={handleInputChange}
              >
                <option value="">Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <div className="label-with-info">
                <label><FiGlobe className="input-icon" /> Website Title</label>
                <span className="info-tag"><CiCircleInfo /> Optional</span>
              </div>
              <input
                type="text"
                name="personalWebsiteTitle"
                value={formData.personalWebsiteTitle}
                onChange={handleInputChange}
                placeholder="Enter website name"
              />
            </div>

            <div className="input-group">
              <div className="label-with-info">
                <label><FiLink className="input-icon" /> Website URL</label>
                <span className="info-tag"><CiCircleInfo /> Optional</span>
              </div>
              <input
                type="url"
                name="personalWebsiteUrl"
                value={formData.personalWebsiteUrl}
                onChange={handleInputChange}
                placeholder="Enter website URL"
              />
            </div>
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={loading || !formData.title || !formData.jobType || 
                     !formData.location || !formData.companyName || 
                     !formData.introduction || !formData.responsibilities || 
                     !formData.qualifications || !formData.jobNiche || 
                     !formData.salary}
          >
            {loading ? (
              <span className="button-loading">
                <span className="spinner"></span> Posting...
              </span>
            ) : (
              <>
                <FiBriefcase className="button-icon" /> Post Job
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobPost;