import express from "express";
const router = express.Router();

import { getUserDetails, signIn, signUp } from "../controllers/user.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/me", isAuthenticatedUser, getUserDetails);

export default router;
