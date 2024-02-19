import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import IRecipe from "../models/recipe.modal";
import { Loading, Title, SingleRecipe } from "../components";
import { QueryClient, useQuery } from "@tanstack/react-query";

export const recipesQuery = () => {
  return {
    queryKey: ["recipes"],
    queryFn: async (): Promise<IRecipe[]> => {
      const response = await customFetch.get("/recipes");
      return response.data.recipes;
    },
  };
};

export const loader = (queryClient: QueryClient) => {
  return async () => {
    try {
      return await queryClient.ensureQueryData(recipesQuery());
    } catch (error: any) {
      return toast.error(error?.response?.data?.msg);
    }
  };
};

const Recipes = () => {
  const { data: recipes } = useQuery(recipesQuery());
  if (recipes!.length < 1) {
    return (
      <>
        <Title title="Recipes" />
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
      <Title title="Recipes" />
      <section className="grid  md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 ">
        {recipes?.map((recipe) => {
          return <SingleRecipe key={recipe._id} {...recipe} />;
        })}
      </section>
    </>
  );
};

export default Recipes;
