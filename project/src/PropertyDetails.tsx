// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Custom arrow components
// function NextArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
//       aria-label="Next slide"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M8.25 4.5l7.5 7.5-7.5 7.5"
//         />
//       </svg>
//     </button>
//   );
// }

// function PrevArrow(props: any) {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
//       aria-label="Previous slide"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={2}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 19.5L8.25 12l7.5-7.5"
//         />
//       </svg>
//     </button>
//   );
// }

// // ---------------- DUMMY DATA (Replace with your real data) ---------------
// const property = {
//   id: "Boy 001",
//   name: "Asteria Hostel | Noida Sector 52",
//   images: [
//     "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&h=400",
//     "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=400",
//     "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&h=400",
//   ],
//   warden: {
//     name: "Rohit Kumar",
//     phone: "+917654238976",
//   },
//   brand: "Mezstays",
//   tags: [
//     { label: "Nearby", icon: "📍" },
//     { label: "Fortis Hospital", icon: "🏥" },
//     { label: "Bus Stand", icon: "🚏" },
//   ],
//   overview: {
//     propertyType: "Boys Hostel",
//     transportation: "Hostel Cab",
//     food: "Available veg/Non veg",
//   },
//   amenities: [
//     { icon: "📶", label: "WiFi" },
//     { icon: "🅿️", label: "Parking" },
//   ],
//   roomSharing: [
//     {
//       title: "Double Sharing",
//       rent: "₹8,500",
//       deposit: "₹8,500",
//       withAC: "₹9,500",
//       lockIn: "11 Months",
//       rooms: "30 Rooms",
//     },
//     {
//       title: "Three Sharing",
//       rent: "₹7,000",
//       deposit: "₹7,000",
//       withAC: "₹8,000",
//       lockIn: "8 Months",
//       rooms: "25 Rooms",
//     },
//     {
//       title: "Five Sharing",
//       rent: "₹5,500",
//       deposit: "₹5,500",
//       withAC: "₹6,000",
//       lockIn: "6 Months",
//       rooms: "20 Rooms",
//     },
//   ],
//   notes: "Please avoid any damages, so we can't charge you extra ₹5000.",
//   virtualVideos: [
//     {
//       id: 1,
//       thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=328&h=193",
//       title: "Video 1",
//     },
//     {
//       id: 2,
//       thumbnail: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=328&h=193",
//       title: "Video 2",
//     },
//     {
//       id: 3,
//       thumbnail: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=328&h=193",
//       title: "Video 3",
//     },
//   ],
//   nearBy: [
//     {
//       id: 1,
//       name: "Asteria Hostel - Block A",
//       address: "Ram Nagar, NT 0872, Katraj",
//       image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=80&h=80",
//     },
//     {
//       id: 2,
//       name: "Asteria Hostel - Block B",
//       address: "Sector 52, Noida",
//       image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=80&h=80",
//     },
//   ],
// };

// export default function PropertyDetails() {
//   const { id } = useParams();
//   const [activeTab, setActiveTab] = useState(0);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//   };

//   const roomSharingActive = property.roomSharing[activeTab];

//   return (
//     <div className="bg-gray-50 min-h-screen p-6">
//       {/* PROPERTY DETAIL CARD WITH SLIDER */}
//       <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto mb-8 relative overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
        
//         {/* Slider Section */}
//         <div className="relative overflow-hidden rounded-xl">
//           <Slider {...sliderSettings}>
//             {property.images.map((imgUrl, idx) => (
//               <div key={idx} className="relative">
//                 <img
//                   src={imgUrl}
//                   alt={`Property Slide ${idx + 1}`}
//                   className="w-full h-72 object-cover rounded-xl"
//                 />
//               </div>
//             ))}
//           </Slider>
//           {/* Overlay sections */}
//           <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
//             Preferred By Students
//           </div>
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90">
//             2 People Visiting Today
//           </div>
//           <div className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-gray-700 transition-colors">
//             <span role="img" aria-label="icon" className="text-lg">
//               🎧
//             </span>
//           </div>
//         </div>

//         {/* Property Info */}
//         <div className="mt-6 flex flex-col md:flex-row md:justify-between">
//           <div>
//             <p className="text-sm text-gray-500 font-medium">ID: {property.id}</p>
//             <h2 className="text-2xl font-bold text-gray-800 mt-1">{property.name}</h2>
//             <p className="mt-3 text-sm text-gray-600">
//               Warden manager details:{" "}
//               <span className="font-medium text-gray-700">
//                 {property.warden.name}
//               </span>{" "}
//               |{" "}
//               <a
//                 href={`tel:${property.warden.phone}`}
//                 className="text-blue-500 hover:underline"
//               >
//                 {property.warden.phone}
//               </a>
//             </p>
//             {/* Tags */}
//             <div className="mt-4 flex flex-wrap gap-2">
//               {property.tags.map((tag) => (
//                 <div
//                   key={tag.label}
//                   className="flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
//                 >
//                   <span className="mr-1.5">{tag.icon}</span>
//                   {tag.label}
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="mt-4 md:mt-0 text-right self-start">
//             <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full">
//               {property.brand}
//             </span>
//           </div>
//         </div>

//         {/* Overview Section */}
//         <div className="mt-6 bg-gray-50 rounded-xl p-4">
//           <p className="text-sm font-semibold text-gray-700 mb-2">Overview</p>
//           <div className="text-sm text-gray-700 space-y-2">
//             <p>
//               <span className="font-semibold">Property Type:</span>{" "}
//               {property.overview.propertyType}
//             </p>
//             <p>
//               <span className="font-semibold">Hostel Transportation:</span>{" "}
//               {property.overview.transportation}
//             </p>
//             <p>
//               <span className="font-semibold">Food facility:</span>{" "}
//               {property.overview.food}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Additional sections for Amenities, Room Sharing, etc. */}
//       <div className="max-w-4xl mx-auto space-y-10">
//         {/* Amenities Section */}
//         {/* <section>
//           <h3 className="text-lg font-bold text-gray-700 mb-3">Amenities</h3>
//           <div className="flex gap-3 flex-wrap">
//             {property.amenities.map((amenity) => (
//               <div
//                 key={amenity.label}
//                 className="px-4 py-2 bg-gray-100 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-colors"
//               >
//                 <span>{amenity.icon}</span>
//                 <span className="text-gray-700 font-medium">
//                   {amenity.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section> */}

//         {/* Amenities Container */}
// <div className="bg-white p-6 shadow-md rounded-lg mb-6">
//   {/* Amenities Section */}
//   <section>
//     <h3 className="text-lg font-bold text-gray-700 mb-3">Amenities</h3>
//     <div className="flex gap-3 flex-wrap">
//       {property.amenities.map((amenity) => (
//         <div
//           key={amenity.label}
//           className="px-4 py-2 bg-gray-100 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-colors"
//         >
//           <span>{amenity.icon}</span>
//           <span className="text-gray-700 font-medium">
//             {amenity.label}
//           </span>
//         </div>
//       ))}
//     </div>
//   </section>
// </div>

        

//         {/* Notes Section */}
//         <div className="bg-white p-6 rounded-xl shadow-lg">
//           <h3 className="text-lg font-bold text-gray-700 mb-3">Discription</h3>
//           <p className="text-sm text-gray-600">⚠️ {property.notes}</p>
//         </div>

//         {/* Room Sharing Section */}
//         <section className="bg-white rounded-xl shadow-lg overflow-hidden">
//           <div className="p-6">
//             <h3 className="text-xl font-bold text-gray-800 mb-6">Room Sharing Options</h3>
//             <div className="flex space-x-2 mb-8">
//               {property.roomSharing.map((option, index) => (
//                 <button
//                   key={option.title}
//                   onClick={() => setActiveTab(index)}
//                   className={`px-4 py-2 rounded-lg transition-all duration-300 ${
//                     activeTab === index
//                       ? "bg-orange-500 text-white shadow-lg transform scale-105"
//                       : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//                   }`}
//                 >
//                   {option.title}
//                 </button>
//               ))}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
//                 <div className="flex items-center justify-between mb-4">
//                   <p className="text-gray-600">Rent per Person</p>
//                   <span className="text-orange-500">💰</span>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">{roomSharingActive.rent}</p>
//               </div>
//               <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
//                 <div className="flex items-center justify-between mb-4">
//                   <p className="text-gray-600">Security Deposit</p>
//                   <span className="text-orange-500">🔒</span>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">{roomSharingActive.deposit}</p>
//               </div>
//               <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
//                 <div className="flex items-center justify-between mb-4">
//                   <p className="text-gray-600">With AC</p>
//                   <span className="text-orange-500">❄️</span>
//                 </div>
//                 <p className="text-3xl font-bold text-gray-900">{roomSharingActive.withAC}</p>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
//                 <div className="flex items-center justify-between mb-4">
//                   <p className="text-gray-600">Lock in Period</p>
//                   <span className="text-gray-500">📅</span>
//                 </div>
//                 <p className="text-2xl font-semibold text-gray-900">{roomSharingActive.lockIn}</p>
//               </div>
//               <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
//                 <div className="flex items-center justify-between mb-4">
//                   <p className="text-gray-600">Available Rooms</p>
//                   <span className="text-gray-500">🏠</span>
//                 </div>
//                 <p className="text-2xl font-semibold text-gray-900">{roomSharingActive.rooms}</p>
//               </div>
//             </div>
//           </div>
//         </section>

        


//         {/* Virtual Videos Section */}
//         <section>
//           <h3 className="text-lg font-bold text-gray-700 mb-3">Virtual Videos</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {property.virtualVideos.map((video) => (
//               <div
//                 key={video.id}
//                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
//               >
//                 <img
//                   src={video.thumbnail}
//                   alt={video.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-3">
//                   <p className="font-medium text-gray-800">{video.title}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Nearby Properties Section */}
//         <section>
//           <h3 className="text-lg font-bold text-gray-700 mb-3">
//             Nearby Properties
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {property.nearBy.map((near) => (
//               <div
//                 key={near.id}
//                 className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-4"
//               >
//                 <img
//                   src={near.image}
//                   alt={near.name}
//                   className="w-20 h-20 rounded-lg object-cover border border-gray-200"
//                 />
//                 <div>
//                   <p className="font-bold text-gray-800">{near.name}</p>
//                   <p className="text-sm text-gray-500">{near.address}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Schedule a Visit Button */}
//         <div className="text-center py-6">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
//           >
//             Schedule a Visit
//           </button>
//         </div>
//       </div>

//       {/* Booking Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 relative mx-4"
//               initial={{ y: "-30px", opacity: 0 }}
//               animate={{ y: "0", opacity: 1 }}
//               exit={{ y: "-30px", opacity: 0 }}
//               transition={{ duration: 0.35 }}
//             >
//               <button
//                 onClick={() => setIsModalOpen(false)}
//                 className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               </button>
//               <h3 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
//                 Book a Visit
//               </h3>
//               <form className="grid gap-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
//                     required
//                   />
//                   <input
//                     type="email"
//                     placeholder="Email"
//                     className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
//                     required
//                   />
//                   <input
//                     type="tel"
//                     placeholder="Phone Number"
//                     className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
//                     required
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <input
//                     type="date"
//                     className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
//                     required
//                   />
//                   <input
//                     type="date"
//                     className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
//                     required
//                   />
//                 </div>
//                 <textarea
//                   placeholder="Additional Message"
//                   className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200 resize-none h-28"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-full transform transition-all hover:-translate-y-0.5"
//                 >
//                   Submit Inquiry
//                 </button>
//               </form>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }






import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom arrow components
function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all"
      aria-label="Previous slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
}

// ---------------- DUMMY DATA (Replace with your real data) ---------------
const property = {
  id: "Boy 001",
  name: "Asteria Hostel | Noida Sector 52",
  images: [
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&h=400",
    "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&h=400",
  ],
  warden: {
    name: "Rohit Kumar",
    phone: "+917654238976",
  },
  brand: "Mezstays",
  tags: [
    { label: "Nearby", icon: "📍" },
    { label: "Fortis Hospital", icon: "🏥" },
    { label: "Bus Stand", icon: "🚏" },
  ],
  overview: {
    propertyType: "Boys Hostel",
    transportation: "Hostel Cab",
    food: "Available veg/Non veg",
  },
  amenities: [
    { icon: "📶", label: "WiFi" },
    { icon: "🅿️", label: "Parking" },
  ],
  roomSharing: [
    {
      title: "Double Sharing",
      rent: "₹8,500",
      deposit: "₹8,500",
      withAC: "₹9,500",
      lockIn: "11 Months",
      rooms: "30 Rooms",
    },
    {
      title: "Three Sharing",
      rent: "₹7,000",
      deposit: "₹7,000",
      withAC: "₹8,000",
      lockIn: "8 Months",
      rooms: "25 Rooms",
    },
    {
      title: "Five Sharing",
      rent: "₹5,500",
      deposit: "₹5,500",
      withAC: "₹6,000",
      lockIn: "6 Months",
      rooms: "20 Rooms",
    },
  ],
  notes: "Please avoid any damages, so we can't charge you extra ₹5000.",
  virtualVideos: [
    {
      id: 1,
      thumbnail:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=328&h=193",
      title: "Video 1",
    },
    {
      id: 2,
      thumbnail:
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=328&h=193",
      title: "Video 2",
    },
    {
      id: 3,
      thumbnail:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=328&h=193",
      title: "Video 3",
    },
  ],
  nearBy: [
    {
      id: 1,
      name: "Asteria Hostel - Block A",
      address: "Ram Nagar, NT 0872, Katraj",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=80&h=80",
    },
    {
      id: 2,
      name: "Asteria Hostel - Block B",
      address: "Sector 52, Noida",
      image:
        "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=80&h=80",
    },
  ],
};

export default function PropertyDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // NEW STATES FOR SIGNUP/CONNECT FLOW
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showConnectModal, setShowConnectModal] = useState(false);
  // Initially blur only the property details container (below the slider)
  const [isBlurred, setIsBlurred] = useState(true);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const roomSharingActive = property.roomSharing[activeTab];

  // ----- Handlers -----
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup logic here...
    setIsSignedIn(true);
    setShowSignUpModal(false);
  };

  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate connect logic here...
    setShowConnectModal(false);
    // Unblur the property details once user completes connect
    setIsBlurred(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      {/* PROPERTY DETAIL CARD WITH SLIDER */}
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto mb-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>

        {/* Slider Section */}
        <div className="relative overflow-hidden rounded-xl">
          <Slider {...sliderSettings}>
            {property.images.map((imgUrl, idx) => (
              <div key={idx} className="relative">
                <img
                  src={imgUrl}
                  alt={`Property Slide ${idx + 1}`}
                  className="w-full h-72 object-cover rounded-xl"
                />
              </div>
            ))}
          </Slider>

          {/* Overlay sections on slider */}
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
            Preferred By Students
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg backdrop-blur-sm bg-opacity-90">
            2 People Visiting Today
          </div>
          <div className="absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full cursor-pointer shadow-lg hover:bg-gray-700 transition-colors">
            <span role="img" aria-label="icon" className="text-lg">
              🎧
            </span>
          </div>
        </div>

        {/* Blurred Property Details Container (only property info and overview get blurred) */}
        <div className="relative mt-6">
          {isBlurred && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              {!isSignedIn ? (
                <button
                  onClick={() => setShowSignUpModal(true)}
                  className="bg-yellow-500 text-white px-6 py-3 m-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
                >
                  Sign Up
                </button>
              ) : (
                <button
                  onClick={() => setShowConnectModal(true)}
                  className="bg-yellow-500 text-white px-6 py-3 m-2 rounded-full shadow-lg hover:bg-yellow-600 transition-colors"
                >
                  Connect Now
                </button>
              )}
            </div>
          )}
          <div className={`${isBlurred ? "filter blur-sm" : ""}`}>
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <p className="text-sm text-gray-500 font-medium">ID: {property.id}</p>
                <h2 className="text-2xl font-bold text-gray-800 mt-1">{property.name}</h2>
                <p className="mt-3 text-sm text-gray-600">
                  Warden manager details:{" "}
                  <span className="font-medium text-gray-700">{property.warden.name}</span>{" "}
                  |{" "}
                  <a href={`tel:${property.warden.phone}`} className="text-blue-500 hover:underline">
                    {property.warden.phone}
                  </a>
                </p>
                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {property.tags.map((tag) => (
                    <div
                      key={tag.label}
                      className="flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <span className="mr-1.5">{tag.icon}</span>
                      {tag.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-4 md:mt-0 text-right self-start">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full">
                  {property.brand}
                </span>
              </div>
            </div>

            {/* Overview Section */}
            <div className="mt-6 bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-semibold text-gray-700 mb-2">Overview</p>
              <div className="text-sm text-gray-700 space-y-2">
                <p>
                  <span className="font-semibold">Property Type:</span>{" "}
                  {property.overview.propertyType}
                </p>
                <p>
                  <span className="font-semibold">Hostel Transportation:</span>{" "}
                  {property.overview.transportation}
                </p>
                <p>
                  <span className="font-semibold">Food facility:</span>{" "}
                  {property.overview.food}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional sections (not blurred) */}
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Amenities Container */}
        <div className="bg-white p-6 shadow-md rounded-lg mb-6">
          <section>
            <h3 className="text-lg font-bold text-gray-700 mb-3">Amenities</h3>
            <div className="flex gap-3 flex-wrap">
              {property.amenities.map((amenity) => (
                <div
                  key={amenity.label}
                  className="px-4 py-2 bg-gray-100 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-colors"
                >
                  <span>{amenity.icon}</span>
                  <span className="text-gray-700 font-medium">{amenity.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Notes Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-bold text-gray-700 mb-3">Discription</h3>
          <p className="text-sm text-gray-600">⚠️ {property.notes}</p>
        </div>

        {/* Room Sharing Section */}
        <section className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Room Sharing Options</h3>
            <div className="flex space-x-2 mb-8">
              {property.roomSharing.map((option, index) => (
                <button
                  key={option.title}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? "bg-orange-500 text-white shadow-lg transform scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {option.title}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">Rent per Person</p>
                  <span className="text-orange-500">💰</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{roomSharingActive.rent}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">Security Deposit</p>
                  <span className="text-orange-500">🔒</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{roomSharingActive.deposit}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">With AC</p>
                  <span className="text-orange-500">❄️</span>
                </div>
                <p className="text-3xl font-bold text-gray-900">{roomSharingActive.withAC}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">Lock in Period</p>
                  <span className="text-gray-500">📅</span>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{roomSharingActive.lockIn}</p>
              </div>
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-gray-600">Available Rooms</p>
                  <span className="text-gray-500">🏠</span>
                </div>
                <p className="text-2xl font-semibold text-gray-900">{roomSharingActive.rooms}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Virtual Videos Section */}
        <section>
          <h3 className="text-lg font-bold text-gray-700 mb-3">Virtual Videos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {property.virtualVideos.map((video) => (
              <div
                key={video.id}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-3">
                  <p className="font-medium text-gray-800">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nearby Properties Section */}
        <section>
          <h3 className="text-lg font-bold text-gray-700 mb-3">Nearby Properties</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {property.nearBy.map((near) => (
              <div
                key={near.id}
                className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex items-center gap-4"
              >
                <img
                  src={near.image}
                  alt={near.name}
                  className="w-20 h-20 rounded-lg object-cover border border-gray-200"
                />
                <div>
                  <p className="font-bold text-gray-800">{near.name}</p>
                  <p className="text-sm text-gray-500">{near.address}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Schedule a Visit Button */}
        <div className="text-center py-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            Schedule a Visit
          </button>
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-xl w-full p-8 relative mx-4"
              initial={{ y: "-30px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "-30px", opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-yellow-600 mb-6 text-center">
                Book a Visit
              </h3>
              <form className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
                    required
                  />
                  <input
                    type="date"
                    className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200"
                    required
                  />
                </div>
                <textarea
                  placeholder="Additional Message"
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-200 resize-none h-28"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 rounded-full transform transition-all hover:-translate-y-0.5"
                >
                  Submit Inquiry
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SIGN UP Modal */}
      <AnimatePresence>
        {showSignUpModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative mx-4"
              initial={{ y: "-30px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "-30px", opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                onClick={() => setShowSignUpModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                Sign Up
              </h3>
              <form onSubmit={handleSignUpSubmit} className="grid gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full transform transition-all hover:-translate-y-0.5"
                >
                  Sign Up
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CONNECT Modal */}
      <AnimatePresence>
        {showConnectModal && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative mx-4"
              initial={{ y: "-30px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              exit={{ y: "-30px", opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <button
                onClick={() => setShowConnectModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                Connect
              </h3>
              <form onSubmit={handleConnectSubmit} className="grid gap-4">
                <input
                  type="text"
                  placeholder="Additional Info"
                  className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full transform transition-all hover:-translate-y-0.5"
                >
                  Connect Now
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
