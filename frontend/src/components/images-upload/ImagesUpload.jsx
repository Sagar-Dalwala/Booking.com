import { MdDeleteOutline } from "react-icons/md";
import { forwardRef, useState } from "react";
import ImageUploadIcon from "../../../public/image-upload/ImageUploadIcon";

const ImagesUpload = forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ setValue }, ref) => {
    const [previewImages, setPreviewImages] = useState([]);

    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const image = {
            file,
            url: reader.result,
            name: file.name,
            size: (file.size / 1024).toFixed(2),
          };

          // Update the state with the new image
          setPreviewImages((prev) => {
            const updatedImages = [...prev, image];
            setValue(
              "images",
              updatedImages.map((img) => img.file)
            );
            return updatedImages;
          });
        };
        reader.readAsDataURL(file);
      });
    };

    const handleDelete = (index) => {
      const updatedPreviewImages = [...previewImages];
      updatedPreviewImages.splice(index, 1);
      setPreviewImages(updatedPreviewImages);
      setValue(
        "images",
        updatedPreviewImages.map((img) => img.file)
      );
    };

    return (
      <div className="flex-1">
        <div className="space-y-2 my-4">
          <label className="block text-sm font-medium">Property Images</label>
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <ImageUploadIcon />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (Max Size: 5MB)
              </p>
              <p>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  (Max. 10 files)
                </span>
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="hidden"
              ref={ref}
            />
          </label>
          <div className="mt-2 overflow-auto">
            {previewImages.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-3">
                {previewImages.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={image.url}
                      alt={`Property image ${index + 1}`}
                      className="h-auto w-full object-cover rounded"
                    />
                    <div className="absolute bottom-0 right-0 text-red-400 p-1 rounded cursor-pointer">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(index);
                        }}
                        className="text-xs hover:bg-gray-300 w-7 h-7 p-1 rounded-full flex items-center justify-center"
                      >
                        <MdDeleteOutline size={20} className="w-7 h-7" />
                      </button>
                    </div>
                    <div className="mt-2 text-xs text-gray-700">
                      <p>
                        {image.name.length > 20
                          ? image.name.slice(0, 20) + "..."
                          : image.name}
                      </p>
                      <p>{image.size} KB</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ImagesUpload.displayName = "ImagesUpload";

export default ImagesUpload;
