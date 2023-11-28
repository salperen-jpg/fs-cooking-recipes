import { StatusCodes } from "http-status-codes";

const register = async (req, res) => {
  res.status(StatusCodes.OK).send("Register");
};

const login = async (req, res) => {
  res.status(StatusCodes.OK).send("Login");
};

const logout = async (req, res) => {
  res.status(StatusCodes.OK).send("Logut");
};

export { register, login, logout };
