import { nanoid } from "nanoid";

export const navbarLinks = [
  {
    id: nanoid(),
    text: "recipes",
    path: "/recipes",
  },
  {
    id: nanoid(),
    text: "add recipe",
    path: "addRecipe",
  },
  {
    id: nanoid(),
    text: "favorites",
    path: "favorites",
  },
  {
    id: nanoid(),
    text: "profile",
    path: "profile",
  },
  {
    id: nanoid(),
    text: "admin",
    path: "admin",
  },
];
