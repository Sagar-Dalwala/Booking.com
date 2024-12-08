// eslint-disable-next-line react/prop-types
const FormHeader = ({ title, description }) => {
  //! set the p-4 and md:p-8 after set the font-bookingBold
  return (
    <div className="flex flex-col p-8 md:p-12 w-full max-w-screen-xl mx-auto font-booking ">
      <h1 className="text-3xl md:text-5xl font-bookingBold">{title}</h1>
      <h3 className="text-lg md:text-2xl mt-2">{description}</h3>
    </div>
  );
};

export default FormHeader;
