const AirportTaxisServices = () => {
  const data = [
    {
      id: 1,
      image: "./airport-taxis/taxi-book-taxi.svg",
      title: "Booking your airport taxi",
      description:
        "Confirmation is immediate. If your plans change, you can cancel for free up to 24 hours before your scheduled pick-up time",
    },
    {
      id: 2,
      image: "./airport-taxis/taxi-meet-driver.svg",
      title: "Meeting your driver",
      description: `You'll be met on arrival and taken to your vehicle. Your driver will track your flight, so they'll wait for you even if it's delayed`,
    },
    {
      id: 3,
      image: "./airport-taxis/taxi-arrive-at-destination.svg",
      title: "Arriving at your destination",
      description:
        "Get to your destination quickly and safely – no waiting in line for a taxi, no figuring out public transport",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 font-booking">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Airport transfers made easy
        </h2>
        {/* Desktop: Grid with 2 columns, Mobile: Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex items-center text-left p-5 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[70px] w-[70px] mr-4 object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Image with Chat Bubble */}
          <div className="relative flex justify-center">
            <img
              src="./airport-taxis/taxi-how-it-works.svg"
              alt="How it works"
              className="h-96 w-96"
            />
            {/* Chat Bubble */}
            <div className="absolute top-0 left-1/4 transform -translate-x-1/2 bg-[#007BFF] text-white text-sm font-bookingBold px-4 py-2 rounded-md shadow-lg">
              How does it work?
              {/* Tail for bubble */}
              <div className="absolute top-full left-8 transform -translate-x-1/2 w-0 h-0 border-t-[8px] border-t-blue-600 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirportTaxisServices;
