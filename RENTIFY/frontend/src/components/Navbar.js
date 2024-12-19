import React, { useState } from "react";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./UserProvider"; // Custom context for user state
import "../styles/Navbar.css";

const Navbar = ({ rentals }) => {
  const { isLoggedIn, setIsLoggedIn, username, setUsername } = useUser(); // Access context
  const [showDropdown, setShowDropdown] = useState(false); // For showing the dropdown menu
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [filteredRentals, setFilteredRentals] = useState([]); // State to store filtered rentals
  const navigate = useNavigate();

  // Example function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    localStorage.removeItem("token");
    navigate("/signin"); // Redirect to the sign-in page
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Filter the rentals based on the search query
    if (query) {
      const filtered = rentals.filter((rental) =>
        rental.hotelName.toLowerCase().includes(query.toLowerCase()) ||
        rental.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRentals(filtered);
    } else {
      setFilteredRentals([]); // Reset filtered rentals if search query is empty
    }
  };

  // Handle search submission
  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      // You can use the searchQuery to filter your data or redirect to a search results page
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="border-b sticky top-0 z-50 bg-white/[95%]">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* Left */}
        <Link to={"/"}>
          <div className="h-20 flex">
            <h1 className="logo">Rentify</h1>
          </div>
        </Link>

        {/* Middle - Search Bar */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm shadow-gray-400 border rounded-full">
          <input
            type="search"
            placeholder="Search for places, homes, etc."
            className="py-2.5 w-[20rem] rounded-full outline-0 px-4"
            value={searchQuery}
            onChange={handleSearchChange} // Update search query on change
          />
          <div
            className="bg-[#ff5a60] p-2 rounded-full mr-2 cursor-pointer"
            onClick={handleSearchSubmit} // Trigger search when clicked
          >
            <FiSearch className="text-white w-full" />
          </div>

          {/* Suggestion Dropdown */}
          {filteredRentals.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white shadow-lg max-h-64 overflow-y-auto rounded-lg z-10">
              <ul className="py-2">
                {filteredRentals.map((rental) => (
                  <Link to={`/rental/${rental.id}`} state={rental}>
                  <li
                    key={rental.id}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => navigate(`/rental/${rental.id}`)}
                  >
                    <strong>{rental.hotelName}</strong> - {rental.title}
                  </li></Link>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right - Sign In / Account */}
        <div className="flex items-center pr-3 font-semibold text-gray-600">
          <p className="text-[17px]">Rent House</p>
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
            <div className="">EN</div>
          </div>

          {/* Conditional Rendering for Sign In / Username / Account Logo */}
          {isLoggedIn ? (
            <div className="relative">
              {/* Account Logo when Logged In */}
              <div
                className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown
              >
                <BiUser className="text-[22px]" />
              </div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                  <ul>
                    <li
                      onClick={() => navigate("/account-settings")}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Account Settings
                    </li>
                    <li
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            // Display Sign In button when not logged in
            <Link to="/signin">
              <div className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-bold shadow-lg shadow-gray-300 hover:bg-[#f9787c] duration-100 ease-out">
                <p>Sign In</p>
                <BiUser className="text-[22px]" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
