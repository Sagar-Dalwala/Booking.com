import LeftArrow from "../../../public/svg/LeftArrow";

// eslint-disable-next-line react/prop-types
const LeftScrollButton = ({scroll,className}) => {
  return (
    <button
    onClick={() => scroll("left")}
    className={className}
  >
   <LeftArrow />
  </button>
  )
}

export default LeftScrollButton