import { useLocation } from "react-router-dom";
import FlightsForm from "../../../modules/flights/FlightsForm";
import FilterBy from "../../../modules/flights/filter-page/FilterBy";
import FilterData from "../../../modules/flights/filter-page/FilterData";

const FlightsFilterPage = () => {
  const location = useLocation();
  const data = location.state;


  return (
    <div className="bg-gray-100">
      <FlightsForm data={data.formData} />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:block hidden">
            <FilterBy />
          </div>
          <FilterData data={data.formData} />
        </div>
      </div>
    </div>
  );
};

export default FlightsFilterPage;
