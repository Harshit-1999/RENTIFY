import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import axios from "axios"; // Import axios
import { useUser } from "./UserProvider";// Import useUser to update the login state

const SignIn = () => {
  const { setIsLoggedIn, setUsername } = useUser(); // Get setIsLoggedIn and setUsername from context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }

    try {
      // Send POST request to the API endpoint for sign-in
      const response = await axios.post(
        "http://localhost:5000/api/signin",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Check if the response is successful
      if (response.data.Status) {
        // Store the JWT token in localStorage
        localStorage.setItem("token", response.data.token);
        
        // Set login state in context
        setIsLoggedIn(true);
        setUsername(response.data.username); // You can change this to fetch the actual username if needed
        
        setSuccessMessage("Log in success");
        
        // Redirect to rentals page after successful sign-in
        navigate("/");
      } else {
        setError(
          response.data.message || "Invalid credentials. Please try again."
        );
      }
    } catch (err) {
      // Handle any errors during the API call
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Error Message */}
        {error && (
          <div className="bg-red-200 text-red-800 p-3 rounded mb-4">
            {error}
          </div>
        )}
        {successMessage && (
          <div className="bg-green-200 text-green-800 p-3 rounded mb-4">
            {successMessage}
          </div>
        )}

        {/* Sign-In Form */}
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"} // Toggle between password and text
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {/* Eye Icon to toggle password visibility */}
            <div
              className="absolute right-3 top-12 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full primaryBG text-white py-2 rounded-lg font-semibold hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to={"/signup"}>
              <a href="/signup" className="primaryColor hover:underline">
                Sign up
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

