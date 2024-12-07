/* eslint-disable react/prop-types */
import { Checkbox } from "@material-tailwind/react";
import { useState } from "react";

const FilterByOptions = ({ filterCategories}) => {

  const [showMoreFilters, setShowMoreFilters] = useState({});


  // Toggle "Show More" for a filter category
  const toggleShowMore = (category) => {
    setShowMoreFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };


  return (
    <>
      {/* Filters */}
      {Object.entries(filterCategories).map(([category, filters]) => (
        <div key={category} className="flex flex-col">
          <h3 className="font-semibold">{category}</h3>
          {filters
            .slice(0, showMoreFilters[category] ? filters.length : 4)
            .map((label) => (
              <Checkbox
                key={label}
                label={label}
                color={"blue"}
                className="h-5 w-5 "
              />
            ))}
          {filters.length > 4 && (
            <button
              onClick={() => toggleShowMore(category)}
              className="text-blue-500 text-sm mt-2 hover:underline border p-2"
            >
              {showMoreFilters[category] ? "Show Less" : "Show More"}
            </button>
          )}
        </div>
      ))}
    </>
  );
};

export default FilterByOptions;
