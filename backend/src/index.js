import { config } from "../config/env.js";
import app from "./app.js";
import connectDB from "./db/connectDB.js";

connectDB().then(() => {
  app.listen(config.server.port, () => {
    console.log(` 🚀 Server is running on port ${config.server.port}`);
  });
});

export default app;
