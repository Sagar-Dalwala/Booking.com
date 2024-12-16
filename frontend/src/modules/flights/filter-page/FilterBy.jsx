import FilterByOptions from "../../../components/filter/FilterByOptions";

const FilterBy = () => {
  const filterCategories = {
    Stops: ["Any", "Direct", "One stop"],
    Airlines: [
      "IndiGo",
      "SpiceJet",
      "Akasa Air",
      "Air India",
      "Etihad Airways",
      "Hahnair Systems",
      "Emirates Airlines",
      "Air India Express",
    ],
  };
  return (
    <div className="flex flex-col lg:flex-row">
      <aside
        className={`w-full lg:w-[300px] bg-white rounded-lg border shadow-md p-4 space-y-6 my-6`}
      >
        <h2 className="font-bold text-lg mb-4">Filter By:</h2>
        <FilterByOptions filterCategories={filterCategories} />
      </aside>
    </div>
  );
};

export default FilterBy;
