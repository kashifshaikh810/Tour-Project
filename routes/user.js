import express from "express";
const router = express.Router();

import { getUserDetails, logout, signIn, signUp } from "../controllers/user.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.get("/logout", logout);

export default router;
