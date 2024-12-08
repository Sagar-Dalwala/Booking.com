import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormHeader from "../../components/form-header/FormHeader";
import { useNavigate, useLocation } from "react-router-dom";

const CarRentalForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill form data from navigation state if available
  const initialData = location.state?.formData || {};
  const [dropOffDifferent, setDropOffDifferent] = useState(
    initialData.dropOffDifferent || false
  );
  const [driverAgeEnabled, setDriverAgeEnabled] = useState(
    initialData.driverAgeEnabled ?? true
  );
  const [pickupLocation, setPickupLocation] = useState(
    initialData.pickupLocation || ""
  );
  const [dropoffLocation, setDropoffLocation] = useState(
    initialData.dropoffLocation || ""
  );
  const [pickupDate, setPickupDate] = useState(initialData.pickupDate || null);
  const [dropoffDate, setDropoffDate] = useState(
    initialData.dropoffDate || null
  );
  const [driverAge, setDriverAge] = useState(initialData.driverAge || "");

  const handleNavigate = () => {
    navigate(`/car-rentals-filter/${"search"}`, {
      state: {
        formData: {
          dropOffDifferent,
          driverAgeEnabled,
          pickupLocation,
          dropoffLocation,
          pickupDate,
          dropoffDate,
          driverAge,
        },
      },
    });
  };

  return (
    <div className="bg-[#003b94] text-white">
      {/* Header */}
      <FormHeader
        title={"Hit the road with up to 25% off rental cars"}
        description={
          "Rev up your plans with Black Friday Deals. Book by 4 Dec 2024 for trips between now and anytime in 2025."
        }
      />

      {/* Form */}
      <div className="bg-white px-6 py-6 shadow-lg rounded-lg max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4">
        {/* Pickup Location */}
        <div>
          <label htmlFor="pickup-location" className="block text-gray-600 mb-2">
            Pickup Location
          </label>
          <input
            id="pickup-location"
            type="text"
            placeholder="Enter pickup location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Dropoff Location */}
        {dropOffDifferent && (
          <div>
            <label
              htmlFor="dropoff-location"
              className="block text-gray-600 mb-2"
            >
              Dropoff Location
            </label>
            <input
              id="dropoff-location"
              type="text"
              placeholder="Enter dropoff location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            />
          </div>
        )}

        {/* Pickup Date */}
        <div>
          <label htmlFor="pickup-date" className="block text-gray-600 mb-2">
            Pickup Date
          </label>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => setPickupDate(date)}
            minDate={new Date()}
            placeholderText="Select pickup date"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            wrapperClassName="w-full"
          />
        </div>

        {/* Pickup Time */}
        <div>
          <label htmlFor="pickup-time" className="block text-gray-600 mb-2">
            Pickup Time
          </label>
          <input
            id="pickup-time"
            type="time"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
          />
        </div>

        {/* Dropoff Date */}
        <div>
          <label htmlFor="dropoff-date" className="block text-gray-600 mb-2">
            Dropoff Date
          </label>
          <DatePicker
            selected={dropoffDate}
            onChange={(date) => setDropoffDate(date)}
            minDate={pickupDate || new Date()}
            placeholderText="Select dropoff date"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            wrapperClassName="w-full"
          />
        </div>

        {/* Dropoff Time */}
        <div>
          <label htmlFor="dropoff-time" className="block text-gray-600 mb-2">
            Dropoff Time
          </label>
          <input
            id="dropoff-time"
            type="time"
            className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
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

      {/* Checkboxes */}
      <div className="bg-white px-6 py-4 shadow-lg rounded-lg max-w-screen-xl mx-auto mt-4 text-black">
        {/* Dropoff at Different Location */}
        <div className="flex items-center mb-4">
          <input
            id="dropoff-different"
            type="checkbox"
            checked={dropOffDifferent}
            onChange={() => setDropOffDifferent(!dropOffDifferent)}
            className="w-5 h-5 text-[#003b94] border-gray-300 rounded focus:ring-[#003b94] me-3"
          />
          <label htmlFor="dropoff-different" className="text-gray-600">
            Drop car off at different location
          </label>
        </div>

        {/* Driver Age */}
        <div className="flex items-center">
          <input
            id="driver-age"
            type="checkbox"
            checked={driverAgeEnabled}
            onChange={() => setDriverAgeEnabled(!driverAgeEnabled)}
            className="w-5 h-5 text-[#003b94] border-gray-300 rounded focus:ring-[#003b94] me-3"
          />
          <label htmlFor="driver-age" className="text-gray-600 me-3">
            Driver aged between 30 - 65?
          </label>
          {!driverAgeEnabled && (
            <input
              id="driver-age-input"
              type="number"
              value={driverAge}
              onChange={(e) => setDriverAge(e.target.value)}
              placeholder="Enter driver age"
              min="18"
              max="120"
              className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarRentalForm;
