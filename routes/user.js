import express from "express";
const router = express.Router();

import {
  getUserDetails,
  logout,
  signIn,
  signUp,
  updatePassword,
  updateProfile,
} from "../controllers/user.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.get("/logout", logout);
router.put("/profile", isAuthenticatedUser, updateProfile);
router.put("/updatePassword", isAuthenticatedUser, updatePassword);

export default router;
