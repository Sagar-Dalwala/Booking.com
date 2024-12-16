import { useState } from "react";
import PriceRange from "./PriceRange";
import FilterByOptions from "../../components/filter/FilterByOptions";

const FilterBy = () => {
  // Min and max price constants
  const minPrice = 2000;
  const maxPrice = 40000;

  const [minSliderValue, setMinSliderValue] = useState(0); // Slider value for min price

  // Calculate price based on slider value
  const calculatePrice = (value) => {
    return minPrice + (value / 100) * (maxPrice - minPrice);
  };

  const minPriceValue = calculatePrice(minSliderValue);

  // Filter categories
  const filterCategories = {
    "Popular Filters": [
      "Sea view",
      "Free cancellation",
      "No prepayment",
      "Breakfast included",
      "Balcony",
      "Kitchen/kitchenette",
    ],
    Meals: ["Self catering", "Breakfast included", "All meals included"],
    Facilities: [
      "Parking",
      "Restaurant",
      "Pet allowed",
      "Room service",
      "24-hour front desk",
      "Fitness center",
      "Non-smoking rooms",
      "Airport shuttle",
      "Family rooms",
      "Spa and wellness center",
      "Free WiFi",
      "Electric vehicle charging",
      "Wheelchair accessible",
      "Swimming pool",
    ],
    "Property Type": ["Hotel", "Apartment", "Villa", "Hostel"],
    "Reviews Score": [
      "Excellent 4.5+",
      "Very Good 4+",
      "Good 3+",
      "Pleasant 2+",
    ],
    "Bed Preferences": ["Twin beds", "Double bed"],
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row">
        <aside
          className={`w-full lg:w-[300px] bg-white rounded-lg border shadow-md p-4 space-y-6 my-6`}
        >
          <h2 className="font-bold text-lg mb-4">Filter by:</h2>

          {/* Price Range */}
          <PriceRange
            minSliderValue={minSliderValue}
            setMinSliderValue={setMinSliderValue}
            minPriceValue={minPriceValue}
          />

          <FilterByOptions filterCategories={filterCategories} />
        </aside>
      </div>
    </>
  );
};

export default FilterBy;
