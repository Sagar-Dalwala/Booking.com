import express from "express";

import { upload } from "../middleware/multer.middleware.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

import {
  createStay,
  deleteStay,
  getFilterStays,
  getFilterStaysByField,
  getLocations,
  getLocationsType,
  getPropertyType,
  getStayByStayId,
  getStays,
  getStaysBySearch,
  getTrendingDestinations,
  testingImageUpload,
  updateStay,
} from "../controllers/stay.controller.js";

import { validateRequest } from "../middleware/validateRequest.middleware.js";
import { createStaySchema } from "../validator/stay.validator.js";
import { preprocessFormData } from "../middleware/processFormData.js";

const router = express.Router();

//* Admin Side Stays - Routes

router
  .route("/create-stay")
  .post(
    authMiddleware,
    upload.array("images", 10),
    preprocessFormData,
    validateRequest(createStaySchema),
    createStay
  );

router
  .route("/update-stay/:id")
  .patch(
    authMiddleware,
    upload.array("images", 10),
    preprocessFormData,
    validateRequest(createStaySchema),
    updateStay
  );

router.route("/delete-stay/:id").delete(authMiddleware, deleteStay);

router.route("/get-stay/:id").get(authMiddleware, getStayByStayId);

router.route("/get-stays").get(authMiddleware, getStays);

//* User Side Stays

router.route("/property-type").get(getPropertyType);

router.route("/trending-destinations").get(getTrendingDestinations);

router.route("/locations").get(getLocations);

router.route("/locations/type/:locationType").get(getLocationsType);

router.route("/search").get(getStaysBySearch);

router.route("/filter-stays").get(getFilterStays);

router.route("/filter/fileds").get(getFilterStaysByField);

//! Testing
router.route("/testing").post(upload.array("images"), testingImageUpload);

export default router;
