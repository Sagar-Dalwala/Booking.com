import FlightsForm from "../../modules/flights/FlightsForm";
import FlightsSearchHistory from "../../modules/flights/FlightsSearchHistory";
import FlyWorldWide from "../../modules/flights/FlyWorldWide";
import FrequentQuestions from "../../modules/flights/FrequentQuestions";
import PopularFlights from "../../modules/flights/PopularFlights";
import StaticHorizontalContainer from "../../modules/flights/StaticHorizontalContainer";
import TrendingCities from "../../modules/flights/TrendingCities";

const Flights = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <FlightsForm />
        <FlightsSearchHistory />
        <PopularFlights />
        <TrendingCities />
        <StaticHorizontalContainer />
        <FlyWorldWide />
        <FrequentQuestions />
      </div>
    </div>
  );
};

export default Flights;
