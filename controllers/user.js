import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import catchAsyncError from "../middleware/catchAsyncError.js";
import ErrorHandler from "../middleware/errorHandler.js";
import sendToken from "../middleware/JwtToken.js";

import UserModel from "../models/user.js";

const secret = "tour_db";

export const signUp = catchAsyncError(async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  const oldUser = await UserModel.findOne({ email });

  if (oldUser) {
    return next(new ErrorHandler("User already exists", 400));
  }

  const hashPassword = await bcrypt.hash(password, 12);

  const result = await UserModel.create({
    email,
    password: hashPassword,
    name: `${firstName} ${lastName}`,
  });

  const token = jwt.sign({ email: result.email, id: result._id }, secret, {
    expiresIn: "1day",
  });

  sendToken(result, 201, res, token);
});

export const signIn = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  const oldUser = await UserModel.findOne({ email });

  if (!oldUser) {
    return next(new ErrorHandler("User doesn't exists", 404));
  }

  const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

  if (!isPasswordCorrect) {
    return next(new ErrorHandler("Invalid credentials", 400));
  }

  const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
    expiresIn: "1day",
  });

  sendToken(oldUser, 201, res, token);
});

export const getUserDetails = catchAsyncError(async (req, res, next) => {
  const user = await UserModel.findById(req.user._id);

  res.status(200).json({
    success: true,
    user,
  });
});
