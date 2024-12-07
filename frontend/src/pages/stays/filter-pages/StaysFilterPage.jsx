import { useLocation } from "react-router-dom";
import StaysForm from "../../../modules/stays/StaysForm";
import FilterBy from "../../../modules/filter-page/FilterBy";
import { useState } from "react";
import FilterData from "../../../modules/filter-page/FilterData";

const StaysFilterPage = () => {
  const location = useLocation();
  const data = location.state;

  const [view, setView] = useState("list");
  // State for drawer, price range, and "Show More" functionality
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // State for mobile filter drawer

  return (
    <div className="bg-gray-100">
      <StaysForm data={data} />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:block hidden">
            <FilterBy
              isDrawerOpen={isDrawerOpen}
              setIsDrawerOpen={setIsDrawerOpen}
              setIsMobileFilterOpen={setIsMobileFilterOpen}
              isMobileFilterOpen={isMobileFilterOpen}
            />
          </div>
          <FilterData
            view={view}
            setView={setView}
            data={data}
            setIsDrawerOpen={setIsDrawerOpen}
            setIsMobileFilterOpen={setIsMobileFilterOpen}
            isMobileFilterOpen={isMobileFilterOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default StaysFilterPage;
