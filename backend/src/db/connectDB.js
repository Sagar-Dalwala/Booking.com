import mongoose from "mongoose";
import { DB_NAME } from "../db/constant.js";

const connectDB = async () => {
  try {
    const conn = await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);;
    console.log("MongoDB connected", conn.name);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
