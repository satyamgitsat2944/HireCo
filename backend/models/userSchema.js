// import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import validator from "validator";

// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minLength: [3, "Name must cotain at least 3 characters."],
//     maxLength: [30, "Name cannot exceed 30 characters."],
//   },
//   email: {
//     type: String,
//     required: true,
//     validate: [validator.isEmail, "Please provide valid email."],
//   },
//   phone: {
//     type: Number,
//     required: true,
//   },
//   address: {
//     type: String,
//     required: true,
//   },
//   niches: {
//     firstNiche: String,
//     secondNiche: String,
//     thirdNiche: String,
//   },
//   password: {
//     type: String,
//     required: true,
//     minLength: [8, "Password must cantain at least 8 chatacters."],
//     maxLength: [32, "Password cannot exceed 32 characters."],
//     select: false
//   },
//   resume: {
//     public_id: String,
//     url: String,
    
//   },
//   coverLetter: {
//     type: String,
//   },
//   role: {
//     type: String,
//     required: true,
//     enum: ["Job Seeker", "Employer"],
//     default: 'Job Seeker',
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   this.password = await bcrypt.hash(this.password, 10);
// });

// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// userSchema.methods.getJWTToken = function () {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
//     expiresIn: process.env.JWT_EXPIRE,
//   });
// };



// // Add these methods to your User schema
// userSchema.methods.getResetPasswordToken = function () {
//   // Generate token
//   const resetToken = crypto.randomBytes(20).toString("hex");

//   // Hash and set to resetPasswordToken field
//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   // Set token expire time (30 minutes)
//   this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

//   return resetToken;
// };



// export const User = mongoose.model("User", userSchema);



import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";
import crypto from "crypto"; // Don't forget to import crypto

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain at least 3 characters."],
    maxLength: [30, "Name cannot exceed 30 characters."],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please provide valid email."],
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  niches: {
    firstNiche: String,
    secondNiche: String,
    thirdNiche: String,
  },
  password: {
    type: String,
    required: true,
    minLength: [8, "Password must contain at least 8 characters."],
    maxLength: [32, "Password cannot exceed 32 characters."],
    select: false
  },
  resume: {
    public_id: String,
    url: String,
  },
  coverLetter: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ["Job Seeker", "Employer"],
    default: 'Job Seeker'
  },
  resetPasswordToken: String,       // Add this field for password reset
  resetPasswordExpire: Date,        // Add this field for token expiration
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Password hashing middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// Password comparison method
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// JWT token generation method
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// Password reset token generation method
userSchema.methods.getResetPasswordToken = function () {
  // Generate token
  const resetToken = crypto.randomBytes(20).toString("hex");

  // Hash and set to resetPasswordToken field
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Set token expire time (30 minutes)
  this.resetPasswordExpire = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

export const User = mongoose.model("User", userSchema);