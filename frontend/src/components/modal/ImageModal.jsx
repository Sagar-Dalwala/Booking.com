/* eslint-disable react/prop-types */
import { Dialog } from "@material-tailwind/react";

const ImagesModal = ({ isOpen, onClose, images }) => {
  return (
    <Dialog
      size="xl"
      open={isOpen}
      handler={onClose}
      className="bg-white rounded-lg overflow-hidden"
      animate={{
        mount: { scale: 1, opacity: 1 },
        unmount: { scale: 0.95, opacity: 0 },
        initialDelay: 25,
      }}
    >
      <div className="relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-1 bg-blue-800 hover:bg-blue-700 text-white rounded-full p-2 w-10 h-10 z-50 focus:outline-none shadow-md"
        >
          x
        </button>

        {/* Modal Content */}
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ImagesModal;
