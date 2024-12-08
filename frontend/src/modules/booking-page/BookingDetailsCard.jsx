/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const BookingDetailsCard = ({ hotelData }) => {
  console.log(hotelData.hotel);
  const data = {
    checkInDate: "2023-08-01",
    checkOutDate: "2023-08-05",
    totalLengthOfStay: 4,
    room: 1,
    adults: 2,
    children: 1,
  };

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/stays-details/${hotelData.hotel.id}`, {
      state: hotelData.hotel,
    });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800">
        {"Your booking details"}
      </h3>
      <div className="flex gap-6 mt-2">
        <div className="text-gray-600 text-sm ">
          <p>Check in: </p>
          <p className="">{data.checkInDate}</p>
        </div>
        <div className="w-[2.5px] h-10 bg-gray-200" />
        <div className="text-gray-600 text-sm">
          <p>Check out: </p>
          <p className="">{data.checkOutDate}</p>
        </div>
      </div>
      <div className="text-gray-600 text-sm mt-2">
        <p>Total Length of Stay</p>
        <p>{data.totalLengthOfStay} days</p>
      </div>
      <hr className="border-t border-gray-300 my-2" />
      <div className="">
        You Selected:
        <div className="text-gray-600 text-sm flex gap-3">
          <p>Room: {data.room}</p>
          <p>Adults: {data.adults}</p>
          <p>Children: {data.children}</p>
        </div>
        <Button
          className="mt-4 py-2 rounded-md transition"
          variant="text"
          color="blue"
          onClick={handleNavigate}
        >
          Change your selection
        </Button>
      </div>
    </div>
  );
};

export default BookingDetailsCard;
