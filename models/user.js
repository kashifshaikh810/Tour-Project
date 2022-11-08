import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  googleId: {
    type: String,
    required: false,
  },
  id: {
    type: String,
  },
  token: {
    type: String,
  },
  imageProfile: {
    type: String,
  },
  updatedAt: {
    type: Date,
  },
});

export default mongoose.model("User", userSchema);
