import express from "express";
const router = express.Router();

import {
  createTour,
  deleteTour,
  getRelatedTours,
  getTour,
  getTours,
  getToursBySearch,
  getToursByTag,
  getToursByUser,
  likeTour,
  updateTour,
} from "../controllers/tour.js";
import { isAuthenticatedUser } from "../middleware/auth.js";

// without auth -
router.get("/search", getToursBySearch);
router.get("/tag/:tag", getToursByTag);
router.post("/relatedTours", getRelatedTours);
router.get("/", getTours);
router.get("/:id", getTour);

// auth -
router.post("/", isAuthenticatedUser, createTour);
router.get("/userTours/:id", isAuthenticatedUser, getToursByUser);
router.delete("/:id", isAuthenticatedUser, deleteTour);
router.put("/:id", isAuthenticatedUser, updateTour);
router.put("/likeTour/:id", isAuthenticatedUser, likeTour);

export default router;
