import { useRef } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const StaysSearchHistory = () => {
  const cardRef = useRef(null);

  // Mock data for stays
  const stays = [
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
      id: 4,
      title: "Urban Apartment",
      location: "Tokyo, Japan",
      dates: "Apr 10 - Apr 15, 2024",
      price: "$500",
      image: "https://ui-avatars.com/api/?name=Alice",
    },
    {
      id: 4,
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

  const navigate = useNavigate();

  const handleViewClick = (id) => {
    navigate(`/stays/${id}`);
  };

  return (
    <div className="bg-gray-100 py-6 font-booking">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        >
          <svg
            className="h-5 w-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        >
          <svg
            className="h-5 w-5 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Scrollable Cards */}
        <div
          ref={cardRef}
          className="flex overflow-x-auto scrollbar-hidden gap-3 px-2 md:px-0"
        >
          {stays.map((stay) => (
      <div key={stay.id} className="bg-white shadow rounded-lg w-56 flex-shrink-0">
        <img
          src={stay.image}
          alt={stay.title}
          className="rounded-t-lg w-full h-28 object-cover"
        />
        <div className="p-3">
          <h3 className="font-medium text-sm truncate">{stay.title}</h3>
          <p className="text-xs text-gray-500 truncate">{stay.location}</p>
          <p className="text-xs text-gray-500">{stay.dates}</p>
          <p className="font-bold text-sm mt-1">{stay.price}</p>
          <Button
            variant="outlined"
            size="sm"
            className="mt-2 w-full text-[#003b94] border-[#003b94] text-xs"
            onClick={() => handleViewClick(stay.id)}
          >
            View
          </Button>
        </div>
      </div>
    ))}
        </div>
      </div>
    </div>
  );
};

export default StaysSearchHistory;
