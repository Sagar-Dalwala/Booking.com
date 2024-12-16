import { Dialog, Input, Textarea, Button } from "@material-tailwind/react";

/* eslint-disable react/prop-types */
const WriteReviewModal = ({ isOpen, onClose }) => {
  return (
    <Dialog
      size="lg"
      open={isOpen}
      handler={onClose}
      className="bg-white rounded-lg p-6"
      animate={{
        mount: { scale: 1, opacity: 1 },
        unmount: { scale: 0.90, opacity: 0 },
        initialDelay: 20,
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Write a Review</h2>
        <button
          className="text-gray-600 hover:text-gray-800 focus:outline-none"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <div className="space-y-4">
        <Input label="Name" type="text" />
        <Input label="Rating (1-10)" type="number" min="1" max="10" />
        <Textarea label="Your Review" rows={4} />
        <Button
          onClick={onClose}
          className="w-full bg-blue-800 text-white hover:bg-blue-900"
        >
          Submit Review
        </Button>
      </div>
    </Dialog>
  );
};

export default WriteReviewModal;
