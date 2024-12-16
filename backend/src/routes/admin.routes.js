import express from "express";

import { validateRequest } from "../middleware/validateRequest.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

import { staticCreateAdminSchema } from "../validator/admin.validator.js";

import {
  staticCreateAdmin,
  updateAdmin,
} from "../controllers/admin.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router
  .route("/static-create")
  .post(validateRequest(staticCreateAdminSchema), staticCreateAdmin);

router
  .route("/update-admin")
  .post(authMiddleware, upload.array("images"), updateAdmin);

export default router;
