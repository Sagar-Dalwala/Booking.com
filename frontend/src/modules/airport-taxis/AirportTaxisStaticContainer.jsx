import FlightIcon from "./svg/FlightIcon ";
import CreditCardIcon from "./svg/CreditCardIcon";
import TrustIcon from "./svg/TrustIcon";

const AirportTaxisStaticContainer = () => {
  const data = [
    {
      id: 1,
      icon: <FlightIcon />, // Use the FlightIcon component
      title: "Flight tracking",
      description:
        "Your driver tracks your flight and waits for you if it's delayed",
    },
    {
      id: 2,
      icon: <CreditCardIcon />, // Use the CreditCardIcon component
      title: "One clear price",
      description:
        "Your price is confirmed upfront – no extra costs, no cash required",
    },
    {
      id: 3,
      icon: <TrustIcon />, // Use the TrustIcon component
      title: "Tried and trusted",
      description:
        "We work with professional drivers and have 24/7 customer care",
    },
  ];

  return (
    <div className="bg-gray-200 py-10 font-booking">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div
                className={`w-20 h-20 mb-4 text-gray-800 ${item.id === 1 ? "bg-green-100/50" : item.id === 2 ? "bg-red-100/50" : "bg-blue-100/50"} rounded-full flex items-center justify-center shadow-sm`}
              >
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AirportTaxisStaticContainer;
