/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const FlightDetailsModal = ({ flight, isOpen, onClose, data }) => {
  const navigate = useNavigate();

  if (!flight) return null; // Ensure flight data is available

  const handleNavigate = () => {
    navigate(`/flights-booking/${flight.id}`, {
      state: {
        formData: {
          data,
        },
        flightData: {
          ...flight,
          luggage: flight.luggage.map((item) => ({
            type: item.type,
          })), // Ensure the luggage data is serializable
        },
      },
    });
  };

  //* Define routes where BookingNavigation should be hidden
  const hideSelectButton = ["/flights-booking/:id"];
  const isSelectButtonHidden = hideSelectButton.some((route) =>
    location.pathname.match(new RegExp(route.replace(":id", "\\d+")))
  );

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative m-4 p-6 w-full sm:w-2/3 md:w-1/2 bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center pb-4 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                {flight.airline}
              </h2>
              {/* <button
                className="text-gray-500 hover:text-gray-700"
                onClick={onClose}
              >
                <span className="material-icons">close</span>
              </button> */}
            </div>
            <div className="space-y-4 py-4">
              <div>
                <p className="font-medium">Departure</p>
                <p>
                  {flight.departure.time} - {flight.departure.airport} to{" "}
                  {flight.departure.destination} on {flight.departure.date}
                </p>
                <p className="text-sm text-gray-500">
                  Duration: {flight.departure.duration} | Stops:{" "}
                  {flight.departure.stops}
                </p>
              </div>
              {flight.type === "Round Trip" && (
                <div>
                  <p className="font-medium">Return</p>
                  <p>
                    {flight.return.time} - {flight.return.airport} to{" "}
                    {flight.return.destination} on {flight.return.date}
                  </p>
                  <p className="text-sm text-gray-500">
                    Duration: {flight.return.duration} | Stops:{" "}
                    {flight.return.stops}
                  </p>
                </div>
              )}
              <div>
                <p className="font-medium">Luggage</p>
                <div className="flex space-x-4">
                  {flight.luggage.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      {item.icon}
                      <p className="text-sm text-gray-500">{item.type}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-medium">Price:</p>
                <p className="text-lg font-bold">
                  ₹{flight.price.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex justify-end space-x-4 pt-4 border-t">
              <button
                className="py-2 px-4 text-sm text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
                onClick={onClose}
              >
                Close
              </button>
              {!isSelectButtonHidden && (
                <button
                  className="py-2 px-4 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  onClick={() => handleNavigate()}
                >
                  Select
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlightDetailsModal;
