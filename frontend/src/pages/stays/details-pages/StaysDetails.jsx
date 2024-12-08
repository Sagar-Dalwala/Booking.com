import { useLocation, useNavigate } from "react-router-dom";
import StaysForm from "../../../modules/stays/StaysForm";
import PropertyName from "../../../modules/details-page/PropertyName";
import PropertyImages from "../../../modules/details-page/PropertyImages";
import PropertyDescription from "../../../modules/details-page/PropertyDescription";
import PropertyAvalibility from "../../../modules/details-page/PropertyAvalibility";
import PropertyReviews from "../../../modules/details-page/PropertyReviews";
import HouseRules from "../../../modules/details-page/HouseRules";

const StaysDetails = () => {
  const location = useLocation();
  const data = location.state;

  console.log(data);

  const navigate = useNavigate();

  const handleOnClickNavigate = (room) => {
    navigate(`/stays-booking/${room.id}`, {
      state: {
        hotel: data,
        room,
      },
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <StaysForm data={data} />
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Title Section */}
        <PropertyName data={data} />

        {/* Image Gallery */}
        <PropertyImages data={data} />

        {/* Description and Amenities */}
        <PropertyDescription data={data} />

        {/* Availability */}
        <PropertyAvalibility
          data={data}
          handleOnClickNavigate={handleOnClickNavigate}
        />

        {/* Booking Section */}
        {/* <PropertyReservation data={data} /> */}

        {/* Review Section */}
        <PropertyReviews data={data} />

        {/* House Rules */}
        <HouseRules />
      </div>
    </div>
  );
};

export default StaysDetails;
