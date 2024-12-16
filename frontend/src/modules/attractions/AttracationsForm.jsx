import DatePicker from "react-datepicker";
import FormHeader from "../../components/form-header/FormHeader";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AttractionsForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill form data from navigation state if available
  const initialData = location.state?.formData || {};
  const [destination, setDestination] = useState(initialData.destination || "");
  const [dateRange, setDateRange] = useState([
    initialData.startDate || null,
    initialData.endDate || null,
  ]);
  const [startDate, endDate] = dateRange;

  const handleNavigate = () => {
    navigate(`/attractions-filter/${"search"}`, {
      state: {
        formData: {
          destination,
          startDate,
          endDate,
        },
      },
    });
  };

  return (
    <div className="bg-[#003b94] text-white">
      {/* Header */}
      <FormHeader
        title={"Up to 20% off attractions"}
        description={
          "Make exploring easy with discounts on top global attractions"
        }
      />

      {/* Form */}
      <div className="bg-white px-6 py-6 shadow-lg rounded-lg max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Destination */}
        <div>
          <label
            htmlFor="destination"
            className="block text-gray-600 mb-2"
          >
            Where are you going?
          </label>
          <input
            id="destination"
            type="text"
            placeholder="Enter your destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Date Range */}
        <div>
          <label
            htmlFor="date-range"
            className="block text-gray-600 mb-2"
          >
            Select your dates
          </label>
          <DatePicker
            selected={startDate}
            onChange={(update) => setDateRange(update)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={new Date()}
            monthsShown={2}
            placeholderText="Select your dates"
            className="p-3 border border-gray-300 text-black rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            calendarClassName="shadow-lg bg-white text-black border border-gray-300 rounded-lg"
            wrapperClassName="w-full"
          />
        </div>

        {/* Search Button */}
        <div className="col-span-1 mt-8">
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
  );
};

export default AttractionsForm;
