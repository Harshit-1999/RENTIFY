import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import RentalDetails from "./components/RentalDetails";
import SignIn from "./components/Signin";
import SignUp from "./components/SignUp";
import { UserProvider } from "./components/UserProvider";// Import UserProvider
import house1 from "../src/assets/house1.jpg";
import house2 from "../src/assets/house2.jpg";
import house3 from "../src/assets/house3.jpg";
import house4 from "../src/assets/house4.jpg";
import house5 from "../src/assets/house5.jpg";
import house6 from "../src/assets/house6.jpeg";

function App() {
  const rentals = [
    {
      id: 1,
      hotelName: "Luxury Stay Bangalore",
      title: "Bangalore, Karnataka, India",
      image: house1,
      price: "3500/Per Day",
      description:
        "Spacious 2 BHK apartment with easy access to IT hubs and schools.",
    },
    {
      id: 2,
      hotelName: "Sea View Mumbai",
      title: "Mumbai, Maharashtra, India",
      image: house2,
      price: "50,000",
      description:
        "Luxurious sea-facing apartment in South Mumbai with modern amenities.",
    },
    {
      id: 3,
      hotelName: "Connaught Palace Delhi",
      title: "Delhi, India",
      image: house3,
      price: "40,000",
      description:
        "3 BHK apartment located in the bustling area of Connaught Place.",
    },
    {
      id: 4,
      hotelName: "HITEC City Hyderabad",
      title: "Hyderabad, Telangana, India",
      image: house4,
      price: "30,000",
      description:
        "Well-furnished flat near HITEC City with excellent connectivity.",
    },
    {
      id: 5,
      hotelName: "Marina Beach Residence",
      title: "Chennai, Tamil Nadu, India",
      image: house5,
      price: "28,000",
      description: "2 BHK home in a serene neighborhood close to Marina Beach.",
    },
    {
      id: 6,
      hotelName: "Koregaon Park Stay",
      title: "Pune, Maharashtra, India",
      image: house6,
      price: "32,000",
      description: "Modern apartment in the prime area of Koregaon Park.",
    },
    {
      id: 7,
      hotelName: "Pink City Inn",
      title: "Jaipur, Rajasthan, India",
      image: house2,
      price: "25,000",
      description: "Cozy 3 BHK near Pink City with stunning architecture.",
    },
    {
      id: 8,
      hotelName: "Heritage Stay Kolkata",
      title: "Kolkata, West Bengal, India",
      image: house3,
      price: "27,000",
      description:
        "Heritage home in the heart of the cultural capital of India.",
    },
    {
      id: 9,
      hotelName: "Hazratganj Apartments",
      title: "Lucknow, Uttar Pradesh, India",
      image: house4,
      price: "22,000",
      description:
        "Affordable 2 BHK near Hazratganj with easy access to local markets.",
    },
    {
      id: 10,
      hotelName: "SG Highway Residences",
      title: "Ahmedabad, Gujarat, India",
      image: house5,
      price: "26,000",
      description: "Spacious flat near SG Highway with great amenities.",
    },
    {
      id: 11,
      hotelName: "Chandigarh Heights",
      title: "Chandigarh, Punjab, India",
      image: house1,
      price: "24,000",
      description: "Elegant 3 BHK in the well-planned city of Chandigarh.",
    },
    {
      id: 12,
      hotelName: "Green Valley Coimbatore",
      title: "Coimbatore, Tamil Nadu, India",
      image: house2,
      price: "18,000",
      description:
        "Affordable home near lush greenery and peaceful surroundings.",
    },
    {
      id: 13,
      hotelName: "Mysore Palace View",
      title: "Mysore, Karnataka, India",
      image: house3,
      price: "19,000",
      description:
        "Classic home near Mysore Palace with rich cultural heritage.",
    },
    {
      id: 14,
      hotelName: "Rajwada Comfort",
      title: "Indore, Madhya Pradesh, India",
      image: house4,
      price: "21,000",
      description:
        "Comfortable 2 BHK near Rajwada Palace with modern interiors.",
    },
    {
      id: 15,
      hotelName: "Temple City Flats",
      title: "Bhubaneswar, Odisha, India",
      image: house5,
      price: "16,000",
      description: "Affordable flat in the Temple City of India.",
    },
    {
      id: 16,
      hotelName: "Beachfront Goa",
      title: "Goa, India",
      image: house1,
      price: "45,000",
      description:
        "Beachfront villa with breathtaking sea views and private access.",
    },
    {
      id: 17,
      hotelName: "Ganga View Apartments",
      title: "Varanasi, Uttar Pradesh, India",
      image: house2,
      price: "18,000",
      description: "Apartment near the Ganga river with scenic views.",
    },
    {
      id: 18,
      hotelName: "Shimla Heights",
      title: "Shimla, Himachal Pradesh, India",
      image: house3,
      price: "20,000",
      description: "Cozy hilltop home with stunning mountain views.",
    },
    {
      id: 19,
      hotelName: "Brahmaputra View",
      title: "Guwahati, Assam, India",
      image: house4,
      price: "22,000",
      description: "2 BHK with panoramic views of the Brahmaputra River.",
    },
    {
      id: 20,
      hotelName: "Surat Diamond Stay",
      title: "Surat, Gujarat, India",
      image: house5,
      price: "23,000",
      description: "Modern flat in the diamond city, close to business hubs.",
    },
  ];
  return (
    <UserProvider>
      <Router>
        <div>
          <Navbar rentals={rentals} />
          <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
            {/* Routes */}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Filters />
                    <Rentals rentals={rentals} />
                  </>
                }
              />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/rental/:id" element={<RentalDetails />} />
            </Routes>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
