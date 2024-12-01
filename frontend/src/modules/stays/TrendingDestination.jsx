
const TrendingDestination = () => {
  const destinations = [
    {
      id: 1,
      title: "Krakow, Poland",
      price: "$120 avg/night",
      image: "https://via.placeholder.com/400x300?text=Krakow",
    },
    {
      id: 2,
      title: "Warsaw, Poland",
      price: "$130 avg/night",
      image: "https://via.placeholder.com/400x300?text=Warsaw",
    },
    {
      id: 3,
      title: "Gdansk, Poland",
      price: "$110 avg/night",
      image: "https://via.placeholder.com/400x300?text=Gdansk",
    },
    {
      id: 4,
      title: "Zakopane, Poland",
      price: "$150 avg/night",
      image: "https://via.placeholder.com/400x300?text=Zakopane",
    },
    {
      id: 5,
      title: "Poznan, Poland",
      price: "$100 avg/night",
      image: "https://via.placeholder.com/400x300?text=Poznan",
    },
  ];

  return (
    <div className="bg-gray-100 py-12 font-booking">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold">Trending Destinations</h2>
        <p className="text-lg mb-8 text-gray-600">
          Travelers searching for Poland also booked these
        </p>

        {/* Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First Row with 2 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 col-span-full">
            {destinations.slice(0, 2).map((destination) => (
              <div
                key={destination.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Image with Location and Price Overlay */}
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded">
                  <h3 className="font-semibold text-sm">{destination.title}</h3>
                  <p className="text-xs">{destination.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row with 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 col-span-full">
            {destinations.slice(2).map((destination) => (
              <div
                key={destination.id}
                className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Image with Location and Price Overlay */}
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded">
                  <h3 className="font-semibold text-sm">{destination.title}</h3>
                  <p className="text-xs">{destination.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingDestination;
