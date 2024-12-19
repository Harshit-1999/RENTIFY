// import React from "react";
// import { Link } from "react-router-dom";
// import house1 from "../assets/house1.jpg";
// import house2 from "../assets/house2.jpg";
// import house3 from "../assets/house3.jpg";
// import house4 from "../assets/house4.jpg";
// import house5 from "../assets/house5.jpg";
// import house6 from "../assets/house6.jpeg";

// const Rentals = () => {
//   const rentals = [
//     {
//       id: 1,
//       hotelName: "Luxury Stay Bangalore",
//       title: "Bangalore, Karnataka, India",
//       image: house1,
//       price: "35,000",
//       description:
//         "Spacious 2 BHK apartment with easy access to IT hubs and schools.",
//     },
//     {
//       id: 2,
//       hotelName: "Sea View Mumbai",
//       title: "Mumbai, Maharashtra, India",
//       image: house2,
//       price: "50,000",
//       description:
//         "Luxurious sea-facing apartment in South Mumbai with modern amenities.",
//     },
//     {
//       id: 3,
//       hotelName: "Connaught Palace Delhi",
//       title: "Delhi, India",
//       image: house3,
//       price: "40,000",
//       description:
//         "3 BHK apartment located in the bustling area of Connaught Place.",
//     },
//     {
//       id: 4,
//       hotelName: "HITEC City Hyderabad",
//       title: "Hyderabad, Telangana, India",
//       image: house4,
//       price: "30,000",
//       description:
//         "Well-furnished flat near HITEC City with excellent connectivity.",
//     },
//     {
//       id: 5,
//       hotelName: "Marina Beach Residence",
//       title: "Chennai, Tamil Nadu, India",
//       image: house5,
//       price: "28,000",
//       description: "2 BHK home in a serene neighborhood close to Marina Beach.",
//     },
//     {
//       id: 6,
//       hotelName: "Koregaon Park Stay",
//       title: "Pune, Maharashtra, India",
//       image: house6,
//       price: "32,000",
//       description: "Modern apartment in the prime area of Koregaon Park.",
//     },
//     {
//       id: 7,
//       hotelName: "Pink City Inn",
//       title: "Jaipur, Rajasthan, India",
//       image: house2,
//       price: "25,000",
//       description: "Cozy 3 BHK near Pink City with stunning architecture.",
//     },
//     {
//       id: 8,
//       hotelName: "Heritage Stay Kolkata",
//       title: "Kolkata, West Bengal, India",
//       image: house3,
//       price: "27,000",
//       description:
//         "Heritage home in the heart of the cultural capital of India.",
//     },
//     {
//       id: 9,
//       hotelName: "Hazratganj Apartments",
//       title: "Lucknow, Uttar Pradesh, India",
//       image: house4,
//       price: "22,000",
//       description:
//         "Affordable 2 BHK near Hazratganj with easy access to local markets.",
//     },
//     {
//       id: 10,
//       hotelName: "SG Highway Residences",
//       title: "Ahmedabad, Gujarat, India",
//       image: house5,
//       price: "26,000",
//       description: "Spacious flat near SG Highway with great amenities.",
//     },
//     {
//       id: 11,
//       hotelName: "Chandigarh Heights",
//       title: "Chandigarh, Punjab, India",
//       image: house1,
//       price: "24,000",
//       description: "Elegant 3 BHK in the well-planned city of Chandigarh.",
//     },
//     {
//       id: 12,
//       hotelName: "Green Valley Coimbatore",
//       title: "Coimbatore, Tamil Nadu, India",
//       image: house2,
//       price: "18,000",
//       description:
//         "Affordable home near lush greenery and peaceful surroundings.",
//     },
//     {
//       id: 13,
//       hotelName: "Mysore Palace View",
//       title: "Mysore, Karnataka, India",
//       image: house3,
//       price: "19,000",
//       description:
//         "Classic home near Mysore Palace with rich cultural heritage.",
//     },
//     {
//       id: 14,
//       hotelName: "Rajwada Comfort",
//       title: "Indore, Madhya Pradesh, India",
//       image: house4,
//       price: "21,000",
//       description:
//         "Comfortable 2 BHK near Rajwada Palace with modern interiors.",
//     },
//     {
//       id: 15,
//       hotelName: "Temple City Flats",
//       title: "Bhubaneswar, Odisha, India",
//       image: house5,
//       price: "16,000",
//       description: "Affordable flat in the Temple City of India.",
//     },
//     {
//       id: 16,
//       hotelName: "Beachfront Goa",
//       title: "Goa, India",
//       image: house1,
//       price: "45,000",
//       description:
//         "Beachfront villa with breathtaking sea views and private access.",
//     },
//     {
//       id: 17,
//       hotelName: "Ganga View Apartments",
//       title: "Varanasi, Uttar Pradesh, India",
//       image: house2,
//       price: "18,000",
//       description: "Apartment near the Ganga river with scenic views.",
//     },
//     {
//       id: 18,
//       hotelName: "Shimla Heights",
//       title: "Shimla, Himachal Pradesh, India",
//       image: house3,
//       price: "20,000",
//       description: "Cozy hilltop home with stunning mountain views.",
//     },
//     {
//       id: 19,
//       hotelName: "Brahmaputra View",
//       title: "Guwahati, Assam, India",
//       image: house4,
//       price: "22,000",
//       description: "2 BHK with panoramic views of the Brahmaputra River.",
//     },
//     {
//       id: 20,
//       hotelName: "Surat Diamond Stay",
//       title: "Surat, Gujarat, India",
//       image: house5,
//       price: "23,000",
//       description: "Modern flat in the diamond city, close to business hubs.",
//     },
//   ];

//   return (
//     <div className="py-3 sm:py-5">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
//         {rentals.map((rental) => (
//           <div key={rental.id} className="rental-item bg-white rounded-lg shadow-lg overflow-hidden card">
//             <Link to={`/rental/${rental.id}`} state={rental}>
//               <img
//                 src={rental.image}
//                 alt={rental.hotelName} // Descriptive alt text
//                 className="w-full h-40 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold text-gray-800">{rental.hotelName}</h3> {/* Display Hotel Name */}
//                 <h4 className="text-md font-medium text-gray-600 mt-1">{rental.title}</h4> {/* Location */}
//                 <p className="text-gray-600 mt-2">₹{rental.price}/month</p>
//                 <p className="text-sm text-gray-500 mt-1">{rental.description}</p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Rentals;
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";


const Rentals = ({rentals}) => {
  const [filteredRentals, setFilteredRentals] = useState([]);
  const { search } = useLocation(); // Get the query from the URL
  const queryParams = new URLSearchParams(search);
  const searchQuery = queryParams.get("query") || ""; // Extract query from the URL



  useEffect(() => {
    // Filter rentals based on search query
    const filtered = rentals.filter((rental) =>
      rental.hotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rental.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRentals(filtered);
  }, [searchQuery, rentals]);

  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredRentals.length > 0 ? (
          filteredRentals.map((rental) => (
            <div key={rental.id} className="rental-item bg-white rounded-lg shadow-lg overflow-hidden card">
              <Link to={`/rental/${rental.id}`} state={rental}>
                <img
                  src={rental.image}
                  alt={rental.hotelName} // Descriptive alt text
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{rental.hotelName}</h3> {/* Display Hotel Name */}
                  <h4 className="text-md font-medium text-gray-600 mt-1">{rental.title}</h4> {/* Location */}
                  <p className="text-gray-600 mt-2">₹{rental.price}/month</p>
                  <p className="text-sm text-gray-500 mt-1">{rental.description}</p>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No rentals found for "{searchQuery}"</p> // Display message if no rentals match the search
        )}
      </div>
    </div>
  );
};

export default Rentals;
