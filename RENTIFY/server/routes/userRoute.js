const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

// Sign Up Route
router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const user = new User({ email, password, name });
    await user.save();

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with token
    res.status(201).json({ token, Status: "User is created" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error signing up user", error: error.message });
  }
});

// Sign In Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with token
    res.status(200).json({ token, Status: "User login success" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error signing in user", error: error.message });
  }
});

module.exports = router;
