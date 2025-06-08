// import app from "./app.js";
// import cloudinary from "cloudinary";


// cloudinary.v2.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });


// app.listen(4000, () => {
//     console.log(`Server listening at port ${4000}`);
//   });

// import app from "./app.js";
// import cloudinary from "cloudinary";

// // Cloudinary config (keep existing)
// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// // Force port 4000 and handle crashes
// const PORT = 4000; // Hardcoded to 4000

// const server = app.listen(PORT, () => {
//   console.log(`Server running STRICTLY on port ${PORT}`);
// });

// // Handle port in use errors
// server.on('error', (err) => {
//   if (err.code === 'EADDRINUSE') {
//     console.error(`❌ Port ${PORT} is already in use. Please kill the process and restart.`);
//     process.exit(1); // Exit with error
//   } else {
//     console.error('Server error:', err);
//   }
// });
import app from "./app.js";
import cloudinary from "cloudinary";

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Database connection and server start
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Cloudinary configured for ${cloudinary.v2.config().cloud_name}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} in use, trying ${Number(PORT)+1}...`);
    app.listen(Number(PORT)+1, () => {
      console.log(`Server running on port ${Number(PORT)+1}`);
    });
  }
});