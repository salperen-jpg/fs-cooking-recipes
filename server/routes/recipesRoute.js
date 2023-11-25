import { Router } from "express";
import {
  addRecipe,
  deleteRecipe,
  getRecipes,
  getSingleRecipe,
  updateRecipe,
} from "../controllers/recipesController.js";

export const recipeRoute = Router();

// get recipes
recipeRoute.route("/").get(getRecipes).post(addRecipe);
recipeRoute
  .route("/:id")
  .get(getSingleRecipe)
  .patch(updateRecipe)
  .delete(deleteRecipe);
