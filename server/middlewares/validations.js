import { body, query, validationResult } from "express-validator";
import { BadRequest } from "../errors/errorClasses.js";

const validationMiddleware = (chain) => {
  return [
    chain,
    (req, res, next) => {
      const result = validationResult(req);
      console.log(result.errors.length);
      if (result.errors.length > 0) {
        const errorMessage = result.errors.map((err) => err.msg).join(",");
        throw new BadRequest(errorMessage);
      }
      next();
    },
  ];
};

const recipePostChain = [
  body("name").notEmpty().withMessage("Meal name can not be empty"),
  body("ingredients")
    .isArray()
    .notEmpty()
    .withMessage("Ingredients can not be empty"),
  body("cookingTime").notEmpty().withMessage("Cooking time can not be empty"),
  body("servings").notEmpty().withMessage("Servings can not be empty"),
  body("mealCategory").notEmpty().withMessage("Meal category can not be empty"),
];

export const recipePostValidation = validationMiddleware(recipePostChain);
