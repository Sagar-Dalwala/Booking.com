import { useState } from "react";
import { Button } from "@material-tailwind/react";
import AllReviewsDrawer from "../../components/drawer/AllReviewDrawer";
import WriteReviewModal from "../../components/modal/WriteReviewModal";
import GuestReviewCard from "../../components/card/GuestReviewCard";

/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const PropertyReviews = ({ data }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  console.log("Drawer State:", isDrawerOpen);

  const openDrawer = () => {
    if (!isDrawerOpen) setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    if (isDrawerOpen) setIsDrawerOpen(false);
  };

  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

  const guestReview = `This is an automated summary based on 58
            reviews from the past 12 months. Guests highlighted the
            accommodations excellent location near Lal Chowk and Dal Lake. The
            staff received praise for their friendliness and helpfulness.
            Breakfast was appreciated for its quality. Room comfort and
            cleanliness received mixed reviews, with some guests noting the need
            for improvements. Was this guest review summary helpful? Yes / No`;

  return (
    <div>
      <hr className="border-t border-gray-300 my-16" />
      {/* Header Section */}
      <div className="bg-gray-100 py-4 lg:py-8 lg:mt-14 flex justify-between">
        <h2 className="text-2xl font-bold mb-4">Guest Reviews </h2>
        <div>
          <Button
            variant="text"
            className="mx-auto border border-blue-800 text-blue-800 hover:text-white hover:bg-blue-800 transition-all duration-500"
            onClick={toggleDialog}
          >
            Write a review
          </Button>
        </div>
      </div>

      {/* Review Score Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="max-w-screen-sm">
          <div className="flex flex-col px-2">
            <p className="text-lg font-bookingBold">Review Score</p>
            <div className="flex gap-2 py-2">
              <p className="text-lg text-gray-700 ">8.1</p>
              <p className="text-lg text-gray-700">Very Good</p>
              <p className="text-lg text-gray-700">: 484 reviews</p>
            </div>
          </div>
          <div className="px-2">
            <button
              className="text-blue-800"
              onClick={isDrawerOpen ? closeDrawer : openDrawer}
            >
              {isDrawerOpen ? "Close all reviews" : "Read all reviews"}
            </button>
          </div>
        </div>

        <div className="max-w-screen-sm">
          <p className="text-gray-700 font-bookingBold mb-2">
            Guest review summary
          </p>
          <p className="text-gray-600">{guestReview}</p>
        </div>
      </div>

      {/* Review Overview Section */}

      <div className="mt-6">
        <p className="text-gray-700 font-bookingBold mb-4">Categories:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { label: "Staff", score: 8.8 },
            { label: "Facilities", score: 7.3 },
            { label: "Cleanliness", score: 8.2 },
            { label: "Comfort", score: 7.5 },
            { label: "Value for money", score: 7.8 },
            { label: "Free Wifi", score: 8.5 },
            { label: "Location", score: 9.0 },
            { label: "Food", score: 8.0 },
            { label: "Service", score: 8.3 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-gray-100 p-4 rounded-md shadow-sm"
            >
              <p className="text-sm font-medium text-gray-700 w-full sm:w-1/3">
                {item.label}
              </p>
              <div className="flex-1 mx-2 bg-gray-200 h-2 rounded relative w-full sm:w-2/3">
                <div
                  className={`absolute h-2 rounded ${
                    item.score > 7.5
                      ? "bg-blue-600"
                      : item.score > 6
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${item.score * 10}%` }}
                />
              </div>
              <p className="text-sm font-semibold text-gray-700 mt-2 sm:mt-0 sm:ml-2">
                {item.score}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Reviews Section */}
      <div className="mt-6">
        {/* {guestReviews.map((review, index) => (
          <GuestReviewCard key={index} review={review} />
        ))} */}
        <GuestReviewCard />
      </div>

      {/* Drawer for All Reviews */}
      <AllReviewsDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      {/* Dialog for Writing a Review */}
      <WriteReviewModal isOpen={isDialogOpen} onClose={toggleDialog} />
    </div>
  );
};

export default PropertyReviews;
