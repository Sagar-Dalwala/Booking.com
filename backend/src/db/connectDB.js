import mongoose from "mongoose";
import { DB_NAME } from "../utils/constant.js";
import { config } from "../../config/env.js";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${config.database.url}/${DB_NAME}`
    );
    console.log("MongoDB connected", conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection error : ", error);
    process.exit(1);
  }
};

export default connectDB;
