import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import { Link, useLoaderData } from "react-router-dom";
import IRecipe from "../models/recipe.modal";
import { SingleRecipe, Title } from "../components";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { favoritesQuery } from "../hooks/useFavorites";

export const loader = (queryClient: QueryClient) => {
  return async () => {
    try {
      const response = await customFetch("/favorites");
      await queryClient.ensureQueryData(favoritesQuery());
      return response.data.favorites;
    } catch (error: any) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };
};

const Favorites = () => {
  // const favorites = useLoaderData() as IRecipe[];
  const { data: favorites } = useQuery(favoritesQuery());
  if (favorites!.length < 1) {
    return (
      <>
        <Title title="Favorites" />
        <div>
          <h3>you don't have any favorite food yet!</h3>
          <Link to={`/recipes`} className="btn">
            Add some
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Title title="Favorites" />
      <section className="grid  md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 ">
        {favorites?.map((recipe) => {
          return <SingleRecipe key={recipe._id} {...recipe} favorite />;
        })}
      </section>
    </>
  );
};
export default Favorites;
