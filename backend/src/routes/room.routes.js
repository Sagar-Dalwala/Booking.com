import express from "express";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { validateRequest } from "../middleware/validateRequest.middleware.js";

import {
  createRoomSchema,
  updateRoomSchema,
} from "../validator/room.validator.js";
import { paramsSchema } from "../validator/params.validator.js";

import {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoomByRoomId,
} from "../controllers/room.controller.js";

const router = express.Router();

router
  .route("/create-room/:stayId/:adminId")
  .post(
    authMiddleware,
    validateRequest(paramsSchema, "params"),
    validateRequest(createRoomSchema),
    createRoom
  );

router
  .route("/update-room/:id/:adminId")
  .patch(
    authMiddleware,
    validateRequest(paramsSchema, "params"),
    validateRequest(updateRoomSchema, "body"),
    updateRoom
  );

router
  .route("/delete-room/:id/:adminId")
  .delete(authMiddleware, validateRequest(paramsSchema, "params"), deleteRoom);

router
  .route("/get-room/:id")
  .get(
    authMiddleware,
    validateRequest(paramsSchema, "params"),
    getRoomByRoomId
  );

// router.route("/get-rooms").get(authMiddleware, getRoomsByStay);

export default router;
