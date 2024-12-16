import { Drawer } from "@material-tailwind/react";

/* eslint-disable react/prop-types */
const AllReviewsDrawer = ({ isOpen, onClose }) => {
  const reviews = [
    { user: "John Doe", rating: 9, comment: "Excellent stay!" },
    { user: "Jane Smith", rating: 7, comment: "Good, but could be better." },
    { user: "Emily Brown", rating: 8, comment: "Very comfortable and clean." },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 z-50"
          onClick={onClose}
        />
      )}
    <Drawer
      open={isOpen}
      onClose={onClose}
      placement="right"
      className="w-full max-w-md bg-white p-4"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">All Reviews</h2>
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 border rounded-md shadow-sm">
            <p className="text-sm text-gray-800 font-bold">{review.user}</p>
            <p className="text-sm text-gray-600">Rating: {review.rating}/10</p>
            <p className="text-sm text-gray-700 mt-2">{review.comment}</p>
          </div>
        ))}
      </div>
    </Drawer>
    </>
  );
};

export default AllReviewsDrawer;
