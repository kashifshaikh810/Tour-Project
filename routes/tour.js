import express from "express";
const router = express.Router();

import {
  createTour,
  deleteTour,
  getAllTags,
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
router.get("/relatedTours", getRelatedTours);
router.get("/allTours", getTours);
router.get("/:id", getTour);
router.get("/", getAllTags);

// auth -
router.post("/", isAuthenticatedUser, createTour);
router.get("/userTours/:id", isAuthenticatedUser, getToursByUser);
router.delete("/:id", isAuthenticatedUser, deleteTour);
router.put("/:id", isAuthenticatedUser, updateTour);
router.put("/likeTour/:id", isAuthenticatedUser, likeTour);

export default router;
