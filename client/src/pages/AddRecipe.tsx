import { Form, redirect } from "react-router-dom";
import { FormRow, FormSelect, FormTextarea } from "../components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { QueryClient } from "@tanstack/react-query";

export const action = (queryClient: QueryClient) => {
  return async ({ request }: any) => {
    const formData = await request.formData();
    // ingredits should be array of string in the server.
    const ingredientsArray = formData.get("ingredients").split(",");
    const recipe = Object.fromEntries(formData);
    recipe.ingredients = ingredientsArray;
    try {
      const response = await customFetch.post("/recipes", formData);
      await queryClient.invalidateQueries({ queryKey: ["recipes"] });
      toast.success(response.data.msg);
      return redirect("/recipes");
    } catch (error: any) {
      return toast.error(error?.response?.data?.msg);
    }
  };
};

const AddRecipe = () => {
  return (
    <section>
      <Form method="POST" encType="multipart/form-data" className="form">
        <h4>Create Recipe</h4>
        <div className="form-center ">
          <div className="form-row ">
            <label htmlFor="recipeAvatar">Recipe Image</label>
            <input type="file" name="recipeAvatar" id="recipeAvatar" />
          </div>
          <FormRow type="text" name="name" defaultValue="Kebab" />
          <FormRow
            type="text"
            name="cookingTime"
            defaultValue="30min"
            labelDisplay="cooking time"
          />
          <FormRow type="number" name="servings" defaultValue="3" />
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
            defaultValue="dinner"
          />
          <FormTextarea
            name="ingredients"
            placeholder="'Please type ingredient comma separated!'"
          />
          <button type="submit" className="btn submit-btn">
            Create recipe
          </button>
        </div>
      </Form>
    </section>
  );
};

export default AddRecipe;
