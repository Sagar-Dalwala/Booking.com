import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftScrollButton from "../../components/button/LeftScrollButton";
import RightScrollButton from "../../components/button/RightScrollButton";

const PopularFlights = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  // State for active category
  const [activeCategory, setActiveCategory] = useState("International");

  const flightsData = {
    International: [
      {
        id: 1,
        title: "Flight to New York",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
      },
      {
        id: 2,
        title: "Flight to Paris",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
      },
      {
        id: 3,
        title: "Flight to New York",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
      },
      {
        id: 4,
        title: "Flight to Paris",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
      },
    ],
    Domestic: [
      {
        id: 9,
        title: "Flight to Los Angeles",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "1 day",
        tripType: "one-way",
      },
      {
        id: 10,
        title: "Flight to Chicago",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "1 day",
        tripType: "one-way",
      },
      {
        id: 5,
        title: "Flight to Los Angeles",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "1 day",
        tripType: "one-way",
      },
      {
        id: 6,
        title: "Flight to Chicago",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "1 day",
        tripType: "one-way",
      },
    ],
  };

  const popularFlights = flightsData[activeCategory];

  // Scroll function
  const scroll = (direction) => {
    if (direction === "left") {
      cardRef.current.scrollBy({
        left: -240,
        behavior: "smooth",
      });
    } else {
      cardRef.current.scrollBy({
        left: 240,
        behavior: "smooth",
      });
    }
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
        <h2 className="text-xl font-bold mb-1">Popular flights near you</h2>
        <p className="text-gray-600 text-sm mb-4">
          Find deals on domestic and international flights
        </p>
        {/* Category Buttons */}
        <div className="md:flex gap-1 mb-4 md:gap-4 border-b-2 md:mb-6 border-gray-200">
          {["International", "Domestic"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`md:px-6 md:py-2 md:font-medium px-4 py-1 text-sm ${
                activeCategory === category
                  ? "text-[#003b94] border-b-2 border-[#003b94]"
                  : "text-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Scroll Buttons */}
        <LeftScrollButton
          scroll={scroll}
          className="absolute left-0 top-[60%] transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        />
        <RightScrollButton
          scroll={scroll}
          className="absolute right-0 top-[60%] transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        />
        {/* Scrollable Cards */}
        <div
          ref={cardRef}
          className="flex overflow-x-auto scrollbar-hidden gap-3 px-2 md:px-0 cursor-pointer"
        >
          <div className="flex gap-4 px-4 md:px-0">
            {popularFlights.map((flight) => (
              <div
                className="bg-gray-100 rounded-lg w-72 flex-shrink-0"
                key={flight.id}
                onClick={() => handleNavigate(flight)}
              >
                <img
                  src={flight.image}
                  alt="Flight"
                  className="rounded-lg w-full h-40 object-cover"
                />
                <div className="pt-2 ps-2">
                  <h3 className="font-semibold text-lg">{flight.title}</h3>
                </div>
                <div className="flex gap-4 px-2 justify-between">
                  <p className="text-sm text-gray-600">{flight.date}</p>
                  <p className="text-sm text-gray-600">{flight.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularFlights;
