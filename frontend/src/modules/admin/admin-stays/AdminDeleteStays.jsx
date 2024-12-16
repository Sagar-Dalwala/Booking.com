/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

const AdminDeleteStays = ({ open, onClose, onDelete, stayName, isLoading }) => {
  return (
    <Dialog open={open} handler={onClose} size="sm">
      <DialogHeader className="font-booking">Confirm Deletion</DialogHeader>
      <DialogBody className="font-booking">
        Are you sure you want to delete{" "}
        <strong className="font-bookingBold">{stayName}</strong>?
        <p>All data associated with this stay will be permanently deleted. </p>
      </DialogBody>
      <DialogFooter className="font-booking">
        <Button variant="text" color="gray" onClick={onClose} className="mr-2">
          Cancel
        </Button>
        <Button variant="gradient" color="red" onClick={onDelete} className="">
          {isLoading ? "Deleting..." : `Delete`}
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default AdminDeleteStays;
