import  { useState } from "react";

const Reviews = () => {
  // Mock Data for Reviews
  const [reviews, setReviews] = useState([
    {
      id: 1,
      propertyName: "Beachfront Resort",
      location: "Maldives",
      reviewText: "Amazing experience, loved the service and views!",
      rating: 5,
      date: "2024-12-01",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      propertyName: "Cozy Mountain Cabin",
      location: "Aspen, Colorado",
      reviewText: "Great stay, but the weather was too cold for me.",
      rating: 4,
      date: "2024-11-25",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      propertyName: "Luxury City Hotel",
      location: "New York, USA",
      reviewText: "Perfect location, excellent hospitality.",
      rating: 5,
      date: "2024-11-10",
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Handle Delete Review
  const handleDelete = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 rounded-md shadow-md max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold">Your Reviews</h1>
        <p>{`View and manage your reviews for the trips or bookings you've taken.`}</p>
      </div>

      {/* Content */}
      <div className="mt-6 max-w-5xl mx-auto">
        {reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-md shadow-md hover:shadow-lg transition p-4 flex flex-col sm:flex-row"
              >
                {/* Image Section */}
                <img
                  src={review.image}
                  alt={review.propertyName}
                  className="w-full sm:w-40 h-32 object-cover rounded-md"
                />

                {/* Details Section */}
                <div className="flex-1 ml-0 sm:ml-6 mt-4 sm:mt-0">
                  <h3 className="text-lg font-semibold">{review.propertyName}</h3>
                  <p className="text-gray-600">{review.location}</p>
                  <p className="text-gray-500 mt-2">{review.reviewText}</p>
                  <p className="text-gray-500 mt-1">{`Rating: ${review.rating} ⭐`}</p>
                  <p className="text-gray-400 text-sm">{`Reviewed on: ${review.date}`}</p>

                  {/* Actions */}
                  <div className="mt-4 flex space-x-4">
                    <button
                      className="text-blue-600 hover:underline"
                      onClick={() => alert(`Editing review for ${review.propertyName}`)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline"
                      onClick={() => handleDelete(review.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white rounded-md shadow-md py-8 px-6">
            <h2 className="text-lg font-semibold mb-4">No reviews found</h2>
            <p className="text-gray-600">
              Looks like you haven’t reviewed any trips or bookings yet. Share
              your experience with others by leaving reviews!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
