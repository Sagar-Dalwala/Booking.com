/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const FlightDetailsCard = ({
  flightData,
  formData,
  setIsOpenFlightDetails,
}) => {
  return (
    <div className="max-w-screen-md font-booking">
      <div className="border border-gray-300 p-4 rounded mt-6">
        <div className="flex md:flex-row flex-col gap-4">
          {/* Airline Logo */}
          <img
            src={flightData.logo}
            alt={flightData.airline}
            className="md:h-24 w-auto object-cover"
          />
          <div className="flex flex-col">
            {/* Destinations */}
            <p className="text-md font-bookingBold">
              {formData.data.destinationFrom[0].toUpperCase() +
                formData.data.destinationFrom.slice(1)}{" "}
              ({flightData.departure.airport}) to{" "}
              {formData.data.destinationTo[0].toUpperCase() +
                formData.data.destinationTo.slice(1)}{" "}
              ({flightData.return.airport})
            </p>

            {/* Dates */}
            <p className="text-sm">
              {flightData.departure.date} - {flightData.return.date}
            </p>

            {/* Time */}
            <p className="text-sm">
              {flightData.departure.time} - {flightData.return.time}
            </p>

            {/* Stops and Duration */}
            <p className="text-sm">
              {flightData.departure.stops} - {flightData.departure.duration} -{" "}
              {"Economy"}
            </p>

            {/* Luggage */}
            {/* <p className="text-sm my-2">
                    <strong className="font-semibold font-bookingBold">
                      Luggage:
                    </strong>{" "}
                    {flightData.luggage.map((item) => item.type).join(", ")}
                  </p> */}

            {/* Airline */}
            <p className="text-sm">{flightData.airline}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            className=" text-blue-800"
            variant="text"
            color="blue"
            size="md"
            onClick={() => {
              setIsOpenFlightDetails(true);
            }}
          >
            View details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailsCard;
