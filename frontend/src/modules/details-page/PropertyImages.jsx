import { useState } from "react";
import ImagesModal from "../../components/modal/ImageModal";

const PropertyImages = () => {
  const data = {
    images: [
      "https://via.placeholder.com/800x400/?text=Image+1",
      "https://via.placeholder.com/800x400/?text=Image+2",
      "https://via.placeholder.com/800x400/?text=Image+3",
      "https://via.placeholder.com/800x400/?text=Image+4",
      "https://via.placeholder.com/800x400/?text=Image+5",
      "https://via.placeholder.com/800x400/?text=Image+6",
      "https://via.placeholder.com/800x400/?text=Image+7",
      "https://via.placeholder.com/800x400/?text=Image+8",
    ],
    featuredImage: "https://via.placeholder.com/800x400/?text=Featured+Image",
  };

  const scrollImages = (direction) => {
    const container = document.getElementById("image-scroll-container");
    if (container) {
      const imageWidth = container.querySelector("img").offsetWidth + 16; // Add gap if present
      const scrollAmount = direction === "next" ? imageWidth : -imageWidth;
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = () => setIsModalOpen(true);
  const closeImageModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* For mobile and tablet: Horizontal scroll */}
      <div className="block lg:hidden">
        <div className="relative">
          {/* Horizontal Scrollable Container */}
          <div
            id="image-scroll-container"
            className="flex overflow-x-scroll scrollbar-hidden space-x-4 p-4"
          >
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover rounded-lg shadow-md flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>

          {/* Navigation Icons */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-70 text-white p-2 rounded-full shadow-md"
            onClick={() => scrollImages("prev")}
          >
            &lt;
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-70 text-white p-2 rounded-full shadow-md"
            onClick={() => scrollImages("next")}
          >
            &gt;
          </button>
        </div>

        {/* Image Counter */}
        <div className="text-end mt-4 text-gray-600">
          {data.images.length} Images
        </div>
      </div>

      {/* For larger screens: Original layout */}
      <div className="hidden lg:block">
        {/* Grid - 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="cols-span-1">
            {data.images?.slice(0, 2)?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover rounded-lg cursor-pointer mb-2 shadow-md"
              />
            ))}
          </div>

          <div className="col-span-2">
            <img
              src={data.featuredImage}
              alt="Featured"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Grid - 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {data.images.length > 3 &&
            data.images?.slice(3, 7)?.map((image, index) => (
              <div className="col-span-1" key={index}>
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-auto object-cover rounded-lg cursor-pointer mb-2 shadow-md"
                />
              </div>
            ))}

          <div className="col-span-1 relative cursor-pointer">
            <img
              src={data.images[4]}
              alt="Gallery 4"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            {data.images[7] && (
              <div
                className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-lg mb-2"
                onClick={() => openImageModal()}
              >
                <span className="text-white text-lg font-semibold">
                  +{data.images.length - 7} Photos
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Modal */}
      <ImagesModal
        isOpen={isModalOpen}
        onClose={closeImageModal}
        images={data.images}
      />
    </div>
  );
};

export default PropertyImages;
