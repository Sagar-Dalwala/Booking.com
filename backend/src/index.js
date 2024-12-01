import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

const app = express();
dotenv.config();

app.use(cors("*"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 8000, () => {
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
});

export default app;
