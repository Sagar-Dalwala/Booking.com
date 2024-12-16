import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PopularDestination = () => {
  const navigate = useNavigate();

  // State for active category
  const [activeCategory, setActiveCategory] = useState("Cities Worldwide");

  const carData = {
    "Cities Worldwide": [
      {
        id: 1,
        title: "Flight to New York",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
        totalCarHires: 10,
        averagePrice: "$50",
      },
      {
        id: 2,
        title: "Flight to Paris",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
        totalCarHires: 8,
        averagePrice: "$60",
      },
      {
        id: 3,
        title: "Flight to London",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
        totalCarHires: 12,
        averagePrice: "$70",
      },
      {
        id: 999,
        title: "Flight to London",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
        totalCarHires: 12,
        averagePrice: "$70",
      },
      {
        id: 998,
        title: "Flight to London",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
        totalCarHires: 12,
        averagePrice: "$70",
      },
      {
        id: 997,
        title: "Flight to London",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "2 days",
        tripType: "round-trip",
        totalCarHires: 12,
        averagePrice: "$70",
      },
    ],
    "Airport Worldwide": [
      {
        id: 4,
        title: "Flight to Los Angeles",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "1 day",
        tripType: "one-way",
        totalCarHires: 15,
        averagePrice: "$40",
      },
      {
        id: 5,
        title: "Flight to Chicago",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "1 day",
        tripType: "one-way",
        totalCarHires: 10,
        averagePrice: "$45",
      },
      {
        id: 6,
        title: "Flight to Miami",
        image: "https://via.placeholder.com/400x300?text=Flight",
        date: "2023-09-01",
        duration: "1 day",
        tripType: "one-way",
        totalCarHires: 18,
        averagePrice: "$55",
      },
    ],
  };

  const handleNavigate = (car) => {
    navigate(`/car-rentals-filter/${car.id}`, {
      state: {
        carData: car,
      },
    });
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="relative max-w-screen-xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-1">
          Popular car hire destinations
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Explore more options to hire a car for cheap
        </p>
        {/* Category Buttons */}
        <div className="flex gap-4 mb-6 border-b-2 border-gray-200">
          {["Cities Worldwide", "Airport Worldwide"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium ${
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
          <div className="grid grid-cols-3 min-w-[900px]">
            {(carData[activeCategory]?.slice(0, 9) || []).map((car) => (
              <div
                key={car.id}
                className=" p-2 rounded-lg flex items-start cursor-pointer"
                onClick={() => handleNavigate(car)}
              >
                <img
                  src={car.image}
                  alt={`${car.from} to ${car.to}`}
                  className="h-16 w-16 rounded object-cover mb-2"
                />
                <div className="flex flex-col p-2">
                  <p className="text-sm font-semibold">{car.title}</p>
                  <p className="text-[14px] text-gray-600">
                    {car.totalCarHires} car hire locations
                  </p>
                  <p className="text-[14px] text-gray-600">
                    Average price of {car.averagePrice} per day
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

export default PopularDestination;
