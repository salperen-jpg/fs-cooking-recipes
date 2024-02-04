interface ISingleRecipeProp {
  favorite?: boolean;
}

import IRecipe from "../models/recipe.modal";
import { FaPlateWheat, FaClock } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import { RecipeProperty } from ".";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import defaultImg from "../assets/default_food.jpg";
import useFavorites from "../hooks/useFavorites";
const SingleRecipe: React.FC<IRecipe & ISingleRecipeProp> = ({
  _id,
  name,
  recipeAvatar,
  cookingTime,
  servings,
  mealCategory,
  favorite,
}) => {
  const { isLoading, favorites } = useFavorites();

  const addToFavorites = async () => {
    try {
      const response = await customFetch.post("/favorites", { recipeId: _id });
      toast.success(response.data.msg);
    } catch (error: any) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const removeFromFavorites = async () => {
    try {
      const response = await customFetch.delete(`/favorites/${_id}`);
      toast.success(response.data.msg);
    } catch (error: any) {
      toast.error(error?.response?.data?.msg);
    }
  };

  const isIncludedInFav = favorites?.find((fav) => fav._id === _id);

  return (
    <article className="relative bg-white my-8 rounded-md shadow-sm hover:shadow-md  duration-150 hover:scale-105">
      {!favorite && (
        <button
          type="button"
          className="text-red-700 absolute top-1 right-1 text-xl"
          onClick={isIncludedInFav ? undefined : addToFavorites}
        >
          {isIncludedInFav ? <MdOutlineFavorite /> : <MdFavoriteBorder />}
        </button>
      )}
      <div>
        {recipeAvatar ? (
          <img
            src={recipeAvatar}
            alt={name}
            className="w-32 h-32 rounded-full block mx-auto -translate-y-2/4 border-emerald-400 border-4	"
          />
        ) : (
          <img
            src={defaultImg}
            alt={name}
            className="w-32 h-32 rounded-full block mx-auto -translate-y-2/4 border-emerald-400 border-4	"
          />
        )}
      </div>
      <div className="-translate-y-8 px-4">
        <h3 className="text-red-600 mb-4 font-bold text-center capitalize tracking-wide">
          {name}
        </h3>
        <RecipeProperty property="category" value={mealCategory} />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">
              <FaPlateWheat />
            </span>
            <span className="text-lg">{servings}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">
              <FaClock />
            </span>
            <span className="text-lg">{cookingTime}</span>
          </div>
        </div>
        <Link
          to={`./${_id}`}
          className="w-full block text-center mt-4 bg-emerald-400 py-2 rounded-md text-white capitalize tracking-wider font-bold"
        >
          check it out
        </Link>
        {favorite && (
          <button
            type="button"
            className="w-full block text-center mt-4 bg-red-400 py-2 rounded-md text-white capitalize tracking-wider font-bold"
            onClick={removeFromFavorites}
          >
            remove from favorites
          </button>
        )}
      </div>
    </article>
  );
};
export default SingleRecipe;
