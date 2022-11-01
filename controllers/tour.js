import mongoose from "mongoose";
import TourModel from "../models/tour.js";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorHandler.js";

export const createTour = catchAsyncError(async (req, res, next) => {
  const tour = req.body;

  const newTour = new TourModel({
    ...tour,
    creator: req.user._id,
    createdAt: new Date().toISOString(),
  });

  await newTour.save();
  res.status(201).json({
    success: true,
    newTour,
  });
});

export const getTours = catchAsyncError(async (req, res, next) => {
  const tours = await TourModel.find();

  res.status(200).json({
    success: true,
    tours,
  });
});

// get single tour --
export const getTour = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  const tour = await TourModel.findById(id);

  res.status(200).json({
    success: true,
    tour,
  });
});

export const getToursByUser = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("User doesn't exist", 404));
  }

  const userTours = await TourModel.find({ creator: id });

  res.status(200).json({
    success: true,
    userTours,
  });
});

export const updateTour = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { title, description, name, tags, imageFile } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler(`Tour not exist with this id ${id}`, 404));
  }

  const updatedTour = {
    _id: id,
    title,
    description,
    name,
    tags,
    imageFile,
  };

  await TourModel.findByIdAndUpdate(id, updatedTour, {
    new: true,
  });

  res.status(200).json({
    success: true,
    updatedTour,
  });
});

export const deleteTour = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler(`Tour not exist with this id ${id}`, 404));
  }

  await TourModel.findByIdAndRemove(id);

  res.status(200).json({
    success: true,
  });
});

export const getToursBySearch = catchAsyncError(async (req, res, next) => {
  const { searchQuery } = req.query;

  const title = new RegExp(searchQuery, "i");

  const tours = await TourModel.find({ title });

  res.json(tours);
});

export const getToursByTag = catchAsyncError(async (req, res, next) => {
  const { tag } = req.params;

  const tours = await TourModel.find({ tags: { $in: tag } });

  res.json(tours);
});

export const getRelatedTours = catchAsyncError(async (req, res, next) => {
  const { tags } = req.body;

  const tours = await TourModel.find({ tag: { $in: tags } });

  res.json(tours);
});

export const likeTour = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;

  if (!req.user._id) {
    return next(new ErrorHandler(`User is not authenticated`, 404));
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler(`Tour not exist with this id ${id}`, 404));
  }

  const tour = await TourModel.findById(id);

  const index = tour.likes.findIndex((id) => id === String(req.user._id));

  if (index === -1) {
    tour.likes.push(req.user._id);
  } else {
    tour.likes = tour.likes.filter((id) => id !== String(req.user._id));
  }

  const updatedTour = await TourModel.findByIdAndUpdate(id, tour, {
    new: true,
  });

  res.status(200).json({
    success: true,
    updatedTour,
  });
});
