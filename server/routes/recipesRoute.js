import { Router } from "express";
import {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getSingleRecipe,
  updateRecipe,
} from "../controllers/recipesController.js";
import {
  checkIdValidation,
  recipePostValidation,
} from "../middlewares/validations.js";
import upload from "../middlewares/multer.js";
export const recipeRoute = Router();

// get recipes
recipeRoute
  .route("/")
  .get(getRecipes)
  .post(upload.single("recipeAvatar"), addRecipe);
recipeRoute
  .route("/:id")
  .get(checkIdValidation, getSingleRecipe)
  .patch(upload.single("recipeAvatar"), updateRecipe)
  .delete(deleteRecipe);
