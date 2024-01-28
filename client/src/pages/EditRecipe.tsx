import { Form, redirect, useLoaderData, useNavigation } from "react-router-dom";
import { FormRow, FormSelect, FormTextarea } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import IRecipe from "../models/recipe.modal";

export const loader = async (data: any) => {
  const { id } = data.params;
  try {
    const {
      data: { recipe },
    } = await customFetch.get(`/recipes/${id}`);
    return recipe;
  } catch (error: any) {
    console.log(error?.response?.data?.msg);
  }
  return null;
};

export const action = async ({ request, params }: any) => {
  const { id } = params;
  const formData = await request.formData();
  const ingredientArr = formData.get("ingredients").split(",");
  try {
    const response = await customFetch.patch(`/recipes/${id}`, formData);
    toast.success(response.data.msg);
    return redirect("/recipes");
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const EditRecipe = () => {
  const recipe = useLoaderData() as IRecipe;
  const { name, cookingTime, ingredients, servings, mealCategory } = recipe;
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <section>
      <Form method="POST" encType="multipart/form-data" className="form">
        <h4>Edit Recipe</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="recipeAvatar">Recipe Image</label>
            <input type="file" name="recipeAvatar" id="recipeAvatar" />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="cookingTime"
            defaultValue={cookingTime}
            labelDisplay="cooking time"
          />
          <FormRow
            type="number"
            name="servings"
            defaultValue={servings.toString()}
          />
          <FormSelect
            name="mealCategory"
            labelDisplay="meal category"
            list={[
              "vegetarian",
              "breakfast",
              "lunches",
              "snacks",
              "dinner",
              "desserts",
            ]}
            defaultValue={mealCategory}
          />
          <FormTextarea
            name="ingredients"
            placeholder="'Please type ingredient comma separated!'"
            defaultValue={ingredients.join(",")}
          >
            {ingredients.join(",")}
          </FormTextarea>
          <button type="submit" className="btn submit-btn" disabled={isLoading}>
            Edit recipe
          </button>
        </div>
      </Form>
    </section>
  );
};

export default EditRecipe;
