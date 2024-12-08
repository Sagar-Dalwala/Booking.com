import { useState } from "react";
import { Button } from "@material-tailwind/react";
import Backpack from "../../../../public/flights/flights-bag/Backpack";
import SmallSuitCaseBag from "../../../../public/flights/flights-bag/SmallSuitCaseBag";
import SuitCaseBag from "../../../../public/flights/flights-bag/SuitCaseBag";
import FlightDetailsModal from "../../../components/modal/FlightDetailsModal";

const FlightFilter = () => {
  const mockFlightData = [
    {
      id: 1,
      type: "Round Trip",
      airline: "Air India",
      logo: "https://via.placeholder.com/100x50?text=Air+India",
      departure: {
        time: "20:25",
        airport: "BOM",
        destination: "BLR",
        date: "16 Dec",
        duration: "1h 40m",
        stops: "Direct",
        endTime: "22:05",
      },
      return: {
        time: "08:25",
        airport: "BLR",
        destination: "BOM",
        date: "18 Dec",
        duration: "1h 45m",
        stops: "Direct",
        endTime: "10:05",
      },
      luggage: [
        { type: "Personal item", icon: <Backpack /> },
        {
          type: "Cabin bag",
          icon: <SmallSuitCaseBag />,
        },
        { type: "Checked bag", icon: <SuitCaseBag /> },
      ],
      price: 13453.0,
    },
    {
      id: 2,
      type: "One-Way",
      airline: "IndiGo",
      logo: "https://via.placeholder.com/100x50?text=IndiGo",
      departure: {
        time: "14:05",
        airport: "DEL",
        destination: "BLR",
        date: "16 Dec",
        duration: "2h 15m",
        stops: "1 Stop",
        endTime: "16:20",
      },
      luggage: [
        { type: "Personal item", icon: <Backpack /> },
        {
          type: "Cabin bag",
          icon: <SmallSuitCaseBag />,
        },
      ],
      price: 8750.0,
    },
  ];

  const [sortOption, setSortOption] = useState("Best");

  // Function to sort flights
  const sortedFlights = [...mockFlightData].sort((a, b) => {
    if (sortOption === "Cheapest") return a.price - b.price;
    if (sortOption === "Fastest")
      return a.departure.duration.localeCompare(b.departure.duration);
    return 0; // "Best" (default order)
  });

  const [selectedFlight, setSelectedFlight] = useState(null);

  const openModal = (flight) => setSelectedFlight(flight);
  const closeModal = () => setSelectedFlight(null);

  return (
    <div className="w-full max-w-6xl mx-auto p-4 space-y-6">
      {/* Sorting Tabs */}
      <div className="flex justify-start space-x-4 border-b pb-2">
        {["Best", "Cheapest", "Fastest"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSortOption(tab)}
            className={`py-2 px-4 rounded ${
              sortOption === tab
                ? "border-b-2 border-blue-600 text-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Flight Cards */}
      <div className="space-y-4">
        {sortedFlights.map((flight) => (
          <div
            key={flight.id}
            className="border rounded-lg shadow-sm p-4 grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            {/* Airline Info */}
            <div className="col-span-3 flex flex-col items-center text-center md:text-left">
              <img
                src={flight.logo}
                alt={flight.airline}
                className="h-12 w-auto object-contain"
              />
              <p className="text-sm text-gray-500 mt-2">{flight.airline}</p>
              {flight.type === "Round Trip" && (
                <>
                  <img
                    src={flight.logo}
                    alt={flight.airline}
                    className="h-12 w-auto object-contain mt-2"
                  />
                  <p className="text-sm text-gray-500 mt-2">{flight.airline}</p>{" "}
                </>
              )}
            </div>

            {/* Flight Details */}
            <div className="col-span-6 space-y-4">
              {/* Departure */}
              <div className="flex items-center justify-between my-3">
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    {flight.departure.time}
                  </p>
                  <p className="text-sm text-gray-500">
                    {flight.departure.airport} - {flight.departure.date}
                  </p>
                </div>
                <div className="text-gray-500 text-sm flex items-center">
                  <span className="flex-grow border-t border-gray-300"></span>
                  <span className="px-2 flex items-center">
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                    <span className="w-16 bg-gray-500 border border-gray-300 mr-2"></span>
                    {flight.departure.stops}
                    <span className="w-16 bg-gray-500 border border-gray-300 ms-2"></span>
                    <span className="w-2 h-2 bg-gray-500 rounded-full"></span>
                  </span>
                  <span className="flex-grow border-t border-gray-300"></span>
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-700">
                    {flight.departure.endTime}
                  </p>
                  <p className="text-sm text-gray-500">
                    {flight.departure.destination}
                  </p>
                </div>
              </div>

              {/* Return (for Round Trip) */}
              {flight.type === "Round Trip" && (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      {flight.return.time}
                    </p>
                    <p className="text-sm text-gray-500">
                      {flight.return.airport} - {flight.return.date}
                    </p>
                  </div>
                  <div className="text-gray-500 text-sm flex items-center">
                    <span className="flex-grow border-t border-gray-300"></span>
                    <span className="px-2 flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full "></span>
                      <span className="w-16 bg-gray-500 border border-gray-300 mr-2"></span>
                      {flight.return.stops}
                      <span className="w-16 bg-gray-500 border border-gray-300 ms-2"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full "></span>
                    </span>
                    <span className="flex-grow border-t border-gray-300"></span>
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-700">
                      {flight.return.endTime}
                    </p>
                    <p className="text-sm text-gray-500">
                      {flight.return.destination}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Price and Actions */}
            <div className="col-span-3 flex flex-col items-end justify-between">
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                {flight.luggage.map((item, index) => (
                  <span key={index} title={item.type}>
                    <div className="my-2">{item.icon}</div>
                  </span>
                ))}
              </div>
              <div>
                <p className="text-lg font-bold text-gray-800">
                  ₹{flight.price.toLocaleString()}
                </p>
                <Button
                  variant="filled"
                  color="blue"
                  size="sm"
                  className="mt-2"
                  onClick={() => openModal(flight)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FlightDetailsModal
        flight={selectedFlight}
        isOpen={!!selectedFlight}
        onClose={closeModal}
      />
    </div>
  );
};

export default FlightFilter;
