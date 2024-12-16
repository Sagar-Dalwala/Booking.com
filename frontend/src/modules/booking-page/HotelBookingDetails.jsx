/* eslint-disable react/prop-types */
import HotelDetailsCard from "./HotelDetailsCard";
import BookingDetailsCard from "./BookingDetailsCard";
import PriceDetailsCard from "./PriceDetailsCard";
import RoomDetailsCard from "./RoomDetailsCard";

const HotelBookingDetails = ({ data }) => {
  return (
    <aside className={`w-full lg:w-[350px] rounded-lg space-y-6 my-6`}>
      <div className="flex flex-col  gap-4">
        <HotelDetailsCard hotelData={data.hotel} />
        <RoomDetailsCard roomData={data.room} />
        {/* //! need to get this data from the search form and 
          //! add that state in navigate filter page so that 
          //! i can get that details from the details page. */}
        <BookingDetailsCard hotelData={data} />
        <PriceDetailsCard roomData={data.room} />
      </div>
    </aside>
  );
};

export default HotelBookingDetails;
