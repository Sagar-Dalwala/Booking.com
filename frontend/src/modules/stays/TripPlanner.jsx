import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LeftScrollButton from "../../components/button/LeftScrollButton";
import RightScrollButton from "../../components/button/RightScrollButton";

// SVG Icons for each vibe
const VibeIcons = {
  romance: "./trip-planner/hearts.svg",
  city: "./trip-planner/city.svg",
  beach: "./trip-planner/beach.svg",
  relax: "./trip-planner/lotus.svg",
  outdoors: "./trip-planner/motorbike.svg",
  ski: "./trip-planner/ski.svg",
};

const TripPlanner = () => {
  const navigate = useNavigate();

  // Define trip vibes with respective data for each
  const tripData = {
    romance: [
      {
        id: 1,
        city: "Paris, France",
        image: "https://via.placeholder.com/400x300?text=Paris",
      },
      {
        id: 2,
        city: "Venice, Italy",
        image: "https://via.placeholder.com/400x300?text=Venice",
      },
      {
        id: 3,
        city: "Santorini, Greece",
        image: "https://via.placeholder.com/400x300?text=Santorini",
      },
    ],
    city: [
      {
        id: 1,
        city: "New York, USA",
        image: "https://via.placeholder.com/400x300?text=New+York",
      },
      {
        id: 2,
        city: "London, UK",
        image: "https://via.placeholder.com/400x300?text=London",
      },
      {
        id: 3,
        city: "Tokyo, Japan",
        image: "https://via.placeholder.com/400x300?text=Tokyo",
      },
    ],
    beach: [
      {
        id: 1,
        city: "Maldives",
        image: "https://via.placeholder.com/400x300?text=Maldives",
      },
      {
        id: 2,
        city: "Bora Bora, French Polynesia",
        image: "https://via.placeholder.com/400x300?text=Bora+Bora",
      },
      {
        id: 3,
        city: "Phuket, Thailand",
        image: "https://via.placeholder.com/400x300?text=Phuket",
      },
    ],
    relax: [
      {
        id: 1,
        city: "Bali, Indonesia",
        image: "https://via.placeholder.com/400x300?text=Bali",
      },
      {
        id: 2,
        city: "Kyoto, Japan",
        image: "https://via.placeholder.com/400x300?text=Kyoto",
      },
      {
        id: 3,
        city: "Sedona, Arizona",
        image: "https://via.placeholder.com/400x300?text=Sedona",
      },
    ],
    outdoors: [
      {
        id: 1,
        city: "Rocky Mountains, USA",
        image: "https://via.placeholder.com/400x300?text=Rocky+Mountains",
      },
      {
        id: 2,
        city: "Banff, Canada",
        image: "https://via.placeholder.com/400x300?text=Banff",
      },
      {
        id: 3,
        city: "Swiss Alps, Switzerland",
        image: "https://via.placeholder.com/400x300?text=Swiss+Alps",
      },
    ],
    ski: [
      {
        id: 1,
        city: "Aspen, Colorado",
        image: "https://via.placeholder.com/400x300?text=Aspen",
      },
      {
        id: 2,
        city: "Zermatt, Switzerland",
        image: "https://via.placeholder.com/400x300?text=Zermatt",
      },
      {
        id: 3,
        city: "Whistler, Canada",
        image: "https://via.placeholder.com/400x300?text=Whistler",
      },
    ],
  };

  // State for managing selected vibe
  const [selectedVibe, setSelectedVibe] = useState("romance");

  // Ref for the card container
  const scrollRef = useRef(null);

  // Function to handle button clicks for selecting vibe
  const handleVibeClick = (vibe) => {
    setSelectedVibe(vibe);
  };

  // Scroll function for forward and back buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const handleLocationClick = (location) => {
    navigate(`/stays-filter/${location.id}`, { state: location });
  };

  return (
    <div className="bg-gray-100 py-12 font-booking">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-1">Quick and easy trip planner</h2>
        <p className="text-lg mb-3 text-gray-600">
          Pick a vibe and explore the top destinations in Poland
        </p>

        {/* Buttons for Trip Vibes */}
        <div className="flex gap-4 mb-8 justify-center sm:justify-start">
          {["romance", "city", "beach", "relax", "outdoors", "ski"].map(
            (vibe) => (
              <button
                key={vibe}
                onClick={() => handleVibeClick(vibe)}
                className="items-center gap-2 text-black px-4 py-2 rounded-full hover:bg-gray-300 flex-shrink-0 w-full sm:w-auto text-center hidden sm:block"
              >
                <div className="md:flex md:items-center md:gap-2 ">
                  <img src={VibeIcons[vibe]} alt={vibe} className="w-6 h-6" />
                  <span className="text-sm">
                    {vibe.charAt(0).toUpperCase() + vibe.slice(1)}
                  </span>
                </div>
              </button>
            )
          )}
        </div>

        {/* Icons for Trip Vibes on Mobile */}
        <div className="flex gap-4 mb-8 justify-center sm:hidden">
          {["romance", "city", "beach", "relax", "outdoors", "ski"].map(
            (vibe) => (
              <button
                key={vibe}
                onClick={() => handleVibeClick(vibe)}
                className="p-2 rounded-full text-white bg-gray-300 shadow-md"
              >
                <img src={VibeIcons[vibe]} alt={vibe} className="w-6 h-6" />
              </button>
            )
          )}
        </div>

        {/* Scroll Buttons */}
        <LeftScrollButton
          scroll={scroll}
          className="absolute left-0 top-3/4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        />
        <RightScrollButton
          scroll={scroll}
          className="absolute right-0 top-3/4 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        />

        {/* Display Cards Based on Selected Vibe */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hidden px-4 md:px-0"
        >
          {tripData[selectedVibe].map((location) => (
            <div
              key={location.id}
              onClick={() => handleLocationClick(location)}
              className="relative bg-white cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all min-w-[180px] md:w-[150px]"
            >
              {/* Image */}
              <img
                src={location.image}
                alt={location.city}
                className="w-full h-36 object-cover"
              />
              {/* Bottom Info */}
              <div className="p-2 bg-black bg-opacity-25 absolute bottom-0 w-full text-white text-center">
                <p className="text-sm">{location.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripPlanner;
