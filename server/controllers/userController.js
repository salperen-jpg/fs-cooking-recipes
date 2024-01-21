import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import { formatImage } from "../middlewares/multer.js";
import { log } from "console";

const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user });
  const userPassExcluded = user.excludePass();
  res.status(StatusCodes.OK).json({ user: userPassExcluded });
};

const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  const { user: id } = req.user;
  // check password

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(id, newUser);
  // destroy old image
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  console.log(updatedUser);
  res.status(StatusCodes.OK).json({ msg: "User Updated!" });
};

export { getUser, updateUser };
