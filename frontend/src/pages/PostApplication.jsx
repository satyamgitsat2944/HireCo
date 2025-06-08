// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import {
//   clearAllApplicationErrors,
//   postApplication,
//   resetApplicationSlice,
// } from "../store/slices/applicationSlice";
// import { toast } from "react-toastify";
// import { fetchSingleJob } from "../store/slices/jobSlice";
// import { IoMdCash } from "react-icons/io";
// import { FaToolbox } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

// const PostApplication = () => {
//   const { singleJob } = useSelector((state) => state.jobs);
//   const { isAuthenticated, user } = useSelector((state) => state.user);
//   const { loading, error, message } = useSelector(
//     (state) => state.applications
//   );

//   const { jobId } = useParams();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [coverLetter, setCoverLetter] = useState("");
//   const [resume, setResume] = useState("");

//   const navigateTo = useNavigate();
//   const dispatch = useDispatch();

//   const handlePostApplication = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("email", email);
//     formData.append("phone", phone);
//     formData.append("address", address);
//     formData.append("coverLetter", coverLetter);
//     if (resume) {
//       formData.append("resume", resume);
//     }
//     dispatch(postApplication(formData, jobId));
//   };

//   useEffect(() => {
//     if (user) {
//       setName(user.name || "");
//       setEmail(user.email || "");
//       setPhone(user.phone || "");
//       setAddress(user.address || "");
//       setCoverLetter(user.coverLetter || "");
//       setResume((user.resume && user.resume.url) || "");
//     }
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllApplicationErrors());
//     }
//     if (message) {
//       toast.success(message);
//       dispatch(resetApplicationSlice());
//     }
//     dispatch(fetchSingleJob(jobId));
//   }, [dispatch, error, message, jobId, user]);

//   let qualifications = [];
//   let responsibilities = [];
//   let offering = [];
//   if (singleJob.qualifications) {
//     qualifications = singleJob.qualifications.split(". ");
//   }
//   if (singleJob.responsibilities) {
//     responsibilities = singleJob.responsibilities.split(". ");
//   }
//   if (singleJob.offers) {
//     offering = singleJob.offers.split(". ");
//   }

//   const resumeHandler = (e) => {
//     const file = e.target.files[0];
//     setResume(file);
//   };

//   return (
//     <>
//       <article className="application_page">
//         <form>
//           <h3>Application Form</h3>
//           <div>
//             <label>Job Title</label>
//             <input type="text" placeholder={singleJob.title} disabled />
//           </div>
//           <div>
//             <label>Your Name</label>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Your Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Phone Number</label>
//             <input
//               type="number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </div>
//           <div>
//             <label>Address</label>
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </div>
//           {user && user.role === "Job Seeker" && (
//             <>
//               <div>
//                 <label>Coverletter</label>
//                 <textarea
//                   value={coverLetter}
//                   onChange={(e) => setCoverLetter(e.target.value)}
//                   rows={10}
//                 />
//               </div>
//               <div>
//                 <label>Resume</label>
//                 <input type="file" onChange={resumeHandler} />
//               </div>
//             </>
//           )}

//           {isAuthenticated && user.role === "Job Seeker" && (
//             <div style={{ alignItems: "flex-end" }}>
//               <button
//                 className="btn"
//                 onClick={handlePostApplication}
//                 disabled={loading}
//               >
//                 Apply
//               </button>
//             </div>
//           )}
//         </form>

//         <div className="job-details">
//           <header>
//             <h3>{singleJob.title}</h3>
//             {singleJob.personalWebsite && (
//               <Link target="_blank" to={singleJob.personalWebsite.url}>
//                 {singleJob.personalWebsite.title}
//               </Link>
//             )}
//             <p>{singleJob.location}</p>
//             <p>Rs. {singleJob.salary} a month</p>
//           </header>
//           <hr />
//           <section>
//             <div className="wrapper">
//               <h3>Job details</h3>
//               <div>
//                 <IoMdCash />
//                 <div>
//                   <span>Pay</span>
//                   <span>{singleJob.salary} a month</span>
//                 </div>
//               </div>
//               <div>
//                 <FaToolbox />
//                 <div>
//                   <span>Job type</span>
//                   <span>{singleJob.jobType}</span>
//                 </div>
//               </div>
//             </div>
//             <hr />
//             <div className="wrapper">
//               <h3>Location</h3>
//               <div className="location-wrapper">
//                 <FaLocationDot />
//                 <span>{singleJob.location}</span>
//               </div>
//             </div>
//             <hr />
//             <div className="wrapper">
//               <h3>Full Job Description</h3>
//               <p>{singleJob.introduction}</p>
//               {singleJob.qualifications && (
//                 <div>
//                   <h4>Qualifications</h4>
//                   <ul>
//                     {qualifications.map((element) => {
//                       return (
//                         <li key={element} style={{ listStyle: "inside" }}>
//                           {element}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               )}
//               {singleJob.responsibilities && (
//                 <div>
//                   <h4>Responsibilities</h4>
//                   <ul>
//                     {responsibilities.map((element) => {
//                       return (
//                         <li key={element} style={{ listStyle: "inside" }}>
//                           {element}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               )}
//               {singleJob.offers && (
//                 <div>
//                   <h4>Offering</h4>
//                   <ul>
//                     {offering.map((element) => {
//                       return (
//                         <li key={element} style={{ listStyle: "inside" }}>
//                           {element}
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </section>
//           <hr />
//           <footer>
//             <h3>Job Niche</h3>
//             <p>{singleJob.jobNiche}</p>
//           </footer>
//         </div>
//       </article>
//     </>
//   );
// };

// export default PostApplication;



import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  clearAllApplicationErrors,
  postApplication,
  resetApplicationSlice,
} from "../store/slices/applicationSlice";
import { toast } from "react-toastify";
import { fetchSingleJob } from "../store/slices/jobSlice";
import { IoMdCash } from "react-icons/io";
import { FaToolbox } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./PostApplication.css";

const PostApplication = () => {
  const { singleJob, loading: jobLoading } = useSelector((state) => state.jobs);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector(
    (state) => state.applications
  );

  const { jobId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handlePostApplication = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    if (resume) {
      formData.append("resume", resume);
    }
    dispatch(postApplication(formData, jobId));
  };

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
      setCoverLetter(user.coverLetter || "");
      setResume((user.resume && user.resume.url) || "");
    }
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetApplicationSlice());
      navigateTo("/applications");
    }
    dispatch(fetchSingleJob(jobId));
  }, [dispatch, error, message, jobId, user, navigateTo]);

  const qualifications = singleJob?.qualifications?.split(". ") || [];
  const responsibilities = singleJob?.responsibilities?.split(". ") || [];
  const offering = singleJob?.offers?.split(". ") || [];

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  if (jobLoading || !singleJob) {
    return (
      <div className="dark-blue-theme loading-container">
        <div className="glassmorphic-card">
          <h3>Loading job details...</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="dark-blue-theme">
      <article className="application-page-container">
        <div className="glassmorphic-card application-form">
          <form>
            <h3>Application Form</h3>
            <div className="form-group">
              <label>Job Title</label>
              <input
                type="text"
                placeholder={singleJob.title}
                disabled
                className="glassmorphic-input"
              />
            </div>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glassmorphic-input"
              />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glassmorphic-input"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="glassmorphic-input"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="glassmorphic-input"
              />
            </div>
            {user && user.role === "Job Seeker" && (
              <>
                <div className="form-group">
                  <label>Coverletter</label>
                  <textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    rows={10}
                    className="glassmorphic-input"
                  />
                </div>
                <div className="form-group">
                  <label>Resume</label>
                  <input 
                    type="file" 
                    onChange={resumeHandler} 
                    className="glassmorphic-input"
                  />
                </div>
              </>
            )}

            {isAuthenticated && user.role === "Job Seeker" && (
              <div className="form-actions">
                <button
                  className="glassmorphic-button"
                  onClick={handlePostApplication}
                  disabled={loading}
                >
                  {loading ? "Applying..." : "Apply"}
                </button>
              </div>
            )}
          </form>
        </div>

        <div className="glassmorphic-card job-details">
          <header>
            <h3>{singleJob.title}</h3>
            {singleJob.personalWebsite && (
              <Link
                target="_blank"
                to={singleJob.personalWebsite.url}
                className="website-link"
              >
                {singleJob.personalWebsite.title}
              </Link>
            )}
            <div className="job-meta">
              <span><FaLocationDot /> {singleJob.location}</span>
              <span><IoMdCash /> Rs. {singleJob.salary}/month</span>
            </div>
          </header>

          <div className="divider"></div>

          <section>
            <div className="detail-section">
              <h3>Job details</h3>
              <div className="detail-item">
                <IoMdCash className="detail-icon" />
                <div>
                  <span className="detail-label">Pay</span>
                  <span className="detail-value">Rs. {singleJob.salary}/month</span>
                </div>
              </div>
              <div className="detail-item">
                <FaToolbox className="detail-icon" />
                <div>
                  <span className="detail-label">Job type</span>
                  <span className="detail-value">{singleJob.jobType}</span>
                </div>
              </div>
            </div>

            <div className="divider"></div>

            <div className="detail-section">
              <h3>Location</h3>
              <div className="detail-item">
                <FaLocationDot className="detail-icon" />
                <span>{singleJob.location}</span>
              </div>
            </div>

            <div className="divider"></div>

            <div className="detail-section">
              <h3>Full Job Description</h3>
              <p>{singleJob.introduction}</p>
              {qualifications.length > 0 && (
                <div>
                  <h4>Qualifications</h4>
                  <ul>
                    {qualifications.map((element, index) => (
                      <li key={index} style={{ listStyle: "inside" }}>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {responsibilities.length > 0 && (
                <div>
                  <h4>Responsibilities</h4>
                  <ul>
                    {responsibilities.map((element, index) => (
                      <li key={index} style={{ listStyle: "inside" }}>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {offering.length > 0 && (
                <div>
                  <h4>Offering</h4>
                  <ul>
                    {offering.map((element, index) => (
                      <li key={index} style={{ listStyle: "inside" }}>
                        {element}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>

          <div className="divider"></div>

          <footer>
            <h3>Job Niche</h3>
            <p>{singleJob.jobNiche}</p>
          </footer>
        </div>
      </article>
    </div>
  );
};

export default PostApplication;