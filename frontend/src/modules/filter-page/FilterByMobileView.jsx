import { Drawer } from "@material-tailwind/react";
import FilterBy from "./FilterBy";

// eslint-disable-next-line react/prop-types
const FilterByMobileView = ({ isDrawerOpen, onClose }) => {
  return (
    <Drawer
      open={isDrawerOpen}
      onClose={() => onClose(false)}
      placement="bottom"
      className="overflow-y-auto"
      size={600}
    >
      <div className="p-4">
        <FilterBy isDrawerOpen={isDrawerOpen} />
      </div>
    </Drawer>
  );
};

export default FilterByMobileView;
