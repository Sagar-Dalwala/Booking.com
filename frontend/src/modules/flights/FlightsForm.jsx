/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormHeader from "../../components/form-header/FormHeader";
import { useNavigate } from "react-router-dom";
import DownArrow from "../../../public/svg/DownArrow";

const FlightsForm = ({ data }) => {
  const navigate = useNavigate();

  

  // Initialize state with default values or data from props
  const [dateRange, setDateRange] = useState([
    data?.startDate ? new Date(data.startDate) : null,
    data?.endDate ? new Date(data.endDate) : null,
  ]);
  const [adults, setAdults] = useState(data?.adults || 1);
  const [children, setChildren] = useState(data?.children || 0);
  const [isRoundTrip, setIsRoundTrip] = useState(data?.isRoundTrip || true);
  const [flightClass, setFlightClass] = useState(
    data?.flightClass || "economy"
  );
  const [destinationFrom, setDestinationFrom] = useState(
    data?.destinationFrom || ""
  );
  const [destinationTo, setDestinationTo] = useState(data?.destinationTo || "");
  const [isGuestsOpen, setIsGuestsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const [startDate, endDate] = dateRange;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleGuestsToggle = () => setIsGuestsOpen(!isGuestsOpen);
  const handleGuestsClose = () => setIsGuestsOpen(false);

  const handleNavigate = () => {
    navigate(`/flights-filter/${"search"}`, {
      state: {
        formData: {
          startDate,
          endDate,
          adults,
          children,
          isRoundTrip,
          flightClass,
          destinationFrom,
          destinationTo,
        },
      },
    });
  };

  return (
    <div className="bg-[#003b94] text-white">
      {/* Header */}
      {!data && (
        <FormHeader
          title={"Find your next flight"}
          description={"Search low prices on flights, hotels, and much more..."}
        />
      )}

      {/* Trip Type & Flight Class */}
      <div className="bg-white px-6 py-2 shadow-lg rounded-t-lg border border-b-2 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="md:col-span-4 flex items-center">
          <label htmlFor="roundtrip" className="text-gray-600 cursor-pointer">
            <input
              name="trip"
              id="roundtrip"
              type="radio"
              checked={isRoundTrip}
              onChange={() => setIsRoundTrip(true)}
              className="me-2"
            />
            Round Trip
          </label>
          <label
            htmlFor="singletrip"
            className="text-gray-600 cursor-pointer ms-4"
          >
            <input
              name="trip"
              id="singletrip"
              type="radio"
              checked={!isRoundTrip}
              onChange={() => setIsRoundTrip(false)}
              className="me-2"
            />
            One Way
          </label>
        </div>
        <div>
          <select
            id="flightclass"
            value={flightClass}
            onChange={(e) => setFlightClass(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          >
            <option value="economy">Economy</option>
            <option value="premiumEconomy">Premium Economy</option>
            <option value="business">Business</option>
            <option value="firstClass">First Class</option>
          </select>
        </div>
      </div>

      {/* Form */}
      <div className="bg-white px-6 py-6 shadow-lg rounded-b-lg max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Destination - From */}
        <div>
          <input
            id="destinationFrom"
            type="text"
            value={destinationFrom}
            onChange={(e) => setDestinationFrom(e.target.value)}
            placeholder="Where from?"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Destination - To */}
        <div>
          <input
            id="destinationTo"
            type="text"
            value={destinationTo}
            onChange={(e) => setDestinationTo(e.target.value)}
            placeholder="Where to?"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Dates */}
        <div className="relative">
          {isMobile ? (
            <>
              <DatePicker
                selected={startDate}
                onChange={(date) => setDateRange([date, endDate])}
                minDate={new Date()}
                placeholderText="Check-in Date"
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
              <DatePicker
                selected={endDate}
                onChange={(date) => setDateRange([startDate, date])}
                minDate={startDate || new Date()}
                placeholderText="Check-out Date"
                className="mt-2 p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
            </>
          ) : (
            <DatePicker
              selected={startDate}
              onChange={(update) => setDateRange(update)}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              minDate={new Date()}
              monthsShown={2}
              placeholderText="Check-in-Date -- Check-out-Date"
              className="p-3 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            />
          )}
        </div>

        {/* Guests & Rooms */}
        <div className="relative">
          <button
            className="p-3 border border-gray-300 rounded-lg flex justify-between items-center w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            onClick={handleGuestsToggle}
          >
            {`${adults} Adults, ${children} Children`}
            <DownArrow />
          </button>
          {isGuestsOpen && (
            <div
              className="absolute z-10 p-4 bg-white shadow-lg rounded-md mt-2 text-black w-full"
              onMouseLeave={handleGuestsClose}
            >
              <div className="mb-4">
                <label htmlFor="adults" className="text-sm">
                  Adults
                </label>
                <input
                  type="number"
                  id="adults"
                  value={adults}
                  min="1"
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="children" className="text-sm">
                  Children
                </label>
                <input
                  type="number"
                  id="children"
                  value={children}
                  min="0"
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  className="p-2 border border-gray-300 rounded-md w-full"
                />
              </div>
            </div>
          )}
        </div>

        {/* Search */}
        <div>
          <button
            type="submit"
            className="p-3 bg-[#003b94] text-white rounded-lg w-full hover:bg-[#002a6b] focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            onClick={handleNavigate}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightsForm;
