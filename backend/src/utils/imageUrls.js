import path from "path";
import { uploadOnCloudinary } from "./cloudinary.js";

export const imageUrls = async (req, res) => {
  const imagesPath = req?.files?.map((file) => path.resolve(file.path));

  const images = await uploadOnCloudinary(imagesPath);

  if (!images || images?.length === 0) {
    return res.status(500).json({
      message: "No images uploaded",
    });
  }

  const imageUrls = images?.map((image) => image?.url);

  return imageUrls;
};
