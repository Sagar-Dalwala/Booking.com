/* eslint-disable react/prop-types */
const HotelDetailsCard = ({ hotelData }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-2">
        {hotelData?.name}
      </h2>
      <p className="text-gray-600">{hotelData?.location}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500">{hotelData?.rating}</span>
        <span className="text-sm text-gray-500">
          ({hotelData?.reviews} reviews)
        </span>
      </div>
      <div className="text-sm">
        {hotelData?.amenities?.map((amenity, index) => (
          <p key={index} className="text-gray-600">
            {amenity}
          </p>
        ))}
      </div>
    </div>
  );
};

export default HotelDetailsCard;
