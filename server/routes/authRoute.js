import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import {
  loginPostValidation,
  registerPostValidation,
} from "../middlewares/validations.js";

export const authRoute = Router();

authRoute.post("/register", registerPostValidation, register);
authRoute.post("/login", loginPostValidation, login);
authRoute.get("/logout", logout);
