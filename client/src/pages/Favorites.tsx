import { toast } from "react-toastify";
import { customFetch } from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import IRecipe from "../models/recipe.modal";
import { SingleRecipe, Title } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch("/favorites");
    return response.data.favorites;
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const Favorites = () => {
  const favorites = useLoaderData() as IRecipe[];

  return (
    <>
      <Title title="Favorites" />
      <section className="grid  md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 ">
        {favorites.map((recipe) => {
          return <SingleRecipe key={recipe._id} {...recipe} favorite />;
        })}
      </section>
    </>
  );
};
export default Favorites;
