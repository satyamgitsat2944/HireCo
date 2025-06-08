// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { logout, clearAllUserErrors } from "../store/slices/userSlice";
// import { LuMoveRight } from "react-icons/lu";
// import MyProfile from "../components/MyProfile";
// import UpdateProfile from "../components/UpdateProfile";
// import UpdatePassword from "../components/UpdatePassword";
// import MyJobs from "../components/MyJobs";
// import JobPost from "../components/JobPost";
// import Applications from "../components/Applications";
// import MyApplications from "../components/MyApplications";

// const Dashboard = () => {
//   const [show, setShow] = useState(false);
//   const [componentName, setComponentName] = useState("My Profile");

//   const { loading, isAuthenticated, error, user } = useSelector(
//     (state) => state.user
//   );

//   const dispatch = useDispatch();
//   const navigateTo = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     toast.success("Logged out successfully.");
//   };
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUserErrors());
//     }
//     if (!isAuthenticated) {
//       navigateTo("/");
//     }
//   }, [dispatch, error, loading, isAuthenticated]);

//   return (
//     <>
//       <section className="account">
//         <div className="component_header">
//           <p>Dashboard</p>
//           <p>
//             Welcome! <span>{user && user.name}</span>
//           </p>
//         </div>
//         <div className="container">
//           <div className={show ? "sidebar showSidebar" : "sidebar"}>
//             <ul className="sidebar_links">
//               <h4>Manage Account</h4>
//               <li>
//                 <button
//                   onClick={() => {
//                     setComponentName("My Profile");
//                     setShow(!show);
//                   }}
//                 >
//                   My Profile
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => {
//                     setComponentName("Update Profile");
//                     setShow(!show);
//                   }}
//                 >
//                   Update Profile
//                 </button>
//               </li>
//               <li>
//                 <button
//                   onClick={() => {
//                     setComponentName("Update Password");
//                     setShow(!show);
//                   }}
//                 >
//                   Update Password
//                 </button>
//               </li>

//               {user && user.role === "Employer" && (
//                 <li>
//                   <button
//                     onClick={() => {
//                       setComponentName("Job Post");
//                       setShow(!show);
//                     }}
//                   >
//                     Post New Job
//                   </button>
//                 </li>
//               )}
//               {user && user.role === "Employer" && (
//                 <li>
//                   <button
//                     onClick={() => {
//                       setComponentName("My Jobs");
//                       setShow(!show);
//                     }}
//                   >
//                     My Jobs
//                   </button>
//                 </li>
//               )}
//               {user && user.role === "Employer" && (
//                 <li>
//                   <button
//                     onClick={() => {
//                       setComponentName("Applications");
//                       setShow(!show);
//                     }}
//                   >
//                     Applications
//                   </button>
//                 </li>
//               )}
//               {user && user.role === "Job Seeker" && (
//                 <li>
//                   <button
//                     onClick={() => {
//                       setComponentName("My Applications");
//                       setShow(!show);
//                     }}
//                   >
//                     My Applications
//                   </button>
//                 </li>
//               )}
//               <li>
//                 <button onClick={handleLogout}>Logout</button>
//               </li>
//             </ul>
//           </div>
//           <div className="banner">
//             <div
//               className={
//                 show ? "sidebar_icon move_right" : "sidebar_icon move_left"
//               }
//             >
//               <LuMoveRight
//                 onClick={() => setShow(!show)}
//                 className={show ? "left_arrow" : "right_arrow"}
//               />
//             </div>
//             {(() => {
//               switch (componentName) {
//                 case "My Profile":
//                   return <MyProfile />;
//                   break;
//                 case "Update Profile":
//                   return <UpdateProfile />;
//                   break;
//                 case "Update Password":
//                   return <UpdatePassword />;
//                   break;
//                 case "Job Post":
//                   return <JobPost />;
//                   break;
//                 case "My Jobs":
//                   return <MyJobs />;
//                   break;
//                 case "Applications":
//                   return <Applications />;
//                   break;
//                 case "My Applications":
//                   return <MyApplications />;
//                   break;

//                 default:
//                   <MyProfile />;
//                   break;
//               }
//             })()}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState, useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { logout, clearAllUserErrors } from "../store/slices/userSlice";
// import { LuMoveRight } from "react-icons/lu";
// import MyProfile from "../components/MyProfile";
// import UpdateProfile from "../components/UpdateProfile";
// import UpdatePassword from "../components/UpdatePassword";
// import MyJobs from "../components/MyJobs";
// import JobPost from "../components/JobPost";
// import Applications from "../components/Applications";
// import MyApplications from "../components/MyApplications";
// import "./dashboard.css";

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [activeComponent, setActiveComponent] = useState("My Profile");
//   const { loading, isAuthenticated, error, user } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Memoized logout handler
//   const handleLogout = useCallback(() => {
//     dispatch(logout());
//     toast.success("Logged out successfully.");
//   }, [dispatch]);

//   // Effect for error handling and authentication check
//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllUserErrors());
//     }
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//   }, [dispatch, error, isAuthenticated, navigate]);

//   // Dashboard components configuration
//   const dashboardComponents = {
//     "My Profile": <MyProfile />,
//     "Update Profile": <UpdateProfile />,
//     "Update Password": <UpdatePassword />,
//     "Job Post": user?.role === "Employer" ? <JobPost /> : null,
//     "My Jobs": user?.role === "Employer" ? <MyJobs /> : null,
//     "Applications": user?.role === "Employer" ? <Applications /> : null,
//     "My Applications": user?.role === "Job Seeker" ? <MyApplications /> : null
//   };

//   // Navigation items configuration
//   const navItems = [
//     { name: "My Profile", role: "All" },
//     { name: "Update Profile", role: "All" },
//     { name: "Update Password", role: "All" },
//     { name: "Job Post", role: "Employer" },
//     { name: "My Jobs", role: "Employer" },
//     { name: "Applications", role: "Employer" },
//     { name: "My Applications", role: "Job Seeker" },
//     { name: "Logout", role: "All", action: handleLogout }
//   ];

//   // Toggle sidebar
//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   // Handle navigation item click
//   const handleNavItemClick = (componentName, action) => {
//     if (action) {
//       action();
//     } else {
//       setActiveComponent(componentName);
//     }
//     setSidebarOpen(false);
//   };

//   return (
//     <section className="dashboard">
//       <div className="dashboard-header">
//         <h1>Dashboard</h1>
//         <p className="welcome-message">
//           Welcome! <span>{user?.name || "User"}</span>
//         </p>
//       </div>

//       <div className="dashboard-container">
//         {/* Sidebar */}
//         <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
//           <h4>Manage Account</h4>
//           <ul className="sidebar-nav">
//             {navItems.map((item) => (
//               (item.role === "All" || user?.role === item.role) && (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => handleNavItemClick(item.name, item.action)}
//                     className={activeComponent === item.name ? "active" : ""}
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               )
//             ))}
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <main className="dashboard-content">
//           {/* Sidebar Toggle Button */}
//           <button className="sidebar-toggle" onClick={toggleSidebar}>
//             <LuMoveRight className={`toggle-icon ${sidebarOpen ? "open" : ""}`} />
//           </button>

//           {/* Active Component */}
//           <div className="component-wrapper">
//             {dashboardComponents[activeComponent] || <MyProfile />}
//           </div>
//         </main>
//       </div>
//     </section>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logout, clearAllUserErrors } from "../store/slices/userSlice";
import { 
  LuMoveRight, 
  LuUser, 
  LuUserCog, 
  LuKey, 
  LuBriefcase, 
  LuList, 
  LuFileText, 
  LuLogOut 
} from "react-icons/lu";
import MyProfile from "../components/MyProfile";
import UpdateProfile from "../components/UpdateProfile";
import UpdatePassword from "../components/UpdatePassword";
import MyJobs from "../components/MyJobs";
import JobPost from "../components/JobPost";
import Applications from "../components/Applications";
import MyApplications from "../components/MyApplications";
import "./dashboard.css";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("My Profile");
  const { loading, isAuthenticated, error, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    toast.success("Logged out successfully.");
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  const dashboardComponents = {
    "My Profile": <MyProfile />,
    "Update Profile": <UpdateProfile />,
    "Update Password": <UpdatePassword />,
    "Job Post": user?.role === "Employer" ? <JobPost /> : null,
    "My Jobs": user?.role === "Employer" ? <MyJobs /> : null,
    "Applications": user?.role === "Employer" ? <Applications /> : null,
    "My Applications": user?.role === "Job Seeker" ? <MyApplications /> : null
  };

  const navItems = [
    { name: "My Profile", role: "All", icon: <LuUser /> },
    { name: "Update Profile", role: "All", icon: < LuUserCog /> },
    { name: "Update Password", role: "All", icon: <LuKey /> },
    { name: "Job Post", role: "Employer", icon: <LuFileText /> },
    { name: "My Jobs", role: "Employer", icon: <LuBriefcase /> },
    { name: "Applications", role: "Employer", icon: <LuList /> },
    { name: "My Applications", role: "Job Seeker", icon: <LuList /> },
    { name: "Logout", role: "All", icon: <LuLogOut />, action: handleLogout }
  ];

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNavItemClick = (componentName, action) => {
    if (action) {
      action();
    } else {
      setActiveComponent(componentName);
    }
    setSidebarOpen(false);
  };

  return (
    <div className="dashboard-container dark-blue-theme">
      <div className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`} onClick={toggleSidebar}></div>
      
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h4>Manage Account</h4>
        </div>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            (item.role === "All" || user?.role === item.role) && (
              <li key={item.name}>
                <button
                  onClick={() => handleNavItemClick(item.name, item.action)}
                  className={activeComponent === item.name ? "active" : ""}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              </li>
            )
          ))}
        </ul>
      </aside>

      <main className="dashboard-content">
        <header className="dashboard-header">
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            <LuMoveRight className={`toggle-icon ${sidebarOpen ? "open" : ""}`} />
          </button>
          <div className="header-content">
            <h1>Dashboard</h1>
            <p className="welcome-message">
              Welcome! <span>{user?.name || "User"}</span>
            </p>
          </div>
        </header>

        <div className="component-wrapper glassmorphic-card">
          {dashboardComponents[activeComponent] || <MyProfile />}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;