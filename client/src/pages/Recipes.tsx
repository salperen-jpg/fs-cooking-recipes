import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { useLoaderData, useNavigation } from "react-router-dom";
import IRecipe from "../models/recipe.modal";
import { Loading, Title, SingleRecipe } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/recipes");
    return response.data.recipes;
  } catch (error: any) {
    return toast.error(error?.response?.data?.msg);
  }
};

const Recipes = () => {
  const recipes = useLoaderData() as IRecipe[];
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  if (isPageLoading) return <Loading />;
  return (
    <>
      <Title title="Recipes" />
      <section className="grid  md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 ">
        {recipes.map((recipe) => {
          return <SingleRecipe key={recipe._id} {...recipe} />;
        })}
      </section>
    </>
  );
};

export default Recipes;
