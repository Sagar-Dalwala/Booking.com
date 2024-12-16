import jwt from "jsonwebtoken";
import { config } from "../../config/env.js";

const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, config.auth.secret, {
    expiresIn: "15d",
  });

  return token;
};

export { generateToken };
