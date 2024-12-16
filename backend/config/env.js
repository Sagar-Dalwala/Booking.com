import dotenv from "dotenv";

// Load environment variables from the `.env` file
dotenv.config();

// Export configuration variables for use throughout the app
export const config = {
  server: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || "development",
  },
  database: {
    url: process.env.MONGODB_URL,
  },
  auth: {
    secret: process.env.AUTH_TOKEN_SECRET,
    expiry: process.env.AUTH_TOKEN_EXPIRY,
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  },
};
