/* eslint-disable react/prop-types */
import { Button, IconButton } from "@material-tailwind/react";
import ActionTooltip from "../../components/tooltip/ActionTooltip";
import { AiOutlineHeart } from "react-icons/ai";

const PropertyName = ({ data }) => {
  const scrollToAvailability = () => {
    const availabilitySection = document.getElementById("availability-section");
    if (availabilitySection) {
      availabilitySection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="grid grid-cols-2 ">
      <div className="mb-6 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800">{data?.name}</h1>
        <p className="text-gray-600 text-lg">
          {data?.location} -{" "}
          <a href="/" className="text-blue-600 underline">
            Show on map
          </a>
        </p>
      </div>
      <div className="flex justify-end gap-4 py-2">
        <ActionTooltip content="Save" placement="top" disabled>
          <IconButton className="h-10" variant="text">
            <AiOutlineHeart className="w-6 h-6 text-blue-800" />
          </IconButton>
        </ActionTooltip>

        <Button
          className="h-10 bg-blue-800 hover:bg-blue-700"
          variant="filled"
          onClick={scrollToAvailability}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default PropertyName;
