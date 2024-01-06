import User from "../models/userModel.js";
import { StatusCodes } from "http-status-codes";

const getUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.user });
  const userPassExcluded = user.excludePass();
  res.status(StatusCodes.OK).json({ user: userPassExcluded });
};

const updateUser = async (req, res) => {
  res.send("User updated!");
};

export { getUser, updateUser };
