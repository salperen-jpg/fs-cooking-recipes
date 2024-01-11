import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";

const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user });
  const userPassExcluded = user.excludePass();
  res.status(StatusCodes.OK).json({ user: userPassExcluded });
};

const updateUser = async (req, res) => {
  const { user: id } = req.user;
  // check password
  const newProfile = { ...req.body };
  console.log(newProfile);
  await User.findByIdAndUpdate(id, newProfile);
  res.status(StatusCodes.OK).json({ msg: "User Updated!" });
};

export { getUser, updateUser };
