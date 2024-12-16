import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { config } from "../../config/env.js";

cloudinary.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret,
});


const uploadOnCloudinary = async (filePaths) => {
  try {
    // Upload all files in parallel
    const uploadPromises = filePaths.map(async (filePath) => {
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          resource_type: "auto",
        });

        // Delete the temporary file after uploading
        await fs.promises.unlink(filePath);

        // Return the relevant data for the uploaded image
        return {
          url: result.secure_url,
          public_id: result.public_id,
        };
      } catch (error) {
        console.error(`Error uploading file ${filePath} to Cloudinary:`, error);
        throw new Error(`Error uploading image ${filePath} to Cloudinary`);
      }
    });

    // Wait for all uploads to complete
    const uploadedImages = await Promise.all(uploadPromises);

    return uploadedImages;
  } catch (error) {
    console.error("Error during parallel uploads:", error);
    throw error;
  }
};

// Function to delete an image from Cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error);
    throw new Error("Error deleting image from Cloudinary");
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
