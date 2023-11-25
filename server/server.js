import "express-async-errors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import { recipeRoute } from "./routes/recipesRoute.js";
import { notFound } from "./middlewares/notFound.js";
dotenv.config();
const app = express();
// imports

// middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.send("Hi there");
});
// recipe route
app.use("/api/v1/recipes", recipeRoute);

// errors
app.use(notFound);

const PORT = process.env.PORT || 5000;

try {
  // first connect to DB after setting up
  app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
} catch (error) {
  console.log(error);
}
