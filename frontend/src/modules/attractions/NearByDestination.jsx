import { useNavigate } from "react-router-dom";

const NearByDestination = () => {
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      location: "New York, USA",
      totalEvents: 169,
      image: "https://via.placeholder.com/400x300?text=New+York",
    },
    {
      id: 2,
      location: "Maldives",
      totalEvents: 188,
      image: "https://via.placeholder.com/400x300?text=Maldives",
    },
    {
      id: 3,
      location: "Swiss Alps",
      totalEvents: 120,
      image: "https://via.placeholder.com/400x300?text=Swiss+Alps",
    },
    {
      id: 4,
      location: "Paris, France",
      totalEvents: 150,
      image: "https://via.placeholder.com/400x300?text=Paris",
    },
    {
      id: 5,
      location: "London, UK",
      totalEvents: 90,
      image: "https://via.placeholder.com/400x300?text=London",
    },
    {
      id: 6,
      location: "Tokyo, Japan",
      totalEvents: 200,
      image: "https://via.placeholder.com/400x300?text=Tokyo",
    },
  ];

  const handleNavigate = (destination) => {
    navigate(`/attractions-filter/${destination.id}`, {
      state: {
        destinationData: destination,
      },
    });
  };

  return (
    <div className="bg-gray-100 py-10 font-booking">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Nearby Destinations
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-md"
              onClick={() => handleNavigate(item)}
            >
              <img
                src={item.image}
                alt={item.location}
                className="w-full h-auto object-cover rounded-md transform transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent text-white p-4">
                <h3 className="text-lg font-semibold">{item.location}</h3>
                <p className="text-sm">{item.totalEvents} events</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearByDestination;
