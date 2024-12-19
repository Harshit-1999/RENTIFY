const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors package
const userRoute = require("./routes/userRoute");
const formRoute = require("./routes/formRoute")
// Load environment variables
dotenv.config();
//dgtypyL1vUtttmEh 
// Initialize the app
const app = express();
app.use(express.json()); // For JSON payloads
app.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all domains (you can restrict this later for security)
app.use(cors());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Routes
app.use("/api", userRoute); // Assuming userRoute is properly defined
app.use("/api", formRoute)
// Set up the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
