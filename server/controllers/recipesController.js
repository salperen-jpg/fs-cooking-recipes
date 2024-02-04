import { formatImage } from "../middlewares/multer.js";
import Recipe from "../models/recipeModel.js";
import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";

// get recipes
const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({ createdBy: req.user.user });
  res.status(StatusCodes.OK).send({ recipes });
};

// add recipe
const addRecipe = async (req, res) => {
  const newRecipe = req.body;
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newRecipe.recipeAvatar = response.secure_url;
    newRecipe.recipeAvatarId = response.public_id;
  }
  newRecipe.createdBy = req.user.user;
  console.log(newRecipe);
  await Recipe.create(newRecipe);
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
  const newRecipe = req.body;
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newRecipe.recipeAvatar = response.secure_url;
    newRecipe.recipeAvatarId = response.public_id;
  }
  const updatedRecipe = await Recipe.findOneAndUpdate({ _id: id }, newRecipe);
  if (req.file && updateRecipe.recipeAvatarId) {
    await cloudinary.v2.uploader.destroy(updatedUser.recipeAvatarId);
  }
  console.log(updatedRecipe);
  res.status(StatusCodes.OK).json({ msg: "Updated successfully" });
};

// delete recipes
const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  await Recipe.findByIdAndDelete(id);
  res.status(200).send({ msg: "deleted successfully" });
};

export { getRecipes, addRecipe, getSingleRecipe, updateRecipe, deleteRecipe };
