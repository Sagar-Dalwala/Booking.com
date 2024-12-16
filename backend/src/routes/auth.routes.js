import express from "express";

import { signInSchema, signUpSchema } from "../validator/auth.validator.js";

import { validateRequest } from "../middleware/validateRequest.middleware.js";

import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const router = express.Router();

router.route("/signup").post(validateRequest(signUpSchema), signUp);
router.route("/signin").post(validateRequest(signInSchema), signIn);
router.route("/signout").post(signOut);

export default router;
