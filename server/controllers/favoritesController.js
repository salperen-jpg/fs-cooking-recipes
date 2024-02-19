import { StatusCodes } from "http-status-codes";
import Favorites from "../models/favoritesModel.js";
import Recipe from "../models/recipeModel.js";

const getFavorites = async (req, res) => {
  const favoriteRecipes = await Favorites.find({ createdBy: req.user.user });
  const currentUserFavoritesPromises = favoriteRecipes.map(async (fav) => {
    return await Recipe.findById(fav.recipeId);
  });
  try {
    const currentUserFavorites = await Promise.all(
      currentUserFavoritesPromises
    );
    return res.status(StatusCodes.OK).json({ favorites: currentUserFavorites });
  } catch (error) {
    return (
      res.status(StatusCodes.BAD_REQUEST), json({ msg: "Something went wrong" })
    );
  }
};

const addToFavorites = async (req, res) => {
  const { recipeId, isFavorite } = req.body;
  // all favorite recipes
  const currentUserFavoriteRecipes = await Favorites.find({
    createdBy: req.user.user,
  });
  const favoriteRecipe = { recipeId, createdBy: req.user.user };
  await Favorites.create(favoriteRecipe);
  res.status(StatusCodes.OK).json({ msg: "Added to favorites!" });
};

const deleteFavorite = async (req, res) => {
  const { id } = req.params;
  const removedOne = await Favorites.findOneAndDelete({ recipeId: id });
  res.status(StatusCodes.OK).json({ msg: "removed succesfully!" });
};

export { getFavorites, addToFavorites, deleteFavorite };
