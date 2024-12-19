// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios"; // Make sure you have axios imported

// const RentalDetails = () => {
//   const { state: rental } = useLocation(); // Get rental data passed from Link
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // State variables for form inputs
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [comments, setComments] = useState("");
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); // Payment modal state
//   // Function to handle opening the modal
//   const openModal = () => setIsModalOpen(true);

//   // Function to handle closing the modal
//   const closeModal = () => setIsModalOpen(false);

//   // Booking form submit handler
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
  
//     const bookingDetails = { name, email, phone, checkInDate, checkOutDate, comments };
//     console.log("Sending data:", bookingDetails);
  
//     try {
//       // Set loading state to true while the request is in progress
//       setLoading(true);
//       setError(null); // Reset error state
  
//       // Send the POST request with axios
//       const response = await axios.post("http://localhost:5000/api/bookings", bookingDetails, {
//         headers: {
//           "Content-Type": "application/json", // Content-Type header
//         },
//       });
  
//       // Handle response from the API
//       console.log("Booking successful:", response.data.Status);
  
//       // Show success alert
//       setName('')
//       setPhone("")
//       setCheckInDate("")
//       setCheckOutDate("")
//       setComments("")

//       alert("Booking Successful! Thank you for your reservation.", response.data.Status);
//       openPaymentModal()
//     } catch (error) {
//       // If there's an error, handle it here
//       console.error("Error while creating booking:", error.response?.data || error.message);
//       setError("There was an error with the booking. Please try again.");
//     } finally {
//       // Set loading state to false after the request is done
//       setLoading(false);
//     }
  
//     // Close the modal after submission
//     closeModal();
//   };
//     const openPaymentModal = () => {
//     setIsModalOpen(false); // Close the booking modal
//     setIsPaymentModalOpen(true); // Open the payment modal
//   };

//   // Function to handle closing the payment modal
//   const closePaymentModal = () => setIsPaymentModalOpen(false);
//     const handlePaymentSubmit = (event) => {
//     event.preventDefault();
//     // Payment logic here (e.g., send payment data to server or use a payment API)
//     console.log("Payment details submitted");
//     alert("Payment Successful! Your booking is confirmed.");
//     closePaymentModal(); // Close the payment modal
//   };

//   return (
//     <div className="container mx-auto p-5">
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           src={rental.image}
//           alt={rental.title}
//           className="w-full h-96 object-cover rounded-lg shadow-lg"
//         />
//         <div className="absolute top-5 left-5 text-white font-bold text-2xl bg-black bg-opacity-50 p-2 rounded">
//           {rental.hotelName}
//         </div>
//       </div>

//       {/* Rental Title and Price */}
//       <div className="mt-5">
//         <h1 className="text-4xl font-semibold text-gray-800">{rental.title}</h1>
//         <p className="text-xl text-gray-600 mt-2">₹{rental.price}/month</p>
//       </div>

//       {/* Description Section */}
//       <div className="mt-5">
//         <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
//         <p className="mt-3 text-gray-700 leading-relaxed">{rental.description}</p>
//       </div>

//       {/* Booking Button */}
//       <div className="mt-8">
//         <button
//           onClick={openModal}
//           className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
//         >
//           Book Now
//         </button>
//       </div>

//       {/* Amenities Section */}
//       <div className="mt-5">
//         <h2 className="text-2xl font-semibold text-gray-800">Amenities</h2>
//         <ul className="list-disc list-inside mt-3 text-gray-700">
//           <li>Spacious rooms</li>
//           <li>24/7 Security</li>
//           <li>Nearby public transport</li>
//           <li>Fully furnished</li>
//           <li>Power backup</li>
//         </ul>
//       </div>

//       {/* Location Section */}
//       <div className="mt-5">
//         <h2 className="text-2xl font-semibold text-gray-800">Location</h2>
//         <p className="mt-3 text-gray-700">
//           Find this property at a prime location in {rental.title}.
//         </p>

//         {/* Google Maps */}
//         <div className="mt-3">
//           <iframe
//             title="Google Map"
//             src={`https://www.google.com/maps?q=${encodeURIComponent(rental.title)}&output=embed`}
//             className="w-full h-64 rounded-lg shadow-md border"
//           ></iframe>
//         </div>
//       </div>

//       {/* Image Gallery Section */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold text-gray-800">Gallery</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
//           <img
//             src={rental.image}
//             alt={`${rental.title} 1`}
//             className="w-full h-40 object-cover rounded-lg shadow-md"
//           />
//           <img
//             src={rental.image}
//             alt={`${rental.title} 2`}
//             className="w-full h-40 object-cover rounded-lg shadow-md"
//           />
//           <img
//             src={rental.image}
//             alt={`${rental.title} 3`}
//             className="w-full h-40 object-cover rounded-lg shadow-md"
//           />
//           <img
//             src={rental.image}
//             alt={`${rental.title} 4`}
//             className="w-full h-40 object-cover rounded-lg shadow-md"
//           />
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Form</h2>

//             {/* Form for booking */}
//             <form onSubmit={handleFormSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="name" className="block text-gray-700">Full Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={name} // Controlled input
//                   onChange={(e) => setName(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email} // Controlled input
//                   onChange={(e) => setEmail(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={phone} // Controlled input
//                   onChange={(e) => setPhone(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="checkIn" className="block text-gray-700">Check-in Date</label>
//                 <input
//                   type="date"
//                   id="checkIn"
//                   name="checkIn"
//                   value={checkInDate} // Controlled input
//                   onChange={(e) => setCheckInDate(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="checkOut" className="block text-gray-700">Check-out Date</label>
//                 <input
//                   type="date"
//                   id="checkOut"
//                   name="checkOut"
//                   value={checkOutDate} // Controlled input
//                   onChange={(e) => setCheckOutDate(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="comments" className="block text-gray-700">Special Requests/Comments</label>
//                 <textarea
//                   id="comments"
//                   name="comments"
//                   value={comments} // Controlled input
//                   onChange={(e) => setComments(e.target.value)} // Update state on change
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                   rows="4"
//                 ></textarea>
//               </div>

//               {/* Submit and Close Buttons */}
//               <div className="flex justify-between items-center">
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
//                 >
//                   Confirm Booking
//                 </button>

//                 {/* Close Modal Button */}
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
//                 >
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//       //       {/* Modal for Payment */}
// //       {isPaymentModalOpen && (
//       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Form</h2>

//             {/* Payment Form */}
// <form onSubmit={handlePaymentSubmit}>
//              <div className="mb-4">
//                 <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
//                 <input
//                    type="text"
//                   id="cardNumber"
//               name="cardNumber"
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date</label>
//                 <input
//                   type="month"
//                   id="expiryDate"
//                   name="expiryDate"
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="cvv" className="block text-gray-700">CVV</label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   name="cvv"
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="flex justify-between items-center">
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
//                 >
//                   Confirm Payment
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleFormSubmit}
//                   className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
//                 >
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RentalDetails;



// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios"; // Make sure you have axios imported

// const RentalDetails = () => {
//   const { state: rental } = useLocation(); // Get rental data passed from Link
//   const [isModalOpen, setIsModalOpen] = useState(false); // Booking modal state
//   const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); // Payment modal state
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // State variables for form inputs
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [comments, setComments] = useState("");

//   // Function to handle opening the booking modal
//   const openModal = () => setIsModalOpen(true);

//   // Function to handle closing the booking modal
//   const closeModal = () => setIsModalOpen(false);

//   // Function to handle opening the payment modal
//   const openPaymentModal = () => {
//     setIsModalOpen(false); // Close the booking modal
//     setIsPaymentModalOpen(true); // Open the payment modal
//   };

//   // Function to handle closing the payment modal
//   const closePaymentModal = () => setIsPaymentModalOpen(false);

//   // Booking form submit handler
//   const handleFormSubmit = async (event) => {
//     if(phone.length!==10){
//               alert('Phone number should be 10 digits')   
//               return;
//     }
//     event.preventDefault();

//     const bookingDetails = { name, email, phone, checkInDate, checkOutDate, comments };
//     console.log("Sending data:", bookingDetails);

//     try {
//       // Set loading state to true while the request is in progress
//       setLoading(true);
//       setError(null); // Reset error state

//       // Send the POST request with axios
//       const response = await axios.post("http://localhost:5000/api/bookings", bookingDetails, {
//         headers: {
//           "Content-Type": "application/json", // Content-Type header
//         },
//       });

//       // Handle response from the API
//       console.log("Booking successful:", response.data.Status);


//       // Show success alert
//       setName("");
//       setPhone("");
//       setCheckInDate("");
//       setCheckOutDate("");
//       setComments("");

//       alert("Booking Successful! Thank you for your reservation.", response.data.Status);
//       openPaymentModal(); // Open payment modal after successful booking
//     } catch (error) {
//       // If there's an error, handle it here
//       console.error("Error while creating booking:", error.response?.data || error.message);
//       setError("There was an error with the booking. Please try again.");
//     } finally {
//       // Set loading state to false after the request is done
//       setLoading(false);
//     }

//     // Close the modal after submission
//     closeModal();
//   };

//   // Payment form submit handler
//   const handlePaymentSubmit = (event) => {
//     event.preventDefault();
//     // Payment logic here (e.g., send payment data to server or use a payment API)
//     console.log("Payment details submitted");
//     alert("Payment Successful! Your booking is confirmed.");
//     closePaymentModal(); // Close the payment modal
//   };

//   return (
//     <div className="container mx-auto p-5">
//       {/* Image Section */}
//       <div className="relative">
//         <img
//           src={rental.image}
//           alt={rental.title}
//           className="w-full h-96 object-cover rounded-lg shadow-lg"
//         />
//         <div className="absolute top-5 left-5 text-white font-bold text-2xl bg-black bg-opacity-50 p-2 rounded">
//           {rental.hotelName}
//         </div>
//       </div>

//       {/* Rental Title and Price */}
//       <div className="mt-5">
//         <h1 className="text-4xl font-semibold text-gray-800">{rental.title}</h1>
//         <p className="text-xl text-gray-600 mt-2">₹{rental.price}/month</p>
//       </div>

//       {/* Description Section */}
//       <div className="mt-5">
//         <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
//         <p className="mt-3 text-gray-700 leading-relaxed">{rental.description}</p>
//       </div>

//       {/* Booking Button */}
//       <div className="mt-8">
//         <button
//           onClick={openModal}
//           className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
//         >
//           Book Now
//         </button>
//       </div>

//       {/* Amenities Section */}
//       <div className="mt-5">
//         <h2 className="text-2xl font-semibold text-gray-800">Amenities</h2>
//         <ul className="list-disc list-inside mt-3 text-gray-700">
//           <li>Spacious rooms</li>
//           <li>24/7 Security</li>
//           <li>Nearby public transport</li>
//           <li>Fully furnished</li>
//           <li>Power backup</li>
//         </ul>
//       </div>

//       {/* Location Section */}
//       <div className="mt-5">
//         <h2 className="text-2xl font-semibold text-gray-800">Location</h2>
//         <p className="mt-3 text-gray-700">
//           Find this property at a prime location in {rental.title}.
//         </p>

//         {/* Google Maps */}
//         <div className="mt-3">
//           <iframe
//             title="Google Map"
//             src={`https://www.google.com/maps?q=${encodeURIComponent(rental.title)}&output=embed`}
//             className="w-full h-64 rounded-lg shadow-md border"
//           ></iframe>
//         </div>
//       </div>

//       {/* Modal for Booking */}
//       {isModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Form</h2>

//             {/* Booking Form */}
//                         <form onSubmit={handleFormSubmit}>
//              <div className="mb-4">
//               <label htmlFor="name" className="block text-gray-700">Full Name</label>
//                <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={name} // Controlled input
//                   onChange={(e) => setName(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="email" className="block text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={email} // Controlled input
//                   onChange={(e) => setEmail(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={phone} // Controlled input
//                   onChange={(e) => setPhone(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="checkIn" className="block text-gray-700">Check-in Date</label>
//                 <input
//                   type="date"
//                   id="checkIn"
//                   name="checkIn"
//                   value={checkInDate} // Controlled input
//                   onChange={(e) => setCheckInDate(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="checkOut" className="block text-gray-700">Check-out Date</label>
//                 <input
//                   type="date"
//                   id="checkOut"
//                   name="checkOut"
//                   value={checkOutDate} // Controlled input
//                   onChange={(e) => setCheckOutDate(e.target.value)} // Update state on change
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="mb-4">
//                 <label htmlFor="comments" className="block text-gray-700">Special Requests/Comments</label>
//                 <textarea
//                   id="comments"
//                   name="comments"
//                   value={comments} // Controlled input
//                   onChange={(e) => setComments(e.target.value)} // Update state on change
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                   rows="4"
//                 ></textarea>
//               </div>

//               {/* Submit and Close Buttons */}
//               <div className="flex justify-between items-center">
//                 <button
//                   type="submit"
//                   onClick={openPaymentModal}
//                   className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
//                 >
//                   Make Payment
//                 </button>

//                 {/* Close Modal Button */}
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
//                 >
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Modal for Payment */}
//       {isPaymentModalOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Form</h2>

//             {/* Payment Form */}
//             <form onSubmit={handlePaymentSubmit}>
//               <div className="mb-4">
//                 <label htmlFor="cardNumber" className="block text-gray-700">Card Number</label>
//                 <input
//                   type="text"
//                   id="cardNumber"
//                   name="cardNumber"
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="expiryDate" className="block text-gray-700">Expiry Date</label>
//                 <input
//                   type="month"
//                   id="expiryDate"
//                   name="expiryDate"
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label htmlFor="cvv" className="block text-gray-700">CVV</label>
//                 <input
//                   type="text"
//                   id="cvv"
//                   name="cvv"
//                   required
//                   className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//               <div className="flex justify-between items-center">
//                 <button
//                   type="submit"
//                   className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
//                 >
//                   Confirm Payment
//                 </button>
//                 <button
//                   type="button"
//                   // onClick={handleFormSubmit}
//                   className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
//                 >
//                   Close
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RentalDetails;




import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import house4 from "../assets/house4.jpg";
const RentalDetails = () => {
  const { state: rental } = useLocation(); // Get rental data passed from Link
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state for booking
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); // Modal state for payment
  const [loading, setLoading] = useState(false); // Loading state for the booking form
  const [error, setError] = useState(null); // Error state for booking form

  // State variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");

  const galleryImages = [
 house1,
 house2, house3, house4
  ];
  const [comments, setComments] = useState("");

  const openModal = () => setIsModalOpen(true);

  // Function to handle closing the booking modal
  const closeModal = () => setIsModalOpen(false);

  // Function to handle opening the payment modal
  const openPaymentModal = () => {
    setIsModalOpen(false); // Close the booking modal
    setIsPaymentModalOpen(true); // Open the payment modal
  };

  // Function to handle closing the payment modal
  const closePaymentModal = () => setIsPaymentModalOpen(false);

  // Booking form submit handler
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const bookingDetails = { name, email, phone, checkInDate, checkOutDate, comments };
    console.log("Sending data:", bookingDetails);

    try {
      // Set loading state to true while the request is in progress
      setLoading(true);
      setError(null); // Reset error state

      // Send the POST request with axios
      const response = await axios.post("http://localhost:5000/api/bookings", bookingDetails, {
        headers: {
          "Content-Type": "application/json", // Content-Type header
        },
      });

      // Handle response from the API
      console.log("Booking successful:", response.data.Status);

      // Clear form fields after booking success
      setName('');
      setPhone('');
      setCheckInDate('');
      setCheckOutDate('');
      setComments('');

      alert("Booking Successful! Thank you for your reservation.");
      openPaymentModal(); // Open the payment modal
    } catch (error) {
      // If there's an error, handle it here
      console.error("Error while creating booking:", error.response?.data || error.message);
      setError("There was an error with the booking. Please try again.");
    } finally {
      // Set loading state to false after the request is done
      setLoading(false);
    }
  };

  // Payment submit handler (just a mock here)
  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    console.log("Payment details submitted");
    alert("Payment Successful! Your booking is confirmed.");
    closePaymentModal(); // Close the payment modal
  };

  return (
    <div className="container mx-auto p-5">
      {/* Image Section */}
      <div className="relative">
        <img
          src={rental.image}
          alt={rental.title}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />
        <div className="absolute top-5 left-5 text-white font-bold text-2xl bg-black bg-opacity-50 p-2 rounded">
          {rental.hotelName}
        </div>
      </div>

      {/* Rental Title and Price */}
      <div className="mt-5">
        <h1 className="text-4xl font-semibold text-gray-800">{rental.title}</h1>
        <p className="text-xl text-gray-600 mt-2">₹{rental.price}/month</p>
      </div>

      {/* Booking Button */}
      <div className="mt-8">
        <button
          onClick={openModal}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
        >
          Book Now
        </button>
      </div>
         {/* Amenities Section */}
      <div className="mt-5">
         <h2 className="text-2xl font-semibold text-gray-800">Amenities</h2>
        <ul className="list-disc list-inside mt-3 text-gray-700">
           <li>Spacious rooms</li>
          <li>24/7 Security</li>
           <li>Nearby public transport</li>
           <li>Fully furnished</li>
           <li>Power backup</li>
         </ul>       </div>

       {/* Location Section */}
       <div className="mt-5">
         <h2 className="text-2xl font-semibold text-gray-800">Location</h2>
         <p className="mt-3 text-gray-700">
           Find this property at a prime location in {rental.title}.
         </p>

         {/* Google Maps */}
         <div className="mt-3">
          <iframe
            title="Google Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(rental.title)}&output=embed`}
            className="w-full h-64 rounded-lg shadow-md border"
          ></iframe>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Property Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-48 object-cover rounded-lg shadow-md cursor-pointer"
                data-bs-toggle="modal"
                data-bs-target={`#galleryModal${index}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Booking Form</h2>

            <form onSubmit={handleFormSubmit}>
              {/* Form fields */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="checkIn" className="block text-gray-700">Check-in Date</label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="checkOut" className="block text-gray-700">Check-out Date</label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  required
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="comments" className="block text-gray-700">Special Requests/Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  rows="4"
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                >
                  Confirm Booking
                </button>

                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>

            <form onSubmit={handlePaymentSubmit}>
              {/* Payment form fields */}
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block text-gray-700">Payment Method</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="creditCard">Credit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="bankTransfer">Bank Transfer</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-200"
                >
                  Complete Payment
                </button>

                <button
                  type="button"
                  onClick={closePaymentModal}
                  className="w-full sm:w-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-200"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalDetails;
