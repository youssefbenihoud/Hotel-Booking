import room1 from "../assets/Executive.jpg";
import room2 from "../assets/Presidential.jpg";
import room3 from "../assets/vip.jpg";
import room4 from "../assets/Double.jpg";
import {
  FaWifi,
  FaCoffee,
  FaBath,
  FaParking,
  FaSwimmingPool,
  FaCocktail,
} from "react-icons/fa";

export const roomData = [
  {
    id: 1,
    name: "Executive Suite",
    description:
      "A spacious and elegant suite with a king-sized bed, a separate living area, and a private balcony with stunning city views. Perfect for business travelers or couples.",
    price: 250,
    image: room1,
    facilities: [
      { name: "Free Wifi", icon: <FaWifi /> },
      { name: "Coffee Maker", icon: <FaCoffee /> },
      { name: "Private Bathroom", icon: <FaBath /> },
      { name: "Free Parking", icon: <FaParking /> },
    ],
  },
  {
    id: 2,
    name: "Presidential Suite",
    description:
      "The epitome of luxury, our Presidential Suite offers unparalleled comfort and style. It features a master bedroom, a large living room, a dining area, and a private jacuzzi.",
    price: 500,
    image: room2,
    facilities: [
      { name: "Free Wifi", icon: <FaWifi /> },
      { name: "Coffee Maker", icon: <FaCoffee /> },
      { name: "Private Bathroom", icon: <FaBath /> },
      { name: "Free Parking", icon: <FaParking /> },
      { name: "Swimming Pool Access", icon: <FaSwimmingPool /> },
    ],
  },
  {
    id: 3,
    name: "VIP Room",
    description:
      "Designed for our most discerning guests, the VIP room offers exclusive amenities, personalized service, and a complimentary welcome drink.",
    price: 350,
    image: room3,
    facilities: [
      { name: "Free Wifi", icon: <FaWifi /> },
      { name: "Coffee Maker", icon: <FaCoffee /> },
      { name: "Private Bathroom", icon: <FaBath /> },
      { name: "Free Parking", icon: <FaParking /> },
      { name: "Welcome Drink", icon: <FaCocktail /> },
    ],
  },
  {
    id: 4,
    name: "Double Room",
    description:
      "A comfortable and well-appointed room with two double beds, perfect for families or friends traveling together. It offers all the essential amenities for a pleasant stay.",
    price: 150,
    image: room4,
    facilities: [
      { name: "Free Wifi", icon: <FaWifi /> },
      { name: "Coffee Maker", icon: <FaCoffee /> },
      { name: "Private Bathroom", icon: <FaBath /> },
    ],
  },
];
