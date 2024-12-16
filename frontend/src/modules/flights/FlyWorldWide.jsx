import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FlyWorldWide = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("Asia");

  const categories = [
    "Asia",
    "North America",
    "Europe",
    "Africa",
    "Oceania",
    "Middle East",
  ];

  const flightData = {
    Asia: [
      {
        id: 1,
        from: "Mumbai",
        to: "Panaji",
        time: "1h 30m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        from: "Tokyo",
        to: "Seoul",
        time: "2h 15m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        from: "Bangkok",
        to: "Singapore",
        time: "2h 5m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 4,
        from: "Mumbai",
        to: "Delhi",
        time: "1h 25m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 5,
        from: "Kolkata",
        to: "Dhaka",
        time: "50m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 6,
        from: "Chennai",
        to: "Colombo",
        time: "1h 10m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 7,
        from: "Jakarta",
        to: "Bali",
        time: "1h 30m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 8,
        from: "Hanoi",
        to: "Ho Chi Minh",
        time: "2h",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 9,
        from: "Kuala Lumpur",
        to: "Penang",
        time: "1h",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 10,
        from: "Bangkok",
        to: "Phuket",
        time: "1h 20m",
        image: "https://via.placeholder.com/150",
      },
    ],
    "North America": [
      {
        id: 11,
        from: "New York",
        to: "Toronto",
        time: "1h 50m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 12,
        from: "Los Angeles",
        to: "Vancouver",
        time: "2h 40m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 13,
        from: "Miami",
        to: "Cancun",
        time: "1h 40m",
        image: "https://via.placeholder.com/150",
      },
    ],
    Europe: [
      {
        id: 14,
        from: "London",
        to: "Paris",
        time: "1h 15m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 15,
        from: "Berlin",
        to: "Amsterdam",
        time: "1h 20m",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 16,
        from: "Madrid",
        to: "Rome",
        time: "2h 25m",
        image: "https://via.placeholder.com/150",
      },
    ],
  };

  const handleNavigate = (flight) => {
    navigate(`/flights-filter/${flight.id}`, {
      state: {
        flightData: flight,
      },
    });
  };

  return (
    <div className="bg-gray-100 py-10 font-booking">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-1">
          Fly worldwide with Booking.com
        </h2>
        <p className="text-gray-600 text-md mb-4">
          Flights from wherever you are to wherever you want to go
        </p>

        {/* Horizontally Scrollable Category Buttons */}
        <div className="flex overflow-x-auto scrollbar-hidden gap-2 mb-6 border-b-2 border-gray-200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-6 py-2 font-medium text-sm ${
                activeCategory === category
                  ? "text-[#003b94] border-b-2 border-[#003b94]"
                  : "text-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Scrollable 3x3 Flight Grid */}
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="grid grid-cols-3 gap-6 min-w-[900px]">
            {(flightData[activeCategory]?.slice(0, 9) || []).map((flight) => (
              <div
                key={flight.id}
                className=" p-4 rounded-lg flex items-start cursor-pointer"
                onClick={() => handleNavigate(flight)}
              >
                <img
                  src={flight.image}
                  alt={`${flight.from} to ${flight.to}`}
                  className="h-16 w-16 rounded object-cover mb-2"
                />
                <div className="flex flex-col p-2">
                  <p className="text-sm font-semibold">{`${flight.from} to ${flight.to}`}</p>
                  <p className="text-[14px] text-gray-600">
                    Shortest flight time: {flight.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlyWorldWide;
