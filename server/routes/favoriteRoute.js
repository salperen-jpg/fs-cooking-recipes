import { Router } from "express";
import {
  addToFavorites,
  getFavorites,
} from "../controllers/favoritesController.js";

export const favoriteRouter = Router();

favoriteRouter.get("/", getFavorites);
favoriteRouter.post("/", addToFavorites);
