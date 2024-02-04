import { toast } from "react-toastify";
import { RecipeProperty, Title } from "../components";
import { customFetch } from "../utils/customFetch";
import { Form, Link, redirect, useLoaderData } from "react-router-dom";
import IRecipe from "../models/recipe.modal";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import defaultImg from "../assets/default_food.jpg";
export const loader = async (data: any) => {
  const { id } = data.params;
  try {
    const { data } = await customFetch(`recipes/${id}`);
    return data.recipe;
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return redirect("/recipes");
  }
};

const Recipe = () => {
  const recipe = useLoaderData() as IRecipe;
  const {
    _id,
    name,
    recipeAvatar,
    cookingTime,
    ingredients,
    servings,
    mealCategory,
  } = recipe;
  return (
    <section className="wrapper-center">
      <Link
        to={"/recipes"}
        className="bg-emerald-400 capitalize font-bolder tracking-wider	p-4 rounded-md text-white -translate-y-6 inline-block w-auto hover:bg-emerald-600 duration-150"
      >
        back
      </Link>
      <Title title={name} />
      <div className="grid gap-4 lg:grid-cols-2 md:gap-12">
        <div>
          <img
            src={recipeAvatar || defaultImg}
            alt={name}
            style={{
              aspectRatio: "1/1",
              width: "90vw",
              maxWidth: "500px",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <RecipeProperty property="name" value={name} />
          <RecipeProperty property="category" value={mealCategory} />
          <RecipeProperty property="servings" value={servings} />
          <RecipeProperty property="cooking time" value={cookingTime} />
          <div className="recipe-info-container">
            <span className="recipe-info-property">ingredients</span>
            <span>
              {ingredients
                .map(
                  (ing) =>
                    ing.charAt(0).toUpperCase() + ing.slice(1).toLowerCase()
                )
                .join(",")}
            </span>
          </div>
          <div className="mt-8 flex gap-4">
            <Link to={`../editRecipe/${_id}`} className="btn text-xl">
              <MdEdit />
            </Link>
            <Form method="POST" action={`../deleteRecipe/${_id}`}>
              <button
                type="submit"
                className="btn bg-red-400 hover:bg-red-600 text-xl"
              >
                <MdDelete />
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Recipe;
