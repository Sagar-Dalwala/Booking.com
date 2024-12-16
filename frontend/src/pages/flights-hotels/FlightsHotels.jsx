import DiscoverDestination from "../../modules/flight-hotels/DiscoverDestination";
import FlightHotelsForm from "../../modules/flight-hotels/FlightHotelsForm";

const FlightsHotels = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <FlightHotelsForm />
        <DiscoverDestination />
      </div>
    </div>
  );
};

export default FlightsHotels;
