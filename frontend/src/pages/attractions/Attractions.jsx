import AttracationsForm from "../../modules/attractions/AttracationsForm";
import ExploreDestination from "../../modules/attractions/ExploreDestination";
import NearByDestination from "../../modules/attractions/NearByDestination";
import StaticContainer from "../../modules/attractions/StaticContainer";

const Attractions = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <AttracationsForm />
        <NearByDestination />
        <StaticContainer />
        <ExploreDestination />
      </div>
    </div>
  );
};

export default Attractions;
