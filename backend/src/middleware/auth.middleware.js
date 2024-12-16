import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { apiError } from "../utils/apiError.js";
import { config } from "../../config/env.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return apiError(res, 401, "Unauthorized request.");
    }

    const decodedToken = jwt.verify(token, config.auth.secret);

    const user = await User.findById(decodedToken._id).select("-password");

    if (!user) {
      return apiError(res, 401, "Invalid Authorization Token.");
    }

    req.user = user;
    next();
  } catch (error) {
    return apiError(res, 401, error?.message || "Invalid Authorization Token.");
  }
};
