import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AirportTaxisForm = () => {
  const passengerOptions = Array.from({ length: 16 }, (_, i) => i + 1);

  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve previously passed state or initialize default values
  const initialData = location.state?.formData || {};
  const [tripType, setTripType] = useState(initialData.tripType || "one-way");
  const [pickupLocation, setPickupLocation] = useState(
    initialData.pickupLocation || ""
  );
  const [destination, setDestination] = useState(
    initialData.destination || ""
  );
  const [pickupDate, setPickupDate] = useState(initialData.pickupDate || null);
  const [pickupTime, setPickupTime] = useState(initialData.pickupTime || "");
  const [numPassengers, setNumPassengers] = useState(
    initialData.numPassengers || 1
  );

  const handleSearch = () => {
    navigate(`/airport-taxis-filter/${"search"}`, {
      state: {
        formData: {
          tripType,
          pickupLocation,
          destination,
          pickupDate,
          pickupTime,
          numPassengers,
        },
      },
    });
  };

  return (
    <div className="bg-gray-100 font-booking pb-8">
      {/* Header */}
      <div className="flex flex-col p-8 md:p-12 w-full max-w-screen-xl mx-auto font-booking">
        <h1 className="text-xl md:text-3xl font-bookingBold">{`Book your airport taxi`}</h1>
        <h3 className="text-md md:text-lg mt-2 mb-8">
          {`Easy airport transfers to and from your accommodation`}
        </h3>

        {/* Form */}
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-screen-xl mx-auto">
          {/* Trip Type */}
          <div className="flex items-center gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="one-way"
                checked={tripType === "one-way"}
                onChange={() => setTripType("one-way")}
                className="accent-[#003b94]"
              />
              <span className="text-black">One-way</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="tripType"
                value="return"
                checked={tripType === "return"}
                onChange={() => setTripType("return")}
                className="accent-[#003b94]"
              />
              <span className="text-black">Return</span>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-2">
            {/* Pickup Location */}
            <div className="col-span-2">
              <input
                id="pickupLocation"
                type="text"
                placeholder="Enter pickup location"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
            </div>

            {/* Destination */}
            <div className="col-span-2">
              <input
                id="destination"
                type="text"
                placeholder="Enter destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
            </div>

            {/* Pickup Date */}
            <div>
              <DatePicker
                selected={pickupDate}
                onChange={(date) => setPickupDate(date)}
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
                placeholderText="Select pickup date"
                wrapperClassName="w-full"
              />
            </div>

            {/* Pickup Time */}
            <div>
              <input
                id="pickupTime"
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg w-full text-black focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              />
            </div>

            {/* Number of Passengers */}
            <div>
              <select
                value={numPassengers}
                onChange={(e) => setNumPassengers(e.target.value)}
                className="text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#003b94] w-full p-3 rounded-lg"
              >
                {passengerOptions.map((num) => (
                  <option key={num} value={num} className="text-black">
                    {num}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="col-span-2 lg:col-span-1">
              <button
                type="button"
                onClick={handleSearch}
                className="p-3 bg-[#003b94] text-white rounded-lg w-full hover:bg-[#002a6b] focus:outline-none focus:ring-2 focus:ring-[#003b94]"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportTaxisForm;
