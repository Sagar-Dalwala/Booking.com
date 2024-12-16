import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExploreDestination = () => {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState("Europe");

  const categories = [
    "Europe",
    "North America",
    "Asia",
    "Africa",
    "Oceania",
    "Middle East",
    "Caribbean",
    "South America",
    "Central America",
  ];

  const data = {
    Europe: [
      {
        id: 1,
        destination: "Mumbai to Panaji",
        events: "1h 30m",
        image: "https://via.placeholder.com/400x300?text=Europe+1",
      },
      {
        id: 2,
        destination: "Tokyo to Seoul",
        events: "2h 15m",
        image: "https://via.placeholder.com/400x300?text=Europe+2",
      },
      {
        id: 3,
        destination: "Bangkok to Singapore",
        events: "2h 5m",
        image: "https://via.placeholder.com/400x300?text=Europe+3",
      },
      {
        id: 34,
        destination: "Bangkok to Singapore",
        events: "2h 5m",
        image: "https://via.placeholder.com/400x300?text=Europe+3",
      },
      {
        id: 35,
        destination: "Bangkok to Singapore",
        events: "2h 5m",
        image: "https://via.placeholder.com/400x300?text=Europe+3",
      },
    ],
    Asia: [
      {
        id: 4,
        destination: "London to Paris",
        events: "1h 15m",
        image: "https://via.placeholder.com/400x300?text=Asia+1",
      },
      {
        id: 5,
        destination: "Berlin to Amsterdam",
        events: "1h 20m",
        image: "https://via.placeholder.com/400x300?text=Asia+2",
      },
    ],
    Africa: [
      {
        id: 6,
        destination: "Cape Town to Johannesburg",
        events: "1h 30m",
        image: "https://via.placeholder.com/400x300?text=Africa+1",
      },
      {
        id: 7,
        destination: "Lagos to Kinshasa",
        events: "1h 40m",
        image: "https://via.placeholder.com/400x300?text=Africa+2",
      },
    ],
  };

  const handleNavigate = (destination) => {
    navigate(`/attractions-filter/${destination.id}`, {
      state: {
        destinationData: destination,
      },
    });
  };

  return (
    <div className="bg-gray-100 py-8 font-booking">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Explore More Destinations</h2>
        <p className="text-lg text-gray-600 mb-6">
          Find things to do in cities around the world
        </p>

        {/* Category Buttons */}
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

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data[activeCategory]?.map((item) => (
            <div
              key={item.id}
              className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleNavigate(item)}
            >
              {/* Destination Image */}
              <img
                src={item.image}
                alt={item.destination}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
              />
              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 text-white p-4 w-full">
                <h3 className="text-md font-semibold">{item.destination}</h3>
                <p className="text-sm">{item.events}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreDestination;
