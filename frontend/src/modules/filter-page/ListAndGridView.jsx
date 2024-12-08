/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { CiBoxList, CiGrid41 } from "react-icons/ci";

const ListAndGridView = ({ view, setView }) => {
  return (
    <div className="hidden lg:flex gap-2 my-6">
      <Button
        variant="outlined"
        onClick={() => setView("list")}
        className={`rounded-full text-black text-xs p-1 ${
          view === "list" ? "border-gray-700 bg-white" : "border-gray-300"
        }`}
      >
        <CiBoxList className="w-4 h-4" />
      </Button>
      <Button
        variant="outlined"
        onClick={() => setView("grid")}
        className={`rounded-full text-black text-xs p-1 ${
          view === "grid" ? "border-gray-700 bg-white" : "border-gray-300"
        }`}
      >
        <CiGrid41 className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ListAndGridView;
