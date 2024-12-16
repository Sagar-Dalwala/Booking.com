/* eslint-disable react/prop-types */


const PropertyReservation = ({data}) => {
    return (
        <div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Room Details</h2>
            <p className="text-gray-700 text-lg">
              {data.roomDetails || "1 extra-large double bed"}
            </p>
            <p className="text-xl font-semibold text-gray-800 mt-4">
              ₹{data.price} / night
            </p>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      );
}

export default PropertyReservation