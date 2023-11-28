import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  // image and more is coming
});

export default model("User", userSchema);
