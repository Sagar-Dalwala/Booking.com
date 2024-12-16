import { useRef } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LeftScrollButton from "../../components/button/LeftScrollButton";
import RightScrollButton from "../../components/button/RightScrollButton";

const StaysSearchHistory = () => {
  const navigate = useNavigate();

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

  const handleOnClick = (stay) => {
    navigate(`/stays-details/${stay.id}`, { state: stay });
  };

  return (
    <div className="bg-gray-100 py-6 font-booking">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">Recent Searches</h2>
        {/* Scroll Buttons */}

        <LeftScrollButton
          scroll={scroll}
          className={
            "absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
          }
        />

        <RightScrollButton 
        scroll={scroll}
        className={
          "absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        }
        />

        {/* Scrollable Cards */}
        <div
          ref={cardRef}
          className="flex overflow-x-auto scrollbar-hidden gap-3 px-2 md:px-0"
        >
          {stays.map((stay) => (
            <div
              key={stay.id}
              className="bg-white shadow rounded-lg w-56 flex-shrink-0"
            >
              <img
                src={stay.image}
                alt={stay.title}
                className="rounded-t-lg w-full h-28 object-cover"
              />
              <div className="p-3">
                <h3 className="font-medium text-sm truncate">{stay.title}</h3>
                <p className="text-xs text-gray-500 truncate">
                  {stay.location}
                </p>
                <p className="text-xs text-gray-500">{stay.dates}</p>
                <p className="font-bold text-sm mt-1">{stay.price}</p>
                <Button
                  variant="outlined"
                  size="sm"
                  className="mt-2 w-full cursor-pointer text-[#003b94] border-[#003b94] text-xs"
                  onClick={() => handleOnClick(stay)}
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
