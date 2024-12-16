import express from "express";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateRequest } from "../middleware/validateRequest.middleware.js";

import { paramsSchema } from "../validator/params.validator.js";

import {
  addToHistory,
  addToSaved,
  getAuthUser,
  getUserSavedStays,
  getUserStayHistory,
  removeFromSaved,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/get-user").get(authMiddleware, getAuthUser);

router
  .route("/add-to-viewed-properties/:stayId")
  .patch(authMiddleware, validateRequest(paramsSchema, "params"), addToHistory);

router.route("/get-viewed-properties").get(authMiddleware, getUserStayHistory);

router.route("/add-to-wishlist/:stayId").patch(authMiddleware, addToSaved);
router.route("/remove-from-wishlist/:stayId").patch(authMiddleware, removeFromSaved);

router.route("/get-wishlist").get(authMiddleware, getUserSavedStays);

export default router;
