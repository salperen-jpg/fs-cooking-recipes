import { Router } from "express";
import { admin, getUser, updateUser } from "../controllers/userController.js";
import upload from "../middlewares/multer.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";

export const userRoute = Router();

userRoute.get("/getUser", getUser);
userRoute.patch("/updateUser", upload.single("avatar"), updateUser);
userRoute.get("/admin", adminMiddleware("admin"), admin);
