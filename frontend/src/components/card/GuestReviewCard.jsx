import { useRef } from "react";

const GuestReviewCard = () => {
  const scrollContainer = useRef(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const reviews = [
    {
      name: "John Doe",
      review:
        "Amazing place! The staff was super friendly, and the location was perfect. Highly recommend!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      review: "The cleanliness could be better, but overall, a good experience.",
      rating: 4,
    },
    {
      name: "Mike Johnson",
      review:
        "Great value for money. Breakfast was good, and the room was comfortable.",
      rating: 4.5,
    },
    {
      name: "Sarah Lee",
      review: "Loved the views and the proximity to local attractions.",
      rating: 5,
    },
    {
      name: "Chris Evans",
      review: "Decent experience, but the WiFi could be faster.",
      rating: 3.8,
    },
  ];

  return (
    <div className="relative">
        <h2 className="text-lg font-bookingBold text-gray-700 mb-4">
        Guests who stayed here loved
        </h2>
      {/* Scroll Buttons */}
      <button
        className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md z-10"
        onClick={scrollLeft}
      >
        &#8592;
      </button>
      <button
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full shadow-md z-10"
        onClick={scrollRight}
      >
        &#8594;
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollContainer}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hidden px-4 py-6"
      >
        {reviews.map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 md:w-72 bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <p className="text-lg font-semibold text-gray-700">{review.name}</p>
            <p className="text-sm text-gray-600 mt-2">{review.review}</p>
            <p className="text-yellow-500 font-bold mt-4">
              {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
              {review.rating % 1 !== 0 && <span>&#9734;</span>} {/* Half Star */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuestReviewCard;
