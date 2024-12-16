/* eslint-disable react/prop-types */
const RoomDetailsCard = ({ roomData }) => {
  console.log(roomData);
  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">{roomData?.roomType}</h3>
      <p className="text-gray-600 text-sm">{roomData?.noOfGuests}</p>
      <ul className="mt-2 text-sm text-gray-700">
        {roomData?.yourChoices?.map((choice, index) => (
          <li key={index} className="flex items-center gap-2">
            <span>•</span> {choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoomDetailsCard;
