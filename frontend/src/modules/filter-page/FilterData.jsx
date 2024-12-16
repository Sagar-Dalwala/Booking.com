/* eslint-disable react/prop-types */

import { Button, IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";

import ListAndGridView from "./ListAndGridView";
import FilterByMobileView from "./FilterByMobileView";
import SortByMenu from "./SortByMenu";

const FilterData = ({
  view,
  setView,
  data,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
}) => {
  const navigate = useNavigate();
  const mockData = [
    {
      id: 1,
      name: "WelcomHeritage Panjim Inn",
      price: 8700,
      rating: 8.1,
      reviews: 338,
      location: "Fontainhas, Panaji",
      roomDetails: "Panjim Inn Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      amenities: ["Breakfast included", "Free cancellation", "Free Wi-Fi"],
      description: "Only 1 room left at this price on our site.",
      taxes: 1566,
      image: "https://via.placeholder.com/400x300?text=Panjim+Inn",
    },
    {
      id: 2,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      reviews: 210,
      location: "Anjuna, Goa",
      roomDetails: "Sea View Room",
      beds: "1 king-size bed",
      amenities: ["Breakfast included", "Sea view", "Free cancellation"],
      description: "Limited-time Deal, Only 5 rooms left.",
      taxes: 2000,
      image: "https://via.placeholder.com/400x300?text=Bell+Bottoms",
    },
    {
      id: 3,
      name: "WelcomHeritage Panjim Inn",
      price: 8700,
      rating: 8.1,
      reviews: 338,
      location: "Fontainhas, Panaji",
      roomDetails: "Panjim Inn Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      amenities: ["Breakfast included", "Free cancellation", "Free Wi-Fi"],
      description: "Only 1 room left at this price on our site.",
      taxes: 1566,
      image: "https://via.placeholder.com/400x300?text=Panjim+Inn",
    },
    {
      id: 4,
      name: "WelcomHeritage Panjim Inn",
      price: 8700,
      rating: 8.1,
      reviews: 338,
      location: "Fontainhas, Panaji",
      roomDetails: "Panjim Inn Deluxe Double or Twin Room",
      beds: "1 double or 2 singles",
      amenities: ["Breakfast included", "Free cancellation", "Free Wi-Fi"],
      description: "Only 1 room left at this price on our site.",
      taxes: 1566,
      image: "https://via.placeholder.com/400x300?text=Panjim+Inn",
    },
    {
      id: 5,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      reviews: 210,
      location: "Anjuna, Goa",
      roomDetails: "Sea View Room",
      beds: "1 king-size bed",
      amenities: ["Breakfast included", "Sea view", "Free cancellation"],
      description: "Limited-time Deal, Only 5 rooms left.",
      taxes: 2000,
      image: "https://via.placeholder.com/400x300?text=Bell+Bottoms",
    },
    {
      id: 6,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      reviews: 210,
      location: "Anjuna, Goa",
      roomDetails: "Sea View Room",
      beds: "1 king-size bed",
      amenities: ["Breakfast included", "Sea view", "Free cancellation"],
      description: "Limited-time Deal, Only 5 rooms left.",
      taxes: 2000,
      image: "https://via.placeholder.com/400x300?text=Bell+Bottoms",
    },
    {
      id: 7,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      reviews: 210,
      location: "Anjuna, Goa",
      roomDetails: "Sea View Room",
      beds: "1 king-size bed",
      amenities: ["Breakfast included", "Sea view", "Free cancellation"],
      description: "Limited-time Deal, Only 5 rooms left.",
      taxes: 2000,
      image: "https://via.placeholder.com/400x300?text=Bell+Bottoms",
    },
    {
      id: 8,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      reviews: 210,
      location: "Anjuna, Goa",
      roomDetails: "Sea View Room",
      beds: "1 king-size bed",
      amenities: ["Breakfast included", "Sea view", "Free cancellation"],
      description: "Limited-time Deal, Only 5 rooms left.",
      taxes: 2000,
      image: "https://via.placeholder.com/400x300?text=Bell+Bottoms",
    },
    {
      id: 9,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      reviews: 210,
      location: "Anjuna, Goa",
      roomDetails: "Sea View Room",
      beds: "1 king-size bed",
      amenities: ["Breakfast included", "Sea view", "Free cancellation"],
      description: "Limited-time Deal, Only 5 rooms left.",
      taxes: 2000,
      image: "https://via.placeholder.com/400x300?text=Bell+Bottoms",
    },
    {
      id: 10,
      name: "I Love Bell Bottoms Vagator Goa",
      price: 11925,
      rating: 7.6,
      reviews: 210,
      location: "Anjuna, Goa",
      roomDetails: "Sea View Room",
      beds: "1 king-size bed",
      amenities: ["Breakfast included", "Sea view", "Free cancellation"],
      description: "Limited-time Deal, Only 5 rooms left.",
      taxes: 2000,
      image: "https://via.placeholder.com/400x300?text=Bell+Bottoms",
    },
  ];

  const [filteredData, setFilteredData] = useState(mockData);
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);

    const sortedData = [...mockData].sort((a, b) => {
      if (sortValue === "priceLowHigh") return a.price - b.price;
      if (sortValue === "priceHighLow") return b.price - a.price;
      if (sortValue === "rating") return b.rating - a.rating;
      return 0;
    });

    setFilteredData(sortedData);
  };

  const toggleSave = (id) => {
    setFilteredData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };
  const handleOnClickNavigate = (data) => {
    navigate(`/stays-details/${data.id}`, { state: data });
  };

  const renderProperty = (property) => (
    <div
      key={property.id}
      className={`${
        view === "list" ? "flex flex-col lg:flex-row" : "flex flex-col"
      } border rounded-lg shadow-md bg-white p-2 gap-4`}
    >
      {/* Image Section */}
      <div
        className={`relative ${
          view === "list" ? "w-full lg:w-1/2" : "w-full"
        } cursor-pointer`}
      >
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover rounded-lg"
          onClick={() => handleOnClickNavigate(property)}
        />
        <IconButton
          onClick={() => toggleSave(property.id)}
          className="!absolute top-2 right-2 rounded-full p-2 bg-white border border-gray-300"
        >
          {property.saved ? (
            <AiFillHeart className="w-5 h-5 text-red-500" />
          ) : (
            <AiOutlineHeart className="w-5 h-5 text-black" />
          )}
        </IconButton>
      </div>

      {/* Details Section */}
      <div
        className={`${
          view === "list" ? "flex flex-col lg:flex-row w-full" : "flex flex-col"
        } justify-between`}
      >
        <div className={`${view === "list" ? "lg:w-2/3" : "text-center"}`}>
          <h3
            className="font-semibold text-md md:text-lg text-blue-600 hover:underline cursor-pointer"
            onClick={() => handleOnClickNavigate(property)}
          >
            {property.name}
          </h3>
          <p className="text-sm text-blue-600 hover:underline ">
            {property.location}
          </p>
          <p className="text-gray-800 mt-2 text-xs md:text-sm font-bookingBold">
            {property.roomDetails}
          </p>
          <p className="text-gray-800 text-xs md:text-sm">{property.beds}</p>
          <p className="text-gray-600 mt-2 text-sm">{property.description}</p>
          <div className="mt-4">
            <h4 className="text-sm font-semibold">Amenities:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              {property.amenities.map((amenity, index) => (
                <li key={index}>• {amenity}</li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`${
            view === "list" ? "lg:w-1/3 text-right" : "text-center mt-4"
          }`}
          onClick={() => handleOnClickNavigate(property)}
        >
          <p className="text-yellow-500 font-semibold cursor-pointer">
            Rating: {property.rating}
          </p>
          <p className="text-gray-500 text-sm cursor-pointer">
            {property.reviews} reviews
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-800 cursor-pointer">
              ₹{property.price}
            </p>
            <p className="text-sm text-gray-500">
              +₹{property.taxes} taxes and charges
            </p>
          </div>
          <Button variant="filled" color="blue" className="mt-4">
            See Availability
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <main className="w-full lg:w-3/4 p-4 space-y-4">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          <strong>{filteredData.length}</strong> properties found in{" "}
          {data?.destination || "your search location"}
        </p>

        {/* Mobile Filter Button */}
        <div className="flex items-center gap-2">
          <div className="block lg:hidden">
            <IconButton
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="rounded-full p-2 border border-gray-300 text-gray-600 bg-gray-50"
            >
              <FiFilter className="w-5 h-5" />
            </IconButton>
          </div>
          {/* List/Grid View */}
          <ListAndGridView view={view} setView={setView} />
        </div>
      </div>

      {/* Sort By Menu */}
      <div className="flex lg:top-4 lg:w-1/4 lg:pr-4">
        <SortByMenu
          handleSortChange={handleSortChange}
          sortOption={sortOption}
        />
      </div>

      {/* Properties Display */}
      <div
        className={`grid ${
          view === "list"
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        } gap-4`}
      >
        {filteredData.map((property) => renderProperty(property))}
      </div>

      {/* Mobile Filter Drawer */}
      <FilterByMobileView
        isDrawerOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
      />
    </main>
  );
};

export default FilterData;
