import { useLocation } from "react-router-dom";
import HotelBookingDetails from "../../../modules/booking-page/HotelBookingDetails";
import UserBookingDetailsForm from "../../../modules/booking-page/UserBookingDetailsForm";
import UserBookingStepper from "../../../components/stepper/UserBookingStepper";

const StaysBooking = () => {
  const location = useLocation();
  const data = location.state;

  console.log(data);

  return (
    <div className="bg-gray-100 py-10 font-booking">
      <div className="flex flex-col items-center mx-auto max-w-screen-xl px-4">
        <div className="w-full">
          <UserBookingStepper />
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3 w-full">
              {/* Adjust the width for HotelBookingDetails */}
              <HotelBookingDetails data={data} />
            </div>
            <div className="lg:w-2/3 w-full">
              {/* Ensure full width on smaller screens */}
              <UserBookingDetailsForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaysBooking;
