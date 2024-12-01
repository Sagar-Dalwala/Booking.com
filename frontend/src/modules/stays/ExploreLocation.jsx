import { useRef } from "react";

const ExploreLocation = () => {
  const locations = [
    {
      id: 1,
      city: "Paris, France",
      properties: 120,
      image: "https://via.placeholder.com/400x300?text=Paris",
    },
    {
      id: 2,
      city: "London, UK",
      properties: 98,
      image: "https://via.placeholder.com/400x300?text=London",
    },
    {
      id: 3,
      city: "New York, USA",
      properties: 150,
      image: "https://via.placeholder.com/400x300?text=New+York",
    },
    {
      id: 4,
      city: "Tokyo, Japan",
      properties: 110,
      image: "https://via.placeholder.com/400x300?text=Tokyo",
    },
    {
      id: 5,
      city: "Barcelona, Spain",
      properties: 95,
      image: "https://via.placeholder.com/400x300?text=Barcelona",
    },
    {
      id: 5,
      city: "Barcelona, Spain",
      properties: 95,
      image: "https://via.placeholder.com/400x300?text=Barcelona",
    },
    {
      id: 5,
      city: "Barcelona, Spain",
      properties: 95,
      image: "https://via.placeholder.com/400x300?text=Barcelona",
    },
  ];

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-gray-100 py-12 font-booking">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        {/* Section Title */}
        <h2 className="text-2xl font-bold">Explore Locations</h2>
        <p className="text-lg mb-6 text-gray-600">
          These popular destinations have a lot to offer
        </p>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-2/3 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
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
          className="absolute right-0 top-2/3 transform -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hidden md:block"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
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

        {/* Explore Locations Scrollable Grid */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hidden px-4 md:px-0"
        >
          {locations.map((location) => (
            <div
              key={location.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all min-w-[180px] md:w-[150px]"
            >
              {/* Image */}
              <img
                src={location.image}
                alt={location.city}
                className="w-full h-36 object-cover"
              />

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-1 text-white p-2 rounded">
                <h3 className="font-semibold text-xs">{location.city}</h3>
                <p className="text-xs">{location.properties} properties</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreLocation;
