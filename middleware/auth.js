import jwt from "jsonwebtoken";
import ErrorHandler from "./errorHandler.js";
import UserModel from "../models/user.js";

const secret = "tour_db";

export const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, secret);

  req.user = await UserModel.findById(decodedData.id);

  next();
};
