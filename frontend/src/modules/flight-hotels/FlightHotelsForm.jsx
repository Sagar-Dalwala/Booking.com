import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useLocation } from "react-router-dom";

const FlightHotelsForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill form data from navigation state if available
  const initialData = location.state?.formData || {};
  const [departure, setDeparture] = useState(initialData.departure || "");
  const [destination, setDestination] = useState(initialData.destination || "");
  const [startDate, setStartDate] = useState(initialData.startDate || null);
  const [endDate, setEndDate] = useState(initialData.endDate || null);

  const handleNavigate = () => {
    navigate(`/flights-hotels-filter/${"search"}`, {
      state: {
        formData: {
          departure,
          destination,
          startDate,
          endDate,
        },
      },
    });
  };

  return (
    <div className="bg-[#003b94] text-white font-booking">
      <div className="flex flex-col p-8 md:p-12 w-full max-w-screen-xl mx-auto font-booking">
        <h1 className="text-3xl md:text-5xl font-bookingBold">
          Your entire holiday in one click
        </h1>
        <h3 className="text-lg md:text-2xl mt-2 px-2 mb-6">
          Book Flight + Hotel in one click
        </h3>

        {/* Form */}
        <div className="bg-white px-6 py-6 shadow-lg rounded-lg max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
          {/* Departure Location */}
          <div className="col-span-1">
            <label
              htmlFor="pickup-location"
              className="block text-gray-600 mb-2"
            >
              Departure
            </label>
            <input
              id="departure-location"
              type="text"
              placeholder="City or Airport"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            />
          </div>

          {/* Destination Location */}
          <div className="col-span-2">
            <label
              htmlFor="destination-location"
              className="block text-gray-600 mb-2"
            >
              Destination
            </label>
            <input
              id="destination-location"
              type="text"
              placeholder="Where do you want to go?"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            />
          </div>

          {/* When ? Date */}
          <div className="col-span-2 hidden lg:block">
            <label htmlFor="pickup-date" className="block text-gray-600 mb-2">
              When ?
            </label>
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              monthsShown={2}
              placeholderText="Check-in Date -- Check-out Date"
              className="p-3 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#003b94] focus:border-transparent"
              calendarClassName="shadow-md rounded-lg bg-white text-black border border-gray-300"
              wrapperClassName="w-full"
            />
          </div>

          {/* For Mobile and Tablet */}
          <div className="lg:hidden col-span-2 gap-4 flex">
            {/* Check-in */}
            <div className="">
              <label htmlFor="pickup-date">
                <span className="block text-gray-600 mb-2">Check-in</span>
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Check-in Date"
                className="p-3 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#003b94] focus:border-transparent"
                calendarClassName="shadow-md rounded-lg bg-white text-black border border-gray-300"
                wrapperClassName="w-full"
              />
            </div>

            {/* Check-out */}
            <div className="">
              <label htmlFor="pickup-date">
                <span className="block text-gray-600 mb-2">Check-out</span>
              </label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                placeholderText="Check-out Date"
                className="p-3 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#003b94] focus:border-transparent"
                calendarClassName="shadow-md rounded-lg bg-white text-black border border-gray-300"
                wrapperClassName="w-full"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="col-span-1 mt-8 lg:mt-8">
            <button
              type="submit"
              onClick={handleNavigate}
              className="p-3 bg-[#003b94] text-white rounded-lg w-full hover:bg-[#002a6b] focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightHotelsForm;
