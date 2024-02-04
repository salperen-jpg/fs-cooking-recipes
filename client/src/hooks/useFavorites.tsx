import { useEffect, useState } from "react";
import { customFetch } from "../utils/customFetch";
import IRecipe from "../models/recipe.modal";

const useFavorites = () => {
  const [favorites, setFavorites] = useState<undefined | IRecipe[]>();
  const [isLoading, setIsLoading] = useState(true);

  const getFavorites = async () => {
    try {
      const {
        data: { favorites },
      } = await customFetch("/favorites");
      setFavorites(favorites);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFavorites();
  }, []);
  return { isLoading, favorites };
};
export default useFavorites;
