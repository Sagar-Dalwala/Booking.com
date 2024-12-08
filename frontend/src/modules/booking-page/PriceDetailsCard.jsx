/* eslint-disable react/prop-types */
const PriceDetailsCard = ({ roomData }) => {
  console.log(roomData)
  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-200 mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Price Details</h3>
      <p className="text-gray-600 text-sm">Room: {roomData?.roomType}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-700 font-medium">Price per night:</span>
        <span className="text-blue-800 font-bold">{roomData?.price}</span>
      </div>
     
    </div>
  );
};

export default PriceDetailsCard;
