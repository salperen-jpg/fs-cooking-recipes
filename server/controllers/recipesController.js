import Recipe from "../models/recipeModel.js";
import { StatusCodes } from "http-status-codes";

// get recipes
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({});
  res.status(StatusCodes.OK).send({ recipes });
};

// add recipe
const addRecipe = async (req, res) => {
  console.log(req.body);
  const newRecipe = await Recipe.create(req.body);
  res.status(StatusCodes.CREATED).send({ msg: "recipe created successfully" });
};

// get recipe
const getSingleRecipe = async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.findById(id);
  res.status(StatusCodes.OK).send({ recipe });
};

// update recipes
const updateRecipe = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  await Recipe.findOneAndUpdate({ _id: id }, req.body, { new: true });
  res.status(StatusCodes.OK).json({ msg: "Updated successfully" });
};

// delete recipes
const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  await Recipe.findByIdAndDelete(id);
  res.status(200).send({ msg: "deleted successfully" });
};

export { getRecipes, addRecipe, getSingleRecipe, updateRecipe, deleteRecipe };
