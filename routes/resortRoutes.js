const express = require("express");
const multer = require("multer");
// const authMiddleware = require("../middleware/authMiddleware");

const {
  createResort,
  getResorts,
  getResortById,
  updateResort,
  deleteResort,
  getUserResortData,
} = require("../controllers/resortController");

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/resorts/"); // Directory to save files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique file name
  },
});

const upload = multer({ storage });

// Define routes
router.post("/resorts", upload.array("photos", 15), createResort); // Create a new resort
router.get("/resorts", getResorts); // Get all resorts
router.get("/resort/:id", getResortById); // Get a resort by ID
router.put("/resort/:id", upload.array("photos", 15), updateResort); // Update a resort by ID
router.delete("/resort/:id", deleteResort); // Delete a resort by ID
// router.get("/GetUserResort", authMiddleware, getUserResortData); // Get resorts for the logged-in user

module.exports = router;
