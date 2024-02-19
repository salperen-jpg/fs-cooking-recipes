import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import IRecipe from "../models/recipe.modal";
import { useQuery } from "@tanstack/react-query";

export const favoritesQuery = () => {
  return {
    queryKey: ["favorites"],
    queryFn: async () => {
      const { data } = await customFetch("/favorites");
      return data.favorites as IRecipe[];
    },
  };
};

const useFavorites = () => {
  const { isLoading, data } = useQuery(favoritesQuery());

  console.log(data);

  return { isLoading, favorites: data };
};
export default useFavorites;
