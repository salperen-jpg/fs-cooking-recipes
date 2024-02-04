import "express-async-errors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { recipeRoute } from "./routes/recipesRoute.js";
import { notFound } from "./middlewares/notFound.js";
import { connectDB } from "./db/connectDB.js";
import { errorHandlerMiddleware } from "./middlewares/errorHandler.js";
import { authRoute } from "./routes/authRoute.js";
import { userRoute } from "./routes/userRoute.js";
import { favoriteRouter } from "./routes/favoriteRoute.js";
import authMiddleware from "./middlewares/authMiddleware.js";
import cloudinary from "cloudinary";

dotenv.config();
const app = express();
// imports

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLODINARY_API_SECRET,
});

// middlewares
app.use(express.json());
app.use(cookieParser());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// routes
app.get("/api/v1", (req, res) => {
  res.send({ msg: "Hi There" });
});
// recipe route
app.use("/api/v1/recipes", authMiddleware, recipeRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", authMiddleware, userRoute);
app.use("/api/v1/favorites", authMiddleware, favoriteRouter);
// errors
app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

try {
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
} catch (error) {
  console.log(error);
}
