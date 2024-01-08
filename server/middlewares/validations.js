import { body, param, query, validationResult } from "express-validator";
import { BadRequest, Unauthorized } from "../errors/errorClasses.js";
import mongoose from "mongoose";
import Recipe from "../models/recipeModel.js";
import User from "../models/userModel.js";
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
// recipe validations
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

// user validations

const registerPostChain = [
  body("name").notEmpty().withMessage("name can not be empty"),
  body("lastName").notEmpty().withMessage("last name can not be empty"),
  body("password")
    .notEmpty()
    .withMessage("password can not be empty")
    .isLength({ min: 8 })
    .withMessage("password can not be shorter than 8 char."),
  body("email")
    .notEmpty()
    .withMessage("name can not be empty")
    .isEmail()
    .withMessage("Email format is not supported")
    .custom(async (val) => {
      const isEmailInUse = await User.findOne({ email: val });
      if (isEmailInUse) throw new BadRequest("Email in use!");
    }),
];

export const registerPostValidation = validationMiddleware(registerPostChain);

// login validation

const loginPostChain = [
  body("email")
    .notEmpty()
    .withMessage("Mail can not be empty!")
    .isEmail()
    .withMessage("Email is not valid!"),
  body("password")
    .notEmpty()
    .withMessage("password can not be empty")
    .isLength({ min: 8 })
    .withMessage("Password should be at least 8 char!"),
];

export const loginPostValidation = validationMiddleware(loginPostChain);

// const id validation

const idValidationChain = [
  param("id").custom(async (id, { req }) => {
    const isIdValid = mongoose.isValidObjectId(id);
    if (!isIdValid) throw new Error("Invalid MongoDB Id!");
    const actualRecipe = await Recipe.findOne({ _id: req.params.id });
    if (!actualRecipe) throw new Error(`No recipe with the id of ${id}`);
    if (actualRecipe.createdBy.toString() !== req.user.user) {
      throw new Unauthorized(`Not authorized`);
    }
  }),
];

export const checkIdValidation = validationMiddleware(idValidationChain);
