import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController.js";

export const userRoute = Router();

userRoute.get("/getUser", getUser);
userRoute.patch("/updateUser", updateUser);
