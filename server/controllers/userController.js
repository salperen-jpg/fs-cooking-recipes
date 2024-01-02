import User from "../models/userModel.js";

const getUser = async (req, res) => {
  console.log(req.user);
  const user = await User.findOne({ _id: req.user.user });
  const userPassExcluded = user.excludePass();
  res.send({ user: userPassExcluded });
};

const updateUser = async (req, res) => {
  res.send("User updated!");
};

export { getUser, updateUser };
