import { TbPointFilled } from "react-icons/tb";

/* eslint-disable react/prop-types */
const FlightDetailsHeader = ({ formData, flightData }) => {
  return (
    <>
      <div className="pt-8 flex gap-4 px-4 md:px-2">
        <p className="text-sm text-gray-600 ">{flightData.type}</p><TbPointFilled className="text-gray-600 text-sm mt-1" />
        <p className="text-sm text-gray-600 ">{formData.data.adults} Adults</p><TbPointFilled className="text-gray-600 text-sm mt-1 " />
        <p className="text-sm text-gray-600 ">{flightData.departure.date}</p>
      </div>
      <div>
        <h2 className="text-4xl font-bookingBold pt-1 px-4 md:px-2 text-gray-800">
          {formData.data.destinationFrom[0].toUpperCase() +
            formData.data.destinationFrom.slice(1)}{" "}
          to{" "}
          {formData.data.destinationTo[0].toUpperCase() +
            formData.data.destinationTo.slice(1)}
        </h2>
      </div>
    </>
  );
};

export default FlightDetailsHeader;
