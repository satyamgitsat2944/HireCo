// // import React, { useEffect, useState } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   clearAllUpdateProfileErrors,
// //   updatePassword,
// // } from "../store/slices/updateProfileSlice";
// // import { getUser } from "../store/slices/userSlice";
// // import { FaRegEyeSlash, FaEye } from "react-icons/fa";
// // import { toast } from "react-toastify";

// // const UpdatePassword = () => {
// //   const [oldPassword, setOldPassword] = useState("");
// //   const [newPassword, setNewPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);

// //   const { loading, error, isUpdated } = useSelector(
// //     (state) => state.updateProfile
// //   );

// //   const dispatch = useDispatch();

// //   const handleUpdatePassword = () => {
// //     const formData = new FormData();
// //     formData.append("oldPassword", oldPassword);
// //     formData.append("newPassword", newPassword);
// //     formData.append("confirmPassword", confirmPassword);
// //     dispatch(updatePassword(formData));
// //   };

// //   useEffect(() => {
// //     if (error) {
// //       toast.error(error);
// //       dispatch(clearAllUpdateProfileErrors());
// //     }
// //     if (isUpdated) {
// //       toast.success("Password Updated");
// //       dispatch(getUser());
// //       dispatch(clearAllUpdateProfileErrors());
// //     }
// //   }, [dispatch, loading, error, isUpdated]);

// //   return (
// //     <div className="account_components update_password_component">
// //       <h3>Update Password</h3>
// //       <div>
// //         <label>Current Password</label>
// //         <input
// //           type={showPassword ? "text" : "password"}
// //           value={oldPassword}
// //           onChange={(e) => setOldPassword(e.target.value)}
// //         />
// //         {showPassword ? (
// //           <FaRegEyeSlash
// //             className="eye_icon"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //         ) : (
// //           <FaEye
// //             className="eye_icon"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //         )}
// //       </div>
// //       <div>
// //         <label>New Password</label>
// //         <input
// //           type={showPassword ? "text" : "password"}
// //           value={newPassword}
// //           onChange={(e) => setNewPassword(e.target.value)}
// //         />
// //         {showPassword ? (
// //           <FaRegEyeSlash
// //             className="eye_icon"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //         ) : (
// //           <FaEye
// //             className="eye_icon"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //         )}
// //       </div>
// //       <div>
// //         <label>Confirm Password</label>
// //         <input
// //           type={showPassword ? "text" : "password"}
// //           value={confirmPassword}
// //           onChange={(e) => setConfirmPassword(e.target.value)}
// //         />
// //         {showPassword ? (
// //           <FaRegEyeSlash
// //             className="eye_icon"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //         ) : (
// //           <FaEye
// //             className="eye_icon"
// //             onClick={() => setShowPassword(!showPassword)}
// //           />
// //         )}
// //       </div>
// //       <div className="save_change_btn_wrapper">
// //         <button
// //           className="btn"
// //           onClick={handleUpdatePassword}
// //           disabled={loading}
// //         >
// //           Update Password
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default UpdatePassword;


// import React, { useEffect, useState, useCallback } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { FaRegEyeSlash, FaEye, FaKey, FaLock, FaUnlock } from "react-icons/fa";
// import { toast } from "react-toastify";
// import {
//   clearAllUpdateProfileErrors,
//   updatePassword,
// } from "../store/slices/updateProfileSlice";
// import { getUser } from "../store/slices/userSlice";
// import "./updatepassword.css";

// const UpdatePassword = () => {
//   const [passwords, setPasswords] = useState({
//     oldPassword: "",
//     newPassword: "",
//     confirmPassword: ""
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const { loading, error, isUpdated } = useSelector(
//     (state) => state.updateProfile
//   );
//   const dispatch = useDispatch();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setPasswords(prev => ({ ...prev, [name]: value }));
//   };

//   const handleUpdatePassword = useCallback(() => {
//     const formData = new FormData();
//     Object.entries(passwords).forEach(([key, value]) => {
//       formData.append(key, value);
//     });
//     dispatch(updatePassword(formData));
//   }, [dispatch, passwords]);

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUpdateProfileErrors());
//     }
//     if (isUpdated) {
//       toast.success("Password Updated Successfully");
//       dispatch(getUser());
//       setPasswords({
//         oldPassword: "",
//         newPassword: "",
//         confirmPassword: ""
//       });
//     }
//   }, [dispatch, error, isUpdated]);

//   return (
//     <div className="update-profile-container">
//       <div className="glass-card password-card">
//         <h2 className="auth-title">
//           <FaKey className="title-icon" /> Update Password
//         </h2>
        
//         <div className="input-group">
//           <label><FaLock className="input-icon" /> Current Password</label>
//           <div className="password-input">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="oldPassword"
//               value={passwords.oldPassword}
//               onChange={handleInputChange}
//               placeholder="Enter current password"
//             />
//             <button 
//               type="button" 
//               className="toggle-password"
//               onClick={() => setShowPassword(!showPassword)}
//               aria-label={showPassword ? "Hide password" : "Show password"}
//             >
//               {showPassword ? <FaRegEyeSlash /> : <FaEye />}
//             </button>
//           </div>
//         </div>

//         <div className="input-group">
//           <label><FaUnlock className="input-icon" /> New Password</label>
//           <div className="password-input">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="newPassword"
//               value={passwords.newPassword}
//               onChange={handleInputChange}
//               placeholder="Enter new password"
//             />
//             <div className="password-strength">
//               {passwords.newPassword && (
//                 <div className={`strength-meter ${passwords.newPassword.length < 6 ? 'weak' : passwords.newPassword.length < 10 ? 'medium' : 'strong'}`}>
//                   <div className="strength-bar"></div>
//                   <span>
//                     {passwords.newPassword.length < 6 ? 'Weak' : passwords.newPassword.length < 10 ? 'Medium' : 'Strong'}
//                   </span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="input-group">
//           <label><FaUnlock className="input-icon" /> Confirm Password</label>
//           <div className="password-input">
//             <input
//               type={showPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={passwords.confirmPassword}
//               onChange={handleInputChange}
//               placeholder="Confirm new password"
//             />
//             {passwords.confirmPassword && passwords.newPassword !== passwords.confirmPassword && (
//               <div className="password-mismatch">
//                 Passwords don't match
//               </div>
//             )}
//           </div>
//         </div>

//         <button
//           className="auth-button"
//           onClick={handleUpdatePassword}
//           disabled={loading || !passwords.oldPassword || !passwords.newPassword || passwords.newPassword !== passwords.confirmPassword}
//         >
//           {loading ? (
//             <span className="button-loading">
//               <span className="spinner"></span> Updating...
//             </span>
//           ) : (
//             <>
//               <FaKey className="button-icon" /> Update Password
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default UpdatePassword;


import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaRegEyeSlash, FaEye, FaKey, FaLock, FaUnlock, FaQuestionCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  clearAllUpdateProfileErrors,
  updatePassword,
  forgotPassword,
} from "../store/slices/updateProfileSlice";
import { getUser } from "../store/slices/userSlice";
import "./updatepassword.css";

const UpdatePassword = () => {
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });
  const [email, setEmail] = useState("");
  const [showForgotPasswordForm, setShowForgotPasswordForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error, isUpdated, message } = useSelector(
    (state) => state.updateProfile
  );
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswords(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdatePassword = useCallback(() => {
    const formData = new FormData();
    Object.entries(passwords).forEach(([key, value]) => {
      formData.append(key, value);
    });
    dispatch(updatePassword(formData));
  }, [dispatch, passwords]);

  const handleForgotPassword = useCallback(() => {
    dispatch(forgotPassword({ email: user?.email || email }));
  }, [dispatch, email, user]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdated) {
      toast.success("Password Updated Successfully");
      dispatch(getUser());
      setPasswords({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      });
    }
    if (message) {
      toast.success(message);
      setShowForgotPasswordForm(false);
    }
  }, [dispatch, error, isUpdated, message]);

  return (
    <div className="update-profile-container">
      <div className="glass-card password-card">
        <h2 className="auth-title">
          <FaKey className="title-icon" /> Update Password
        </h2>
        
        {!showForgotPasswordForm ? (
          <>
            <div className="input-group">
              <label><FaLock className="input-icon" /> Current Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="oldPassword"
                  value={passwords.oldPassword}
                  onChange={handleInputChange}
                  placeholder="Enter current password"
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label><FaUnlock className="input-icon" /> New Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="newPassword"
                  value={passwords.newPassword}
                  onChange={handleInputChange}
                  placeholder="Enter new password"
                />
                <div className="password-strength">
                  {passwords.newPassword && (
                    <div className={`strength-meter ${passwords.newPassword.length < 6 ? 'weak' : passwords.newPassword.length < 10 ? 'medium' : 'strong'}`}>
                      <div className="strength-bar"></div>
                      <span>
                        {passwords.newPassword.length < 6 ? 'Weak' : passwords.newPassword.length < 10 ? 'Medium' : 'Strong'}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="input-group">
              <label><FaUnlock className="input-icon" /> Confirm Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={passwords.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm new password"
                />
                {passwords.confirmPassword && passwords.newPassword !== passwords.confirmPassword && (
                  <div className="password-mismatch">
                    Passwords don't match
                  </div>
                )}
              </div>
            </div>

            <button
              className="auth-button"
              onClick={handleUpdatePassword}
              disabled={loading || !passwords.oldPassword || !passwords.newPassword || passwords.newPassword !== passwords.confirmPassword}
            >
              {loading ? (
                <span className="button-loading">
                  <span className="spinner"></span> Updating...
                </span>
              ) : (
                <>
                  <FaKey className="button-icon" /> Update Password
                </>
              )}
            </button>

            <div className="forgot-password-link">
              <button 
                className="text-button"
                onClick={() => setShowForgotPasswordForm(true)}
              >
                <FaQuestionCircle /> Forgot Password?
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                value={user?.email || email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                disabled={!!user?.email}
              />
            </div>

            <button
              className="auth-button"
              onClick={handleForgotPassword}
              disabled={loading || (!user?.email && !email)}
            >
              {loading ? (
                <span className="button-loading">
                  <span className="spinner"></span> Sending...
                </span>
              ) : (
                "Send Reset Link"
              )}
            </button>

            <div className="back-to-login">
              <button 
                className="text-button"
                onClick={() => setShowForgotPasswordForm(false)}
              >
                Back to Update Password
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UpdatePassword;