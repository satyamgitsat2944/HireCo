// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import icon from "./newimages/icon.png";
// import {
//   FaSquareXTwitter,
//   FaSquareInstagram,
//   FaYoutube,
//   FaLinkedin,
// } from "react-icons/fa6";

// const Footer = () => {
//   const { isAuthenticated } = useSelector((state) => state.user);
//   return (
//     <>
//       <footer>
//         <div>
//           < img src={icon} alt="Apple" />
//         </div>
//         <div>
//           <h4>Support</h4>
//           <ul>
//             <li>Innovation & Incubation Hub , MNNIT , Prayagraj</li>
//             <li>shahisatyam2944@gmail.com</li>
//             <li>singhakash06062005@gmail.com</li>
//             <li>+91 7052989091</li>
//             <li>+91 7388392168</li>
//           </ul>
//         </div>

//         <div>
//           <h4>Quick Links</h4>
//           <ul>
//             <li to={"/"}>
//               <Link>Home</Link>
//             </li>
//             <li to={"/jobs"}>
//               <Link>Jobs</Link>
//             </li>
//             {isAuthenticated && (
//               <li>
//                 <Link to={"/dashboard"}>Dashboard</Link>
//               </li>
//             )}
//           </ul>
//         </div>
//         <div>
//           <h4>Follow Us</h4>
//           <ul>
//             <li>
//               <Link to={"/"}>
//                 <span>
//                   <FaSquareXTwitter />
//                 </span>
//                 <span>Twitter (X)</span>
//               </Link>
//             </li>
//             <li>
//               <Link to={"/"}>
//                 <span>
//                   <FaSquareInstagram />
//                 </span>
//                 <span>Instagram</span>
//               </Link>
//             </li>
//             <li>
//               <Link to={"/"}>
//                 <span>
//                   <FaYoutube />
//                 </span>
//                 <span>Youtube</span>
//               </Link>
//             </li>
//             <li>
//               <Link to={"/"}>
//                 <span>
//                   <FaLinkedin />
//                 </span>
//                 <span>LinkedIn</span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </footer>
//       <div className="copyright">
//         &copy; CopyRight 2024. All Rights Reserved By WebWeavers
//       </div>
//     </>
//   );
// };

// export default Footer;



import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import icon from "./newimages/icon.png";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from "react-icons/fa";
// import "./footer.css";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  
  return (
    <footer className="enhanced-footer">
      <div className="footer-grid-container">
        {/* Brand Section */}
        <div className="footer-brand-section">
        <div>
           < img src={icon} alt="Apple" />
        </div>
          <h2 className="footer-brand-title">HireCo</h2>
          <div className="footer-location">
            <FaMapMarkerAlt className="location-icon" />
            <span>Innovation & Incubation Hub, MNNIT, Prayagraj</span>
          </div>
        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <h3 className="section-heading">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon email-icon" />
              <span className="email-address">shahisatyam2944@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon email-icon" />
              <span className="email-address">singhakash06062005@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 7052989091</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 7388392168</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h3 className="section-heading">Quick Links</h3>
          <div className="quick-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/" className="nav-link">Jobs</Link>
            {isAuthenticated && (
              <Link to="/" className="nav-link">Dashboard</Link>
            )}
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-social-section">
          <h3 className="section-heading">Follow Us</h3>
          <div className="social-icons-container">
            <a href="#" className="social-icon-link" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
            <a href="#" className="social-icon-link" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
            <a href="#" className="social-icon-link" aria-label="YouTube">
              <FaYoutube className="social-icon" />
            </a>
            <a href="#" className="social-icon-link" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} WebWeavers. All rights reserved.</p>
        </div>
      </div>

      <style jsx="true">{`
  .enhanced-footer {
    background: linear-gradient(135deg, #0b1f3a 0%, #143258 100%);
    color: white;
    padding: 3rem 2rem 1rem;
    position: relative;
    overflow: hidden;
  }

  .footer-grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .footer-brand-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-brand-section img {
    width: 100px;
    height: auto;
    margin-bottom: 1rem;
    filter: drop-shadow(0 0 5px rgba(0, 234, 255, 0.5));
     transition: transform 0.3s ease;
  }

  .footer-brand-section img:hover {
    transform: rotate(10deg) scale(1.1);
  }

  .footer-brand-title {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #00eaff, #0084ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }

  .footer-location {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    line-height: 1.5;
    opacity: 0.9;
  }

  .location-icon {
    margin-top: 0.2rem;
    color: #00eaff;
  }

  .section-heading {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
    color: #00eaff;
  }

  .section-heading::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, #00eaff, transparent);
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contact-item {
    display: flex;
    align-items: flex-start;
    gap: 0.7rem;
    transition: all 0.3s ease;
  }

  .contact-item:hover {
    transform: translateX(5px);
  }

  .contact-icon {
    color: #00eaff;
    margin-top: 0.2rem;
    font-size: 0.9rem;
  }

  .email-address {
    word-break: break-all;
  }

  .quick-links {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .nav-link {
    color: white;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    width: fit-content;
    opacity: 0.9;
  }

  .nav-link:hover {
    color: #00eaff;
    transform: translateX(5px);
    opacity: 1;
  }

  .nav-link::before {
    content: '→';
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: all 0.3s ease;
    color: #00eaff;
  }

  .nav-link:hover::before {
    opacity: 1;
    left: -10px;
  }

  .social-icons-container {
    display: flex;
    gap: 1.2rem;
    margin-top: 1rem;
  }

  .social-icon-link {
    color: white;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    opacity: 0.8;
  }

  .social-icon-link:hover {
    transform: translateY(-3px) scale(1.1);
    opacity: 1;
  }

  .social-icon-link:nth-child(1):hover { color: #1DA1F2; } /* Twitter */
  .social-icon-link:nth-child(2):hover { color: #E1306C; } /* Instagram */
  .social-icon-link:nth-child(3):hover { color: #FF0000; } /* YouTube */
  .social-icon-link:nth-child(4):hover { color: #0077B5; } /* LinkedIn */

  .footer-copyright {
    grid-column: 1 / -1;
    text-align: center;
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.9rem;
    opacity: 0.7;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .footer-grid-container {
      grid-template-columns: 1fr;
      gap: 2.5rem;
    }

    .section-heading {
      margin-bottom: 1rem;
    }
  }
`}</style>





    </footer>
  );
};

export default Footer;