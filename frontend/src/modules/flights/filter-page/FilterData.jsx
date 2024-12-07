/* eslint-disable react/prop-types */

import { Button, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ListAndGridView from "../../filter-page/ListAndGridView";
import SortByMenu from "../../filter-page/SortByMenu";
import FilterByMobileView from "../../filter-page/FilterByMobileView";

const FlightFilter = ({
  view,
  setView,
  data,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
}) => {
  const navigate = useNavigate();

  const mockFlightData = [
    {
      id: 1,
      airline: "IndiGo",
      logo: "https://via.placeholder.com/100x50?text=IndiGo",
      flightNumber: "6E-203",
      departure: "22:15",
      arrival: "14:40",
      duration: "16h 55m",
      stops: "1 stop",
      layover: "Delhi (DEL)",
      luggage: "Personal item, cabin bag, checked bag",
      ticketUpgrade: "Flexible ticket upgrade available",
      price: 50154.99,
      details: "Includes all taxes and fees",
    },
    {
      id: 2,
      airline: "Air India",
      logo: "https://via.placeholder.com/100x50?text=Air+India",
      flightNumber: "AI-405",
      departure: "14:05",
      arrival: "17:35",
      duration: "3h 0m",
      stops: "Direct",
      layover: "None",
      luggage: "Personal item, cabin bag, checked bag",
      ticketUpgrade: "Best fare available",
      price: 45000,
      details: "Includes taxes and charges",
    },
    {
      id: 3,
      airline: "SpiceJet",
      logo: "https://via.placeholder.com/100x50?text=SpiceJet",
      flightNumber: "SG-101",
      departure: "06:00",
      arrival: "08:45",
      duration: "2h 45m",
      stops: "Non-stop",
      layover: "None",
      luggage: "Personal item, cabin bag",
      ticketUpgrade: "Cheapest option available",
      price: 42000,
      details: "Includes limited baggage",
    },
  ];

  const [filteredFlights, setFilteredFlights] = useState(mockFlightData);
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);

    const sortedFlights = [...mockFlightData].sort((a, b) => {
      if (sortValue === "priceLowHigh") return a.price - b.price;
      if (sortValue === "priceHighLow") return b.price - a.price;
      if (sortValue === "duration") return a.duration.localeCompare(b.duration);
      return 0;
    });

    setFilteredFlights(sortedFlights);
  };

  const toggleSave = (id) => {
    setFilteredFlights((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, saved: !item.saved } : item
      )
    );
  };

  const handleOnClickNavigate = (flight) => {
    navigate(`/flight-details/${flight.id}`, { state: flight });
  };

  const renderFlight = (flight) => (
    <div
      key={flight.id}
      className={`${
        view === "list" ? "flex flex-col lg:flex-row" : "flex flex-col"
      } border rounded-lg shadow-md bg-white p-4 gap-4`}
    >
      {/* Airline Logo Section */}
      <div
        className={`relative ${
          view === "list" ? "w-full lg:w-1/5" : "w-full"
        } flex justify-center items-center`}
      >
        <img
          src={flight.logo}
          alt={flight.airline}
          className="h-16 object-contain"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold text-lg">{flight.airline}</h3>
            <p className="text-sm text-gray-600">{flight.flightNumber}</p>
          </div>
          <IconButton
            onClick={() => toggleSave(flight.id)}
            className="!rounded-full p-2 bg-white border border-gray-300"
          >
            {flight.saved ? (
              <AiFillHeart className="w-5 h-5 text-red-500" />
            ) : (
              <AiOutlineHeart className="w-5 h-5 text-black" />
            )}
          </IconButton>
        </div>
        <div className="mt-2 text-sm">
          <p>
            <span className="font-medium">Departure:</span> {flight.departure}
          </p>
          <p>
            <span className="font-medium">Arrival:</span> {flight.arrival}
          </p>
          <p>
            <span className="font-medium">Duration:</span> {flight.duration}
          </p>
          <p>
            <span className="font-medium">Stops:</span> {flight.stops}
          </p>
          {flight.layover && (
            <p>
              <span className="font-medium">Layover:</span> {flight.layover}
            </p>
          )}
          <p className="mt-2 text-gray-600">{flight.luggage}</p>
          <p className="mt-1 text-blue-600">{flight.ticketUpgrade}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <p className="text-lg font-semibold text-gray-800">
              ₹{flight.price.toLocaleString()}
            </p>
            <p className="text-sm text-gray-500">{flight.details}</p>
          </div>
          <Button
            variant="filled"
            color="blue"
            onClick={() => handleOnClickNavigate(flight)}
          >
            View Details
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
          <strong>{filteredFlights.length}</strong> flights found
        </p>

        <div className="flex items-center gap-2">
          <div className="block lg:hidden">
            <IconButton
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
              className="rounded-full p-2 border border-gray-300 text-gray-600 bg-gray-50"
            >
              <FiFilter className="w-5 h-5" />
            </IconButton>
          </div>
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

      {/* Flights Display */}
      <div
        className={`grid ${
          view === "list"
            ? "grid-cols-1"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        } gap-4`}
      >
        {filteredFlights.map((flight) => renderFlight(flight))}
      </div>

      {/* Mobile Filter Drawer */}
      <FilterByMobileView
        isDrawerOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
      />
    </main>
  );
};

export default FlightFilter;
