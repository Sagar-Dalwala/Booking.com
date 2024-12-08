// import StaticContainer from "../../components/static-container/StaticContainer";
const StaticHorizontalContainer = () => {
  const containerData = [
    {
      id: 1,
      image: "./flights/MagnifyingGlass.png",
      title: "Search a huge selection",
      description:
        "Easily compare flights, airlines, and prices — all in one place.",
    },
    {
      id: 2,
      image: "./flights/Money.png",
      title: "Pay no hidden fees",
      description: "Get a clear price breakdown every step of the way.",
    },
    {
      id: 3,
      image: "./flights/Tickets.png",
      title: "Get more flexibility",
      description: "Change your travel dates with the Flexible ticket option*.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="bg-gray-200 py-10 font-booking">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {containerData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[80px] w-[80px] mb-4 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed break-words">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <StaticContainer containerData={containerData} /> */}
      <div className="max-w-screen-xl mx-auto p-6 text-gray-600 font-booking text-sm">
        <p>
          *Flexible plane tickets are available for an additional cost on
          selected airfares
        </p>
      </div>
    </div>
  );
};

export default StaticHorizontalContainer;
