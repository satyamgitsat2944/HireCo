
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { clearAllUserErrors, login } from "../store/slices/userSlice";
// import { toast } from "react-toastify";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";

// const Login = () => {
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, isAuthenticated, error } = useSelector(
//     (state) => state.user
//   );

//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("role", role);
//     formData.append("email", email);
//     formData.append("password", password);
//     dispatch(login(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUserErrors());
//     }
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, error, loading, isAuthenticated]);

//   return (
//     <>
//       <section className="authPage">
//         <div className="container login-container">
//           <div className="header">
//             <h3>Login to your account</h3>
//           </div>
//           <form onSubmit={handleLogin}>
//             <div className="inputTag">
//               <label>Login As</label>
//               <div>
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                   <option value="">Select Role</option>
//                   <option value="Employer">Login as an Employer</option>
//                   <option value="Job Seeker">Login as a Job Seeker</option>
//                 </select>
//                 <FaRegUser />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Email</label>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="youremail@gmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <MdOutlineMailOutline />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Password</label>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <RiLock2Fill />
//               </div>
//             </div>
//             <button type="submit" disabled={loading}>
//               Login
//             </button>
//             <Link to={"/register"}>Register Now</Link>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;



// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import { clearAllUserErrors, login } from "../store/slices/userSlice";
// import { toast } from "react-toastify";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { RiLock2Fill } from "react-icons/ri";

// const Login = () => {
//   const [role, setRole] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { loading, isAuthenticated, error } = useSelector(
//     (state) => state.user
//   );

//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("role", role);
//     formData.append("email", email);
//     formData.append("password", password);
//     dispatch(login(formData));
//   };

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUserErrors());
//     }
//     if (isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, error, loading, isAuthenticated]);

//   const loginWithGoogle = () => {
//     window.open("http://localhost:4000/auth/google", "_self");
//   };

//   return (
//     <>
//       <section className="authPage">
//         <div className="container login-container">
//           <div className="header">
//             <h3>Login to your account</h3>
//           </div>
//           <form onSubmit={handleLogin}>
//             <div className="inputTag">
//               <label>Login As</label>
//               <div>
//                 <select value={role} onChange={(e) => setRole(e.target.value)}>
//                   <option value="">Select Role</option>
//                   <option value="Employer">Login as an Employer</option>
//                   <option value="Job Seeker">Login as a Job Seeker</option>
//                 </select>
//                 <FaRegUser />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Email</label>
//               <div>
//                 <input
//                   type="email"
//                   placeholder="youremail@gmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <MdOutlineMailOutline />
//               </div>
//             </div>
//             <div className="inputTag">
//               <label>Password</label>
//               <div>
//                 <input
//                   type="password"
//                   placeholder="Your Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <RiLock2Fill />
//               </div>
//             </div>
//             <button type="submit" disabled={loading}>
//               Login
//             </button>
//             <button className="login-with-google-btn" onClick={loginWithGoogle}>
//               Sign In With Google
//             </button>
//             <Link to="/register">Register Now</Link>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;




import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { clearAllUserErrors, login, setUserFromSession } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaRegUser, FaGoogle } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import axios from "axios";

const Login = () => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const [googleLoading, setGoogleLoading] = useState(false);
  const errorParam = searchParams.get('error');

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (errorParam === 'google_auth_failed') {
      toast.error("Google login failed. Please try again.");
    }

    const checkAuthStatus = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/auth/check", {
          withCredentials: true
        });
        
        if (data.isAuthenticated) {
          dispatch(setUserFromSession(data.user));
          navigate("/dashboard");
        }
      } catch (err) {
        console.error("Error checking auth status:", err);
      }
    };

    checkAuthStatus();
  }, [dispatch, navigate, errorParam]);

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);
    dispatch(login(formData));
  };


  // **** change 

// Add this useEffect to handle the Google auth callback
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  
  if (token) {
    // Store token in memory (not localStorage for security)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    // Fetch user details
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('/api/v1/user/current', {
          withCredentials: true
        });
        
        dispatch(setUserFromSession({
          ...data.user,
          role: data.user.role || 'Job Seeker' // Ensure role exists
        }));
        
        navigate('/dashboard');
      } catch (error) {
        toast.error('Failed to load user details');
      }
    };
    
    fetchUser();
  }
}, [dispatch, navigate]);





  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  const loginWithGoogle = () => {
    // Use window.location instead of window.open
    window.location.href = ` http://localhost:4000/auth/google`;
  };
 

  return (
    <div style={styles.container}>
      <div style={styles.glassCard}>
        <div style={styles.header}>
          <h3 style={styles.heading}>Login to your account</h3>
        </div>
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Login As</label>
            <div style={styles.inputContainer}>
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                required
                style={styles.select}
              >
                <option value="">Select Role</option>
                <option value="Employer">Login as an Employer</option>
                <option value="Job Seeker">Login as a Job Seeker</option>
              </select>
              <FaRegUser style={styles.icon} />
            </div>
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
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
          <button 
            type="submit" 
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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
  {googleLoading ? "Redirecting..." : "Sign In With Google"}
</button>
          <Link to="/register" style={styles.registerLink}>
            Don't have an account? Register Now
          </Link>
        </form>
      </div>
    </div>
  );
};

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
    maxWidth: "500px",
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
    opacity: 1,
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
  googleIcon: {
    fontSize: "1.1rem",
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

export default Login;