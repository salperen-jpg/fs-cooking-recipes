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
export const recipeRoute = Router();

// get recipes
recipeRoute.route("/").get(getRecipes).post(recipePostValidation, addRecipe);
recipeRoute
  .route("/:id")
  .get(checkIdValidation, getSingleRecipe)
  .patch(updateRecipe)
  .delete(deleteRecipe);
