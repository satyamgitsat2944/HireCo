import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaAddressBook, FaPencilAlt, FaRegUser, FaGoogle } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
  };

  const loginWithGoogle = () => {
    setGoogleLoading(true);
    window.open("http://localhost:4000/auth/google", "_self");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated, message]);

  const styles = {
    container: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
      padding: "20px",
    },
    glassCard: {
      backdropFilter: "blur(16px)",
      backgroundColor: "rgba(15, 23, 42, 0.7)",
      border: "1px solid rgba(30, 58, 138, 0.3)",
      borderRadius: "12px",
      padding: "2rem",
      width: "100%",
      maxWidth: "800px",
      boxShadow: "0 8px 32px 0 rgba(30, 58, 138, 0.3)",
    },
    header: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    heading: {
      color: "#e2e8f0",
      margin: 0,
      fontSize: "1.8rem",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    },
    wrapper: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1rem",
      marginBottom: "1rem",
    },
    inputGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    label: {
      color: "#94a3b8",
      fontSize: "0.9rem",
    },
    inputContainer: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    select: {
      width: "100%",
      padding: "12px 12px 12px 40px",
      borderRadius: "8px",
      border: "1px solid rgba(96, 165, 250, 0.3)",
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      color: "#f8fafc",
      fontSize: "1rem",
      outline: "none",
      appearance: "none",
    },
    input: {
      width: "100%",
      padding: "12px 12px 12px 40px",
      borderRadius: "8px",
      border: "1px solid rgba(96, 165, 250, 0.3)",
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      color: "#f8fafc",
      fontSize: "1rem",
      outline: "none",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid rgba(96, 165, 250, 0.3)",
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      color: "#f8fafc",
      fontSize: "1rem",
      outline: "none",
      minHeight: "120px",
      resize: "vertical",
    },
    fileInput: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid rgba(96, 165, 250, 0.3)",
      backgroundColor: "rgba(15, 23, 42, 0.5)",
      color: "#f8fafc",
    },
    icon: {
      position: "absolute",
      left: "12px",
      color: "#60a5fa",
      fontSize: "1.1rem",
    },
    button: {
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#2563eb",
      color: "#ffffff",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      marginTop: "1rem",
      ":disabled": {
        opacity: 0.7,
      },
      ":hover:not(:disabled)": {
        backgroundColor: "#1d4ed8",
      },
    },
    googleButton: {
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "white",
      color: "#5f6368",
      fontSize: "1rem",
      fontWeight: "500",
      cursor: "pointer",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      marginTop: "0.5rem",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12)",
      ":disabled": {
        opacity: 0.7,
      },
      ":hover:not(:disabled)": {
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      },
    },
    googleLogo: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
    },
    registerLink: {
      color: "#93c5fd",
      textAlign: "center",
      marginTop: "1rem",
      textDecoration: "none",
      fontSize: "0.9rem",
      ":hover": {
        color: "#bfdbfe",
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.glassCard}>
        <div style={styles.header}>
          <h3 style={styles.heading}>Create a new account</h3>
        </div>
        <form onSubmit={handleRegister} style={styles.form}>
          <div style={styles.wrapper}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Register As</label>
              <div style={styles.inputContainer}>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                  style={styles.select}
                >
                  <option value="">Select Role</option>
                  <option value="Employer">Register as an Employer</option>
                  <option value="Job Seeker">Register as a Job Seeker</option>
                </select>
                <FaRegUser style={styles.icon} />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name</label>
              <div style={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={styles.input}
                />
                <FaPencilAlt style={styles.icon} />
              </div>
            </div>
          </div>

          <div style={styles.wrapper}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <div style={styles.inputContainer}>
                <input
                  type="email"
                  placeholder="youremail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={styles.input}
                />
                <MdOutlineMailOutline style={styles.icon} />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number</label>
              <div style={styles.inputContainer}>
                <input
                  type="number"
                  placeholder="111-222-333"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={styles.input}
                />
                <FaPhoneFlip style={styles.icon} />
              </div>
            </div>
          </div>

          <div style={styles.wrapper}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Address</label>
              <div style={styles.inputContainer}>
                <input
                  type="text"
                  placeholder="Your Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={styles.input}
                />
                <FaAddressBook style={styles.icon} />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Password</label>
              <div style={styles.inputContainer}>
                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={styles.input}
                />
                <RiLock2Fill style={styles.icon} />
              </div>
            </div>
          </div>

          {role === "Job Seeker" && (
            <>
              <div style={styles.wrapper}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>First Niche</label>
                  <div style={styles.inputContainer}>
                    <select
                      value={firstNiche}
                      onChange={(e) => setFirstNiche(e.target.value)}
                      required
                      style={styles.select}
                    >
                      <option value="">Select Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>{niche}</option>
                      ))}
                    </select>
                    <MdCategory style={styles.icon} />
                  </div>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Second Niche</label>
                  <div style={styles.inputContainer}>
                    <select
                      value={secondNiche}
                      onChange={(e) => setSecondNiche(e.target.value)}
                      style={styles.select}
                    >
                      <option value="">Select Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>{niche}</option>
                      ))}
                    </select>
                    <MdCategory style={styles.icon} />
                  </div>
                </div>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Third Niche</label>
                  <div style={styles.inputContainer}>
                    <select
                      value={thirdNiche}
                      onChange={(e) => setThirdNiche(e.target.value)}
                      style={styles.select}
                    >
                      <option value="">Select Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option key={index} value={niche}>{niche}</option>
                      ))}
                    </select>
                    <MdCategory style={styles.icon} />
                  </div>
                </div>
              </div>

              <div style={styles.wrapper}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Cover Letter</label>
                  <textarea
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    required
                    style={styles.textarea}
                    placeholder="Tell us about your skills and experience..."
                  />
                </div>
              </div>

              <div style={styles.wrapper}>
                <div style={styles.inputGroup}>
                  <label style={styles.label}>Resume</label>
                  <input
                    type="file"
                    onChange={resumeHandler}
                    required
                    style={styles.fileInput}
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>
            </>
          )}

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <button 
            type="button" 
            style={styles.googleButton}
            onClick={loginWithGoogle}
            disabled={loading || googleLoading}
          >
            <div style={styles.googleLogo}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2045C17.64 8.5663 17.5827 7.9527 17.4764 7.3635H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2526 17.64 11.9454 17.64 9.2045Z" fill="#4285F4"/>
                <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
                <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.5931 3.68182 9C3.68182 8.4069 3.78409 7.83 3.96409 7.29V4.9582H0.957273C0.347727 6.1731 0 7.5477 0 9C0 10.4523 0.347727 11.8269 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
                <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
              </svg>
            </div>
            {googleLoading ? "Redirecting..." : "Sign Up With Google"}
          </button>

          <Link to="/login" style={styles.registerLink}>
            Already have an account? Login Now
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;