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
  .post(upload.single("recipeAvatar"), recipePostValidation, addRecipe);
recipeRoute
  .route("/:id")
  .get(checkIdValidation, getSingleRecipe)
  .patch(updateRecipe)
  .delete(deleteRecipe);
