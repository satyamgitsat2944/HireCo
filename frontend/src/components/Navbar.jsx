


// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated } = useSelector((state) => state.user);

//   const navItems = [
//     { path: "/", name: "HOME" },
//     { path: "/jobs", name: "JOBS" },
//     { path: isAuthenticated ? "/dashboard" : "/login", 
//       name: isAuthenticated ? "DASHBOARD" : "LOGIN" }
//   ];

//   // Animation variants
//   const linkAnimation = {
//     hover: {
//       scale: 1.1,
//       color: "#00eaff",
//       textShadow: "0 0 8px rgba(0, 234, 255, 0.6)",
//       transition: { duration: 0.3 }
//     },
//     tap: { scale: 0.95 }
//   };

//   return (
//     <nav className={`navbar ${show ? "show_navbar" : ""}`}>
//       <div className="nav-brand-container">
//         <Link to="/" className="nav-brand">
//           <motion.span
//             whileHover={{
//               scale: [1, 1.2, 1],
//               rotate: [0, -3, 3, 0],
//               textShadow: [
//                 "0 0 0px rgba(0, 234, 255, 0)",
//                 "0 0 10px rgba(0, 234, 255, 0.8)",
//                 "0 0 0px rgba(0, 234, 255, 0)"
//               ],
//               transition: { duration: 1 }
//             }}
//           >
//             HireCo
//           </motion.span>
//         </Link>
//       </div>

//       <div className="nav-links-container">
//         <ul className="nav-links">
//           {navItems.map((item) => (
//             <motion.li key={item.path}>
//               <Link 
//                 to={item.path} 
//                 onClick={() => setShow(false)}
//                 className="nav-link"
//               >
//                 <motion.span
//                   whileHover="hover"
//                   whileTap="tap"
//                   variants={linkAnimation}
//                 >
//                   {item.name}
//                 </motion.span>
//               </Link>
//             </motion.li>
//           ))}
//         </ul>
//       </div>

//       <div className="hamburger-container">
//         <GiHamburgerMenu 
//           onClick={() => setShow(!show)} 
//           style={{ cursor: "pointer", fontSize: "1.5rem" }}
//         />
//       </div>

//       <style jsx="true">{`
//         .navbar {
//           background-color: #0b1f3a;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//           position: relative;
//         }
//         .nav-brand {
//           color: #00eaff;
//           font-weight: 700;
//           font-size: 1.8rem;
//           text-decoration: none;
//         }
//         .nav-links {
//           display: flex;
//           gap: 2rem;
//           list-style: none;
//         }
//         .nav-link {
//           color: white;
//           text-decoration: none;
//           font-weight: 600;
//         }
//         .hamburger-container {
//           display: none;
//           color: white;
//         }
//         @media (max-width: 768px) {
//           .hamburger-container { display: block; }
//           .nav-links-container {
//             position: absolute;
//             top: 100%;
//             right: 0;
//             background: #0b1f3a;
//             width: 200px;
//             padding: 1rem;
//             clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
//             transition: clip-path 0.3s;
//           }
//           .show_navbar .nav-links-container {
//             clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
//           }
//           .nav-links {
//             flex-direction: column;
//             gap: 1rem;
//           }
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  const navItems = [
    { path: "/", name: "HOME" },
    { path: "/jobs", name: "JOBS" },
    { path: isAuthenticated ? "/dashboard" : "/login", 
      name: isAuthenticated ? "DASHBOARD" : "LOGIN" }
  ];

  return (
    <nav className={`navbar ${show ? "show_navbar" : ""}`}>
      <div className="nav-brand-container">
        <Link to="/" className="nav-brand">
          <span className="brand-text">HireCo</span>
        </Link>
      </div>

      <div className="nav-links-container">
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                onClick={() => setShow(false)}
                className="nav-link"
              >
                <span className="link-text">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hamburger-container">
        <GiHamburgerMenu 
          onClick={() => setShow(!show)} 
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        />
      </div>

      <style jsx="true">{`
        .navbar {
          background-color: #0b1f3a;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
          position: relative;
        }
        .nav-brand {
          color: #00eaff;
          font-weight: 700;
          font-size: 1.8rem;
          text-decoration: none;
        }
        .brand-text {
          display: inline-block;
          transition: all 0.3s ease;
        }
        .brand-text:hover {
          transform: scale(1.05);
          text-shadow: 0 0 10px rgba(0, 234, 255, 0.8);
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
        }
        .nav-link {
          color: white;
          text-decoration: none;
          font-weight: 600;
        }
        .link-text {
          display: inline-block;
          transition: all 0.3s ease;
          position: relative;
        }
        .link-text:hover {
          color: #00eaff;
          transform: scale(1.05);
          text-shadow: 0 0 8px rgba(0, 234, 255, 0.6);
        }
        .link-text:active {
          transform: scale(0.95);
        }
        .hamburger-container {
          display: none;
          color: white;
        }
        @media (max-width: 768px) {
          .hamburger-container { display: block; }
          .nav-links-container {
            position: absolute;
            top: 100%;
            right: 0;
            background: #0b1f3a;
            width: 200px;
            padding: 1rem;
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            transition: clip-path 0.3s ease-out;
          }
          .show_navbar .nav-links-container {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          .nav-links {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
