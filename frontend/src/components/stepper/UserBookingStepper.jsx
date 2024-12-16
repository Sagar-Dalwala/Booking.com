// eslint-disable-next-line react/prop-types
const UserBookingStepper = ({ activeStep = 2 }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-8 py-4">
      <div className="relative flex items-center justify-between w-full">
        {/* Step Connector */}
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
        <div
          className={`absolute left-0 top-2/4 h-0.5  -translate-y-2/4 ${
            activeStep >= 1 ? "bg-blue-800" : "bg-gray-300"
          } ${activeStep === 2 ? "w-1/2" : activeStep >= 3 ? "w-full" : "w-0"} transition-all duration-500`}
        />
        <div
          className={`relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 ${
            activeStep >= 1 ? "bg-blue-800" : "bg-gray-300"
          } rounded-full place-items-center`}
        >
          1
        </div>
        <div
          className={`relative z-10 grid w-10 h-10 font-bold transition-all duration-300 ${
            activeStep >= 2 ? "bg-blue-800 text-white" : "bg-gray-300 text-gray-900"
          } rounded-full place-items-center`}
        >
          2
        </div>
        <div
          className={`relative z-10 grid w-10 h-10 font-bold transition-all duration-300 ${
            activeStep >= 3 ? "bg-blue-800 text-white" : "bg-gray-300 text-gray-900"
          } rounded-full place-items-center`}
        >
          3
        </div>
      </div>
    </div>
  );
};

export default UserBookingStepper;
