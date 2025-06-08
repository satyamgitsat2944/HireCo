// import express from "express";
// import { getUser, login, logout, register, updatePassword, updateProfile } from "../controllers/userController.js";
// import { isAuthenticated } from "../middlewares/auth.js";

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.get("/logout", isAuthenticated, logout);
// router.get("/getuser", isAuthenticated, getUser);
// router.put("/update/profile", isAuthenticated, updateProfile)
// router.put("/update/password", isAuthenticated, updatePassword)

// export default router;

// import express from "express";
// import { 
//   getUser, 
//   login, 
//   logout, 
//   register, 
//   updatePassword, 
//   updateProfile,
//   getGoogleAuthStatus 
// } from "../controllers/userController.js";
// import { isAuthenticated } from "../middlewares/auth.js";
// import { User } from '../models/userSchema.js';
// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);
// router.get("/logout", isAuthenticated, logout);
// router.get("/getuser", isAuthenticated, getUser);
// router.get("/google-auth-status", getGoogleAuthStatus); // New route
// router.put("/update/profile", isAuthenticated, updateProfile);
// router.put("/update/password", isAuthenticated, updatePassword);

// // Updated route using isAuthenticated instead of authMiddleware
// router.get('/auth/google/callback', 
//     passport.authenticate('google', {
//       failureRedirect: '/login?error=google_auth_failed',
//       session: false
//     }),
//     async (req, res) => {
//       try {
//         const token = generateToken(req.user._id);
        
//         // Set cookie if using cookies
//         res.cookie('token', token, {
//           httpOnly: true,
//           secure: process.env.NODE_ENV === 'production',
//           maxAge: 24 * 60 * 60 * 1000 // 1 day
//         });
  
//         // Redirect with token in URL as fallback
//         res.redirect(`${process.env.FRONTEND_URL}/login/success?token=${token}`);
//       } catch (err) {
//         console.error('Token generation error:', err);
//         res.redirect('/login?error=auth_error');
//       }
//     }
//   );

// export default router;


// import express from "express";
// import passport from "passport";
// import { 
//   getUser, 
//   login, 
//   logout, 
//   register, 
//   updatePassword, 
//   updateProfile,
//   getGoogleAuthStatus,
//   generateToken
// } from "../controllers/userController.js";
// import { isAuthenticated } from "../middlewares/auth.js";
// import { User } from '../models/userSchema.js';

// const router = express.Router();

// // Regular user routes
// router.post("/register", register);
// router.post("/login", login);
// router.get("/logout", isAuthenticated, logout);
// router.get("/getuser", isAuthenticated, getUser);
// router.get("/google-auth-status", getGoogleAuthStatus);
// router.put("/update/profile", isAuthenticated, updateProfile);
// router.put("/update/password", isAuthenticated, updatePassword);

// // Google OAuth callback route
// router.get('/auth/google/callback', 
//   passport.authenticate('google', {
//     failureRedirect: '/login?error=google_auth_failed',
//     session: false
//   }),
//   async (req, res) => {
//     try {
//       const token = generateToken(req.user._id);
      
//       res.cookie('token', token, {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         maxAge: 24 * 60 * 60 * 1000
//       });

//       res.redirect(`${process.env.FRONTEND_URL}/login/success?token=${token}`);
//     } catch (err) {
//       console.error('Token generation error:', err);
//       res.redirect('/login?error=auth_error');
//     }
//   }
// );

// export default router;












import express from "express";
import passport from "passport";
import { 
  getUser, 
  login, 
  logout, 
  register, 
  updatePassword, 
  updateProfile,
  getGoogleAuthStatus,
  forgotPassword,
  resetPassword
} from "../controllers/userController.js";
import { sendToken } from "../utils/jwtToken.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Regular user routes
router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthenticated, logout);
router.get("/getuser", isAuthenticated, getUser);
router.get("/google-auth-status", getGoogleAuthStatus);
router.put("/update/profile", isAuthenticated, updateProfile);
router.put("/update/password", isAuthenticated, updatePassword);

// Password reset routes
router.post("/password/forgot", forgotPassword);
router.put("/password/reset/:token", resetPassword);

// Google OAuth callback route
router.get('/auth/google/callback', 
  passport.authenticate('google', {
    failureRedirect: '/login?error=google_auth_failed',
    session: false
  }),
  async (req, res) => {
    try {
      if (sendToken) {
        return sendToken(req.user, 200, res, "Login successful");
      }
      
      const token = req.user.getJWTToken();
      const options = {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production'
      };

      res.status(200)
        .cookie("token", token, options)
        .redirect(`${process.env.FRONTEND_URL}/login/success?token=${token}`);
    } catch (err) {
      console.error('Authentication error:', err);
      res.redirect('/login?error=auth_error');
    }
  }
);

// Google logout route
router.get('/google/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Google signout failed' });
    }
    
    if (req.session.google) {
      delete req.session.google;
    }
    
    req.session.destroy();
    res.clearCookie('connect.sid');
    res.clearCookie('google_token');
    res.json({ success: true, message: 'Google signout successful' });
  });
});     

export default router;















// import express from "express";
// import passport from "passport";
// import { 
//   getUser, 
//   login, 
//   logout, 
//   register, 
//   updatePassword, 
//   updateProfile,
//   getGoogleAuthStatus
// } from "../controllers/userController.js";
// import { sendToken } from "../utils/jwtToken.js";  // Import from jwtToken.js instead
// import { isAuthenticated } from "../middlewares/auth.js";
// import { User } from '../models/userSchema.js';

// const router = express.Router();

// // Regular user routes
// router.post("/register", register);
// router.post("/login", login);
// router.get("/logout", isAuthenticated, logout);
// router.get("/getuser", isAuthenticated, getUser);
// router.get("/google-auth-status",getGoogleAuthStatus);
// router.put("/update/profile", isAuthenticated, updateProfile);
// router.put("/update/password", isAuthenticated, updatePassword);

// // Google OAuth callback route
// router.get('/auth/google/callback', 
//   passport.authenticate('google', {
//     failureRedirect: '/login?error=google_auth_failed',
//     session: false
//   }),
//   async (req, res) => {
//     try {
//       // Use the sendToken function if available
//       if (sendToken) {
//         return sendToken(req.user, 200, res, "Login successful");
//       }
      
//       // Fallback to manual token handling
//       const token = req.user.getJWTToken();
//       const options = {
//         expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production'
//       };

//       res.status(200)
//         .cookie("token", token, options)
//         .redirect(`${process.env.FRONTEND_URL}/login/success?token=${token}`);
//     } catch (err) {
//       console.error('Authentication error:', err);
//       res.redirect('/login?error=auth_error');
//     }
//   }
// );


// // authRoutes.js
// router.get('/google/logout', (req, res) => {
//   // Additional Google-specific cleanup if needed
//   req.logout((err) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: 'Google signout failed' });
//     }
    
//     // Clear Google-specific session data
//     if (req.session.google) {
//       delete req.session.google;
//     }
    
//     req.session.destroy();
//     res.clearCookie('connect.sid');
//     res.clearCookie('google_token');
//     res.json({ success: true, message: 'Google signout successful' });
//   });
// });

// export default router;