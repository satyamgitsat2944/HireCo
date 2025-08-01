import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userSchema.js";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User is not authenticated.", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});

export const isAuthorized = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `${req.user.role} not allowed to access this resource.`
        )
      );
    }
    next();
  };
};


// import { catchAsyncErrors } from "./catchAsyncErrors.js";
// import ErrorHandler from "./error.js";
// import jwt from "jsonwebtoken";
// import { User } from "../models/userSchema.js";
// export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
//   // Check multiple token sources
//   const token = req.cookies?.token || 
//                 req.headers?.authorization?.split(' ')[1] || 
//                 req.query?.token;

//   if (!token) {
//     return next(new ErrorHandler("Authorization token required", 401));
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = await User.findById(decoded.id);
    
//     if (!req.user) {
//       return next(new ErrorHandler("User not found", 404));
//     }
    
//     next();
//   } catch (error) {
//     return next(new ErrorHandler("Invalid or expired token", 401));
//   }
// });

// export const isAuthorized = (...roles) => {
//   return (req, res, next) => {
//     if (!req.user || !roles.includes(req.user.role)) {
//       return next(
//         new ErrorHandler(
//           `${req.user?.role || 'Unauthorized'} not allowed to access this resource.`,
//           403
//         )
//       );
//     }
//     next();
//   };
// };