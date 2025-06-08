import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaLock, FaUnlock, FaEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { resetPassword, clearErrors } from "../store/slices/updateProfileSlice";
import "./resetpassword.css"; // Create this CSS file

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { token } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, success, loading } = useSelector((state) => state.updateProfile);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }
    dispatch(resetPassword({ token, password }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Password updated successfully");
      navigate("/login");
    }
  }, [dispatch, error, success, navigate]);

  return (
    <div className="reset-password-container">
      <div className="glass-card">
        <h2>Reset Your Password</h2>
        <form onSubmit={submitHandler}>
          <div className="input-group">
            <label><FaLock /> New Password</label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter new password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaRegEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="input-group">
            <label><FaUnlock /> Confirm Password</label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            className="auth-button"
            disabled={loading || !password || password !== confirmPassword}
          >
            {loading ? (
              <span className="button-loading">
                <span className="spinner"></span> Resetting...
              </span>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;