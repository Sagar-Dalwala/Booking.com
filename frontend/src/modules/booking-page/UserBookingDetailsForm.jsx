import ArrivalTimeCard from "./ArrivalTimeCard";
import { FaAngleRight } from "react-icons/fa";

const UserBookingDetailsForm = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-screen-xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Enter Your Details
        </h2>

        <form className="space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                value="Sagar"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                value="Dalwala"
                className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              value="sagardalwala.vision@gmail.com"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <p className="mt-2 text-gray-500 text-sm">
              Confirmation email goes to this address
            </p>
          </div>

          {/* Country/Region */}
          <div>
            <label
              htmlFor="country"
              className="block text-gray-700 font-medium"
            >
              Country/Region*
            </label>
            <input
              type="text"
              id="country"
              value="India"
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-medium"
            >
              Phone Number*
            </label>
            <div className="flex space-x-2">
              <select
                id="countryCode"
                className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none"
              >
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="text"
                id="phoneNumber"
                placeholder="Enter phone number"
                className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="mt-2 text-gray-500 text-sm">
              Needed by the property to validate your booking
            </p>
          </div>

          {/* Free Paperless Confirmation */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="paperlessConfirmation"
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="paperlessConfirmation" className="text-gray-700">
              {`Yes, I'd like free paperless confirmation (recommended)`}
            </label>
          </div>
          <p className="mt-2 text-gray-500 text-sm">
            {`We'll text you a link to download our app`}
          </p>

          {/* Account Update */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="updateAccount"
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="updateAccount" className="text-gray-700">
              Update my account to include these new details
            </label>
          </div>

          {/* Who Are You Booking For */}
          <div>
            <p className="font-medium text-gray-700">
              Who are you booking for? (optional)
            </p>
            <div className="space-y-4 mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="mainGuest"
                  name="bookingFor"
                  defaultChecked
                  className="h-4 w-4 border-gray-300 "
                />
                <label
                  htmlFor="mainGuest"
                  className="text-gray-700 cursor-pointer"
                >
                  I am the main guest
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="someoneElse"
                  name="bookingFor"
                  className="h-4 w-4 border-gray-300"
                />
                <label
                  htmlFor="someoneElse"
                  className="text-gray-700 cursor-pointer"
                >
                  Booking is for someone else
                </label>
              </div>
            </div>
          </div>

          {/* Are You Travelling for Work */}
          {/* <div>
            <p className="font-medium text-gray-700">
              Are you travelling for work? (optional)
            </p>
            <div className="space-x-4 mt-2 ">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="travellingForWorkYes"
                  name="travellingForWork"
                  className="h-4 w-4 border-gray-300 ms-4"
                />
                <label htmlFor="travellingForWorkYes" className="text-gray-700">
                  Yes
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="travellingForWorkNo"
                  name="travellingForWork"
                  className="h-4 w-4 border-gray-300"
                />
                <label htmlFor="travellingForWorkNo" className="text-gray-700">
                  No
                </label>
              </div>
            </div>
          </div> */}
        </form>
      </div>
      <ArrivalTimeCard />
      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="w-52 py-3 px-4 mt-6 bg-blue-800 text-white font-bookingBold rounded-md hover:bg-blue-700 focus:outline-none
          flex items-center justify-center space-x-2"
        >
          Next: Final details
          <FaAngleRight className="text-lg h-5 w-5 ms-2" />
        </button>
      </div>
    </div>
  );
};

export default UserBookingDetailsForm;
