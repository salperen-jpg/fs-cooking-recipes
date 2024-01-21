import { Router } from "express";
import { getUser, updateUser } from "../controllers/userController.js";
import upload from "../middlewares/multer.js";

export const userRoute = Router();

userRoute.get("/getUser", getUser);
userRoute.patch("/updateUser", upload.single("avatar"), updateUser);
