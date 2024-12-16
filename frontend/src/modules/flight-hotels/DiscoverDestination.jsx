import { useNavigate } from "react-router-dom";

const DiscoverDestination = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      image: "https://via.placeholder.com/400x300?text=New+York",
      location: "New York, USA",
      price: "$350",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/400x300?text=Maldives",
      location: "Maldives",
      price: "$1200",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/400x300?text=Swiss+Alps",
      location: "Swiss Alps",
      price: "$800",
    },
  ];

  const handleNavigate = (flightsHotels) => {
    navigate(`/flights-hotels-filter/${flightsHotels.id}`, {
      state: {
        flightsHotelsData: flightsHotels,
      },
    });
  };

  return (
    <div className="bg-gray-100 py-8 font-booking">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-start mb-8">
          Discover our hottest destinations
        </h2>
        <div className="grid gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
              onClick={() => handleNavigate(item)}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/3">
                <img
                  src={item.image}
                  alt={item.location}
                  className="w-full h-48 md:h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                />
                <p className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 text-sm font-semibold rounded">
                  {item.price}
                </p>
              </div>

              {/* Details Section */}
              <div className="flex flex-col justify-center px-4 py-4 md:w-2/3">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.location}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover the beauty and charm of {item.location}. Experience
                  unforgettable moments and create lasting memories.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverDestination;
