import { Router } from "express";
import {
  addToFavorites,
  getFavorites,
  deleteFavorite,
} from "../controllers/favoritesController.js";

export const favoriteRouter = Router();

favoriteRouter.get("/", getFavorites);
favoriteRouter.post("/", addToFavorites);
favoriteRouter.delete("/:id", deleteFavorite);
