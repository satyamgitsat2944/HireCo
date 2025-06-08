// import React from "react";
// import { useSelector } from "react-redux";

// const MyProfile = () => {
//   const { user } = useSelector((state) => state.user);
//   return (
//     <div className="account_components">
//       <h3>My Profile</h3>
//       <div>
//         <label>Full Name</label>
//         <input
//           type="text"
//           disabled
//           value={user && user.name}
//           onChange={(e) => e.target.value}
//         />
//       </div>
//       <div>
//         <label>Email Address</label>
//         <input
//           type="email"
//           disabled
//           value={user && user.email}
//           onChange={(e) => e.target.value}
//         />
//       </div>
//       {user && user.role === "Job Seeker" && (
//         <div>
//           <label>My Preferred Job Niches</label>
//           <div
//             style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//           >
//             <input
//               type="text"
//               disabled
//               value={user && user.niches?.firstNiche}
//               onChange={(e) => e.target.value}
//             />
//             <input
//               type="text"
//               disabled
//               value={user && user.niches?.secondNiche}
//               onChange={(e) => e.target.value}
//             />
//             <input
//               type="text"
//               disabled
//               value={user && user.niches?.thirdNiche}
//               onChange={(e) => e.target.value}
//             />
//           </div>
//         </div>
//       )}
//       <div>
//         <label>Phone Number</label>
//         <input
//           type="number"
//           disabled
//           value={user && user.phone}
//           onChange={(e) => e.target.value}
//         />
//       </div>
//       <div>
//         <label>Address</label>
//         <input
//           type="text"
//           disabled
//           value={user && user.address}
//           onChange={(e) => e.target.value}
//         />
//       </div>
//       <div>
//         <label>Role</label>
//         <input
//           type="text"
//           disabled
//           value={user && user.role}
//           onChange={(e) => e.target.value}
//         />
//       </div>
//       <div>
//         <label>Joined On</label>
//         <input
//           type="text"
//           disabled
//           value={user && user.createdAt}
//           onChange={(e) => e.target.value}
//         />
//       </div>
//     </div>
//   );
// };

// export default MyProfile;


import React from "react";
import { useSelector } from "react-redux";
import { 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiBriefcase, 
  FiCalendar,
  FiAward,
  FiFileText,
  FiDownload
} from "react-icons/fi";
import { FaCode, FaShieldAlt, FaDatabase } from "react-icons/fa";
import  './myprofile.css';
const MyProfile = () => {
  const { user } = useSelector((state) => state.user);

  // Format the createdAt date
  const formattedDate = user?.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : '';

  const getNicheIcon = (niche) => {
    if (!niche) return <FaCode className="niche-icon" />;
    if (niche.toLowerCase().includes('cyber') || niche.toLowerCase().includes('security')) {
      return <FaShieldAlt className="niche-icon" />;
    }
    if (niche.toLowerCase().includes('data')) {
      return <FaDatabase className="niche-icon" />;
    }
    return <FaCode className="niche-icon" />;
  };

  return (
    <div className="profile-container">
      <div className="glass-card profile-view-card">
        <h3 className="profile-title">
          <FiUser className="title-icon" /> My Profile
        </h3>
        
        <div className="profile-info-grid">
          <div className="profile-info-group">
            <label><FiUser className="input-icon" /> Full Name</label>
            <div className="profile-info-value">
              {user?.name || "Not provided"}
            </div>
          </div>

          <div className="profile-info-group">
            <label><FiMail className="input-icon" /> Email Address</label>
            <div className="profile-info-value">
              {user?.email}
            </div>
          </div>

          <div className="profile-info-group">
            <label><FiPhone className="input-icon" /> Phone Number</label>
            <div className="profile-info-value">
              {user?.phone || "Not provided"}
            </div>
          </div>

          <div className="profile-info-group">
            <label><FiMapPin className="input-icon" /> Address</label>
            <div className="profile-info-value">
              {user?.address || "Not provided"}
            </div>
          </div>

          <div className="profile-info-group">
            <label><FiBriefcase className="input-icon" /> Role</label>
            <div className="profile-info-value">
              {user?.role}
            </div>
          </div>

          <div className="profile-info-group">
            <label><FiCalendar className="input-icon" /> Joined On</label>
            <div className="profile-info-value">
              {formattedDate}
            </div>
          </div>

          {user && user.role === "Job Seeker" && (
            <>
              <div className="profile-info-group full-width">
                <label><FiAward className="input-icon" /> Preferred Job Niches</label>
                <div className="niches-display">
                  {user?.niches?.firstNiche && (
                    <div className="niche-item">
                      {getNicheIcon(user.niches.firstNiche)}
                      {user.niches.firstNiche}
                    </div>
                  )}
                  {user?.niches?.secondNiche && (
                    <div className="niche-item">
                      {getNicheIcon(user.niches.secondNiche)}
                      {user.niches.secondNiche}
                    </div>
                  )}
                  {user?.niches?.thirdNiche && (
                    <div className="niche-item">
                      {getNicheIcon(user.niches.thirdNiche)}
                      {user.niches.thirdNiche}
                    </div>
                  )}
                  {!user?.niches?.firstNiche && !user?.niches?.secondNiche && !user?.niches?.thirdNiche && (
                    <div className="niche-item">No niches selected</div>
                  )}
                </div>
              </div>

              {user?.coverLetter && (
                <div className="profile-info-group full-width">
                  <label><FiFileText className="input-icon" /> Cover Letter</label>
                  <div className="cover-letter">
                    {user.coverLetter}
                  </div>
                </div>
              )}

              {user?.resume?.url && (
                <div className="profile-info-group full-width">
                  <label><FiFileText className="input-icon" /> Resume</label>
                  <a 
                    href={user.resume.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="resume-link"
                  >
                    <FiDownload className="link-icon" /> View Resume
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;