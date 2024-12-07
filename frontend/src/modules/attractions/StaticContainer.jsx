const StaticContainer = () => {
    const data = [
      {
        id: 1,
        image: "./attractions/attraction.svg",
        title: "Explore top attractions",
        description:
          "Experience the best of your destination, with attractions, tours, activities and more",
      },
      {
        id: 2,
        image: "./attractions/task.svg",
        title: "Fast and flexible",
        description:
          "Book tickets online in minutes, with free cancellation on many attractions",
      },
      {
        id: 3,
        image: "./attractions/support.svg",
        title: "Support when you need it",
        description:
          "Booking.com's global Customer Service team is here to help 24/7",
      },
    ];
  
    return (
      <div className="bg-gray-100 py-10 font-booking">
        <div className="max-w-screen-xl mx-auto px-6 border-b-2 py-8 border-t-2 border-gray-300">
          <h2 className="text-2xl font-bold mt-4 mb-8">{`We've got you covered`}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 mb-4 object-contain"
                />
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
  
  export default StaticContainer;
  