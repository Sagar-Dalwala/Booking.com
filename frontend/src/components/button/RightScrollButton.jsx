/* eslint-disable react/prop-types */
import RightArrow from "../../../public/svg/RightArrow";

const RightScrollButton = ({ scroll, className }) => {
  return (
    <button
      onClick={() => scroll("right")}
      className={className}
    >
      <RightArrow />
    </button>
  );
};

export default RightScrollButton;
