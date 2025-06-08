// import express from "express";
// import { isAuthenticated, isAuthorized } from "../middlewares/auth.js";
// import {
//   deleteApplication,
//   employerGetAllApplication,
//   jobSeekerGetAllApplication,
//   postApplication,
// } from "../controllers/applicationController.js";

// const router = express.Router();

// router.post(
//   "/post/:id",
//   isAuthenticated,
//   isAuthorized("Job Seeker"),
//   postApplication
// );

// router.get(
//   "/employer/getall",
//   isAuthenticated,
//   isAuthorized("Employer"),
//   employerGetAllApplication
// );

// router.get(
//   "/jobseeker/getall",
//   isAuthenticated,
//   isAuthorized("Job Seeker"),
//   jobSeekerGetAllApplication
// );

// router.delete("/delete/:id", isAuthenticated, deleteApplication);

// export default router;


import express from "express";
import {
  isAuthenticated,
  isAuthorized,
} from "../middlewares/auth.js";
import {
  deleteApplication,
  employerGetAllApplication,
  jobSeekerGetAllApplication,
  postApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

// POST /api/v1/application/post/:id
router.post(
  "/post/:id",
  isAuthenticated,
  isAuthorized("Job Seeker"),
  postApplication
);

// GET /api/v1/application/employer/getall
router.get(
  "/employer/getall",
  isAuthenticated,
  isAuthorized("Employer"),
  employerGetAllApplication
);

// GET /api/v1/application/jobseeker/getall
router.get(
  "/jobseeker/getall",
  isAuthenticated,
  isAuthorized("Job Seeker"),
  jobSeekerGetAllApplication
);

// DELETE /api/v1/application/delete/:id
router.delete(
  "/delete/:id",
  isAuthenticated,
  isAuthorized("Job Seeker", "Employer"),
  deleteApplication
);

export default router;