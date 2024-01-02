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
import authMiddleware from "./middlewares/authMiddleware.js";

dotenv.config();
const app = express();
// imports

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
