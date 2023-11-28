import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";

export const authRoute = Router();

authRoute.post("/register", register);
authRoute.post("/login", login);
authRoute.get("/logout", logout);
