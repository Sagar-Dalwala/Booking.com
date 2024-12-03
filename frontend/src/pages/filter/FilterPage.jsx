import { useLocation } from "react-router-dom";
import { useState } from "react";

const FilterPage = () => {
  const location = useLocation();
  const selectedDestination = location.state?.destination || {};

  const mockData = [
    { id: 1, name: "Stay 1", location: selectedDestination.title || "Mock Location", price: "$100" },
    { id: 2, name: "Stay 2", location: selectedDestination.title || "Mock Location", price: "$150" },
    { id: 3, name: "Stay 3", location: selectedDestination.title || "Mock Location", price: "$200" },
  ];

  const [view, setView] = useState("list");

  return (
    <div className="flex">
      <aside className="w-1/4 p-4 bg-gray-100">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        {/* Add filter options here */}
      </aside>

      <main className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Results for {selectedDestination.title || "All Destinations"}
          </h2>
          <div>
            <button
              className={`px-4 py-2 ${view === "list" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setView("list")}
            >
              List View
            </button>
            <button
              className={`px-4 py-2 ml-2 ${view === "grid" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              onClick={() => setView("grid")}
            >
              Grid View
            </button>
          </div>
        </div>

        <div className={view === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col"}>
          {mockData.map((stay) => (
            <div key={stay.id} className="p-4 border rounded">
              <h3 className="font-semibold">{stay.name}</h3>
              <p>{stay.location}</p>
              <p>{stay.price}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FilterPage;
