import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LeftScrollButton from "../../components/button/LeftScrollButton";
import RightScrollButton from "../../components/button/RightScrollButton";

const FlightsSearchHistory = () => {
  const navigate = useNavigate();

  const cardRef = useRef(null);

  // Mock data for stays
  const flights = [
    {
      id: 1,
      title: "Luxury Hotel",
      location: "New York, USA",
      dates: "Jan 12 - Jan 15, 2024",
      price: "$350",
      image: "https://ui-avatars.com/api/?name=John",
    },
    {
      id: 2,
      title: "Beachside Resort",
      location: "Maldives",
      dates: "Feb 20 - Feb 25, 2024",
      price: "$1200",
      image: "https://ui-avatars.com/api/?name=Jane",
    },
    {
      id: 3,
      title: "Mountain Retreat",
      location: "Swiss Alps",
      dates: "Mar 5 - Mar 10, 2024",
      price: "$800",
      image: "https://ui-avatars.com/api/?name=Bob",
    },
    {
      id: 4,
      title: "Urban Apartment",
      location: "Tokyo, Japan",
      dates: "Apr 10 - Apr 15, 2024",
      price: "$500",
      image: "https://ui-avatars.com/api/?name=Alice",
    },
    {
      id: 5,
      title: "Urban Apartment",
      location: "Tokyo, Japan",
      dates: "Apr 10 - Apr 15, 2024",
      price: "$500",
      image: "https://ui-avatars.com/api/?name=Alice",
    },
    {
      id: 6,
      title: "Urban Apartment",
      location: "Tokyo, Japan",
      dates: "Apr 10 - Apr 15, 2024",
      price: "$500",
      image: "https://ui-avatars.com/api/?name=Alice",
    },
  ];

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
    <div className="bg-gray-100 py-12 font-booking">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Continue Where You Left Off</h2>
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
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white shadow rounded-lg w-56 flex-shrink-0"
              onClick={() => handleNavigate(flight)}
            >
              <img
                src={flight.image}
                alt={flight.title}
                className="rounded-t-lg w-full h-28 object-cover"
              />
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{flight.title}</h3>
                <p className="text-xs text-gray-500 truncate">
                  {flight.location}
                </p>
                <p className="text-xs text-gray-500">{flight.dates}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightsSearchHistory;
