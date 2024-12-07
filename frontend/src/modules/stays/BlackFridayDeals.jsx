import { useRef } from "react";

const BlackFridayDeals = () => {
  const scrollRef = useRef(null);

  // Example data for Black Friday Deals
  const dealsData = {
    hotels: [
      {
        id: 1,
        title: "Luxury Hotel Stay",
        location: "Paris, France",
        reviews: 4.7,
        originalPrice: 200,
        discountedPrice: 120,
        image: "https://via.placeholder.com/400x300?text=Luxury+Hotel+Stay",
      },
      {
        id: 2,
        title: "Beachfront Resort",
        location: "Maldives",
        reviews: 4.9,
        originalPrice: 300,
        discountedPrice: 150,
        image: "https://via.placeholder.com/400x300?text=Beachfront+Resort",
      },
      {
        id: 3,
        title: "Mountain Retreat",
        location: "Swiss Alps",
        reviews: 4.5,
        originalPrice: 250,
        discountedPrice: 175,
        image: "https://via.placeholder.com/400x300?text=Mountain+Retreat",
      },
      {
        id: 4,
        title: "Mountain Retreat",
        location: "Swiss Alps",
        reviews: 4.5,
        originalPrice: 250,
        discountedPrice: 175,
        image: "https://via.placeholder.com/400x300?text=Mountain+Retreat",
      },
      {
        id: 5,
        title: "Mountain Retreat",
        location: "Swiss Alps",
        reviews: 4.5,
        originalPrice: 250,
        discountedPrice: 175,
        image: "https://via.placeholder.com/400x300?text=Mountain+Retreat",
      },
      {
        id: 6,
        title: "Mountain Retreat",
        location: "Swiss Alps",
        reviews: 4.5,
        originalPrice: 250,
        discountedPrice: 175,
        image: "https://via.placeholder.com/400x300?text=Mountain+Retreat",
      },
    ],
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

  return (
    <div className="bg-gray-100 py-12 font-booking">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-">Black Friday Deals</h2>
        <p className="text-lg mb-6 text-gray-600">
          Best offers for your dream hotel stays
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

        {/* Display Deals Based on Selected Category */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hidden px-4 md:px-0"
        >
          {dealsData['hotels'].map((deal) => (
            <div
              key={deal.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all min-w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
            >
              {/* Image */}
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover"
              />
              {/* Hotel Info */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{deal.title}</h3>
                <p className="text-sm text-gray-600">{deal.location}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 text-sm">
                    {"★".repeat(Math.floor(deal.reviews))}
                    {"☆".repeat(5 - Math.floor(deal.reviews))}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">
                    ({deal.reviews} stars)
                  </span>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-lg font-semibold text-blue-600">
                    ${deal.discountedPrice}{" "}
                    <span className="line-through text-gray-500">
                      ${deal.originalPrice}
                    </span>
                  </span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlackFridayDeals;
