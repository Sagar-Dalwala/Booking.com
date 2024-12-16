/* eslint-disable react/prop-types */
const StaticContainer = ({ containerData }) => {
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
    </div>
  );
};

export default StaticContainer;
