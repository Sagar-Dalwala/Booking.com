/* eslint-disable react/prop-types */
import { Drawer } from "@material-tailwind/react";

import StaysForm from "../../../components/form/StaysForm";

const AdminEditStays = ({ stay, open, onClose, onSubmit, isLoading }) => {

  return (
    <div className="p-4 font-booking">
      <Drawer
        open={open}
        onClose={onClose}
        placement="right"
        size={600}
        className="p-4 overflow-y-auto"
      >
        <StaysForm
          onSubmit={onSubmit}
          stay={stay}
          formType={"edit"}
          toggleDrawer={onClose}
          isLoading={isLoading}
        />
      </Drawer>
    </div>
  );
};

export default AdminEditStays;
