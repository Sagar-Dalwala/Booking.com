// eslint-disable-next-line react/prop-types
const Divider = ({ children }) => {
  return (
    <>
      <span className="flex-grow border-t border-gray-300" />
      <span className="px-2 flex items-center">
        <span className="w-2 h-2 bg-gray-500 rounded-full" />
        <span className="md:w-16 w-10 bg-gray-500 border border-gray-300 mr-2" />
        {children}
        <span className="md:w-16 w-10 bg-gray-500 border border-gray-300 ms-2" />
        <span className="w-2 h-2 bg-gray-500 rounded-full" />
      </span>
      <span className="flex-grow border-t border-gray-300" />
    </>
  );
};

export default Divider;
