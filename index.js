import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import userRouter from "./routes/user.js";
import tourRouter from "./routes/tour.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// muhammadkashif -- database user
// Va30BMCaKk7cHbAL -- database password

import errorMiddleware from "./middleware/error.js";
const app = express();
dotenv.config();

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json({ limit: "100mb", extended: true }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());

app.use("/users", userRouter);
app.use("/tour", tourRouter);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then((data) => {
    app.listen(PORT, () => {
      console.log(
        `server running on - http://localhost:${PORT}`,
        `\nmongodb connected with server - ${data.connection.host}`
      );
    });
  })
  .catch((err) => {
    console.log(err, "mongodb server did not connect");
  });
