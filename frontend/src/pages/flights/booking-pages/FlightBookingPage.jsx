import { useLocation } from "react-router-dom";
import FlightDetailsHeader from "../../../components/header/FlightDetailsHeader";
import FlightDetailsCard from "../../../components/card/FlightDetailsCard";
import FlightDetailsModal from "../../../components/modal/FlightDetailsModal";
import { useState } from "react";
import ContactDetailsForm from "../../../components/form/ContactDetailsForm";
import TravellerDetailsForm from "../../../components/form/TravellerDetailsForm";
import PaymentDetailsForm from "../../../components/form/PaymentDetailsForm";
import PriceDetailsCard from "../../../components/card/PriceDetailsCard";

const FlightBookingPage = () => {
  const location = useLocation();

  const data = location.state;

  const formData = data.formData;
  const flightData = data.flightData;

  const [isOpenFlightDetails, setIsOpenFlightDetails] = useState(false);

  const handleCloseFlightDetails = () => {
    setIsOpenFlightDetails(false);
  };

  return (
    <div className=" bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        {/* Header */}
        <FlightDetailsHeader formData={formData} flightData={flightData} />

        <div className="py-8 px-4 md:px-2">
          {/* Flight Details Card */}
          <h2 className="text-2xl font-bookingBold text-gray-800 ">
            Check and Pay
          </h2>

          <div className="flex flex-col md:flex-row gap-4 md:space-x-6">
            <div className="flex-1">
              {/* Flight Details */}
              <FlightDetailsCard
                flightData={flightData}
                formData={formData}
                setIsOpenFlightDetails={setIsOpenFlightDetails}
              />
            </div>
            <div className="flex-shrink-0 w-full md:w-1/3">
              {/* Price details card */}
              <PriceDetailsCard />
            </div>
          </div>

          {/* Contact details form */}
          <ContactDetailsForm />

          {/* Traveller details form */}
          <TravellerDetailsForm adults={formData.data.adults} />

          {/* Payment details form */}
          <PaymentDetailsForm />
        </div>
      </div>

      {isOpenFlightDetails && (
        <FlightDetailsModal
          flight={flightData}
          isOpen={isOpenFlightDetails}
          onClose={handleCloseFlightDetails}
          data={formData}
        />
      )}
    </div>
  );
};

export default FlightBookingPage;
