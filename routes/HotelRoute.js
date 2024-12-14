const express = require("express");
const multer = require("multer");
const authMiddleware = require("../middleware/authmiddleware");

const {
  postHotel,
  getHotels,
  getHotelById,
  updateHotel,
  deleteHotel,
  getUserHotelData,
} = require("../Controller/HotelController");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); 
    // cb(null, Date.now() + '-' + file.originalname); // Unique file name
  },
});
const upload = multer({ storage });

// Define routes
router.post("/hotels", upload.array("photos", 10), postHotel); // Create a new hotel
router.get("/hotels", getHotels); // Get all hotels
router.get("/hotels/:id", getHotelById); // Get a hotel by ID (added '/')
router.put("/hotels/:id", upload.array("photos", 10), updateHotel); // Update a hotel by ID (added '/')
router.delete("/hotels/:id", deleteHotel); // Delete a hotel by ID (added '/')
router.get('/GetUserHotel', authMiddleware, getUserHotelData);


module.exports = router;










// const express = require("express");
// const multer = require("multer");
// const authMiddleware = require("../middleware/authmiddleware");

// const {
//   postHotel,
//   getHotels,
//   getHotelById,
//   updateHotel,
//   deleteHotel,
//   getUserHotelData,
// } = require("../Controller/HotelController");

// const router = express.Router();

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/"); // Directory to save files
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}-${file.originalname}`); 
//     // cb(null, Date.now() + '-' + file.originalname); // Unique file name
//   },
// });
// const upload = multer({ storage });

// // Define routes
// router.post("/hotels", upload.array("photos", 10), postHotel); // Create a new hotel
// router.get("/hotels", getHotels); // Get all hotels
// router.get("/hotels/:id", getHotelById); // Get a hotel by ID (added '/')
// router.put("/hotels/:id", upload.array("photos", 10), updateHotel); // Update a hotel by ID (added '/')
// router.delete("/hotels/:id", deleteHotel); // Delete a hotel by ID (added '/')
// router.get('/GetUserHotel', authMiddleware, getUserHotelData);


// module.exports = router;





// const express = require('express');
// const router = express.Router();
// const { postHotel, getHotels, getHotelById, updateHotel, deleteHotel, getUserHotelData } = require('../Controller/HotelController');

// // Assuming you have middleware to authenticate the user and attach user data to `req.user`
// const authMiddleware = require('../middleware/authMiddleware');

// // Route to get all hotels
// router.get('/hotels', getHotels);

// // Route to get a single hotel by ID
// router.get('/hotels/:id', getHotelById);

// // Route to post a new hotel
// router.post('/hotels', authMiddleware, postHotel); // `authMiddleware` ensures the user is authenticated

// // Route to update a hotel by ID
// router.put('/hotels/:id', authMiddleware, updateHotel);

// // Route to delete a hotel by ID
// router.delete('/hotels/:id', authMiddleware, deleteHotel);

// // Route to get all hotels for a specific user
// router.get('/GetUserHotel', authMiddleware, getUserHotelData); // Fetch hotels based on the logged-in user

// module.exports = router;