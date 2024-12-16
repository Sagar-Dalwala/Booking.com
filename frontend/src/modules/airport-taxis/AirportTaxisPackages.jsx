import { useState } from "react";
import { FaCheck, FaUser, FaHandshake } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import ActionTooltip from "../../components/tooltip/ActionTooltip";

const AirportTaxisPackages = () => {
  const [selectedPassengers, setSelectedPassengers] = useState("all");

  const taxiData = {
    "1-3": [
      {
        id: 1,
        type: "Standard",
        model: "Skoda Octavia",
        passengers: 3,
        bags: 2,
        features: ["Meet & Greet included", "Free cancellation"],
      },
      {
        id: 2,
        type: "Executive",
        model: "Mercedes-Benz E-Class",
        passengers: 3,
        bags: 2,
        features: ["Meet & Greet included", "Free cancellation"],
      },
    ],
    "4-7": [
      {
        id: 3,
        type: "People Carrier",
        model: "Peugeot 5008",
        passengers: 5,
        bags: 5,
        features: ["Meet & Greet included", "Free cancellation"],
      },
      {
        id: 4,
        type: "Executive people carrier",
        model: "Mercedes-Benz V-Class",
        passengers: 6,
        bags: 6,
        features: ["Meet & Greet included", "Free cancellation"],
      },
      {
        id: 5,
        type: "Large people carrier",
        model: "Ford Tourneo",
        passengers: 7,
        bags: 7,
        features: ["Meet & Greet included", "Free cancellation"],
      },
    ],
    all: [
      {
        id: 1,
        type: "Standard",
        model: "Skoda Octavia",
        passengers: 3,
        bags: 2,
        features: ["Meet & Greet included", "Free cancellation"],
      },
      {
        id: 2,
        type: "Executive",
        model: "Mercedes-Benz E-Class",
        passengers: 3,
        bags: 2,
        features: ["Meet & Greet included", "Free cancellation"],
      },
      {
        id: 3,
        type: "People Carrier",
        model: "Peugeot 5008",
        passengers: 5,
        bags: 5,
        features: ["Meet & Greet included", "Free cancellation"],
      },
      {
        id: 4,
        type: "Executive people carrier",
        model: "Mercedes-Benz V-Class",
        passengers: 6,
        bags: 6,
        features: ["Meet & Greet included", "Free cancellation"],
      },
      {
        id: 5,
        type: "Large people carrier",
        model: "Ford Tourneo",
        passengers: 7,
        bags: 7,
        features: ["Meet & Greet included", "Free cancellation"],
      },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-200 py-10 font-booking">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="py-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Airport taxis for any kind of trip
          </h2>

          {/* Passenger Selection Buttons (Hidden on Mobile) */}
          <div className="hidden md:flex mb-6">
            <button
              className={`px-6 py-2 border border-blue-800 border-r-0 ${
                selectedPassengers === "1-3"
                  ? "bg-blue-800 text-white"
                  : "text-blue-800"
              }`}
              onClick={() => setSelectedPassengers("1-3")}
            >
              1-3 Passengers
            </button>
            <button
              className={`px-6 py-2 border border-blue-800 border-r-0 ${
                selectedPassengers === "4-7"
                  ? "bg-blue-800 text-white"
                  : "text-blue-800"
              }`}
              onClick={() => setSelectedPassengers("4-7")}
            >
              4-7 Passengers
            </button>
            <button
              className={`px-6 py-2 border border-blue-800 ${
                selectedPassengers === "all"
                  ? "bg-blue-800 text-white"
                  : "text-blue-800"
              }`}
              onClick={() => setSelectedPassengers("all")}
            >
              All Taxis
            </button>
          </div>
        </div>

        {/* Taxi Cards */}
        <div className="md:hidden overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-4">
            {taxiData.all.map((taxi) => (
              <div
                key={taxi.id}
                className="bg-white p-6 rounded-lg shadow-md w-64 flex-shrink-0"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {taxi.type}
                </h3>
                <p className="text-gray-600">{taxi.model}</p>

                {/* Passenger and Bag Details */}
                <div className="flex items-center space-x-2 text-gray-500 mt-2">
                  <FaUser />
                  <p>{taxi.passengers} passengers</p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <IoBagHandle />
                  <p>{taxi.bags} standard bags</p>
                </div>

                {/* Features in Column Layout */}
                <div className="mt-4">
                  {taxi.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-500 mb-2"
                    >
                      {feature === "Meet & Greet included" ? (
                        <FaHandshake className="text-blue-600" />
                      ) : (
                        <FaCheck className="text-green-600" />
                      )}
                      <span className="text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Search Button */}
                <button
                  className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md w-full"
                  onClick={scrollToTop}
                >
                  Search
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:grid gap-6 grid-cols-2 lg:grid-cols-3">
          {taxiData[selectedPassengers].map((taxi) => (
            <div key={taxi.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-800">
                {taxi.type}
              </h3>
              <p className="text-gray-600">{taxi.model}</p>

              {/* Passenger and Bag Details */}
              <div className="flex items-center space-x-2 text-gray-500 mt-2">
                <FaUser />
                <p>{taxi.passengers} passengers</p>
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <IoBagHandle />
                <p>{taxi.bags} standard bags</p>
              </div>

              {/* Features */}
              <div className="mt-4">
                {taxi.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-gray-500 mb-2"
                  >
                    {feature === "Meet & Greet included" ? (
                      <FaHandshake className="text-blue-600" />
                    ) : (
                      <FaCheck className="text-green-600" />
                    )}
                    {feature === "Meet & Greet included" ? (
                      <ActionTooltip
                        content="You'll be met in the Arrivals hall and taken to your vehicle"
                        placement="right"
                        disabled={false}
                      >
                        <span className="text-xs">{feature}</span>
                      </ActionTooltip>
                    ) : (
                      <span className="text-xs">{feature}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Search Button */}
              <button
                className="mt-6 px-4 py-2 bg-blue-800 text-white rounded-md w-full"
                onClick={scrollToTop}
              >
                Search
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportTaxisPackages;
