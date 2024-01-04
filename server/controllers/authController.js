import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordHashing.js";
import User from "../models//userModel.js";
import { createJWT } from "../utils/jwt.js";
import { Unauthenticated } from "../errors/errorClasses.js";
const register = async (req, res) => {
  const { password } = req.body;
  const hashedPass = await hashPassword(password);
  req.body.password = hashedPass;
  const user = await User.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "user created successfully!", user });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const specificUser = await User.findOne({ email: email });
  const isPassCorrect = await comparePassword(password, specificUser.password);
  if (!specificUser || !isPassCorrect) {
    throw new Unauthenticated("invalid credentials");
  }
  // create jwt and attach the cookie
  const token = createJWT({ user: specificUser.id });
  console.log(token);

  const oneDayInMs = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDayInMs),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).send("Login");
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).send("Logout");
};

export { register, login, logout };
