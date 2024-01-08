import styled from "styled-components";
import { Form, redirect, useLoaderData } from "react-router-dom";
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
    error?.response?.data?.msg;
  }
  return null;
};

export const action = async () => {
  return null;
};

const EditRecipe = () => {
  const recipe = useLoaderData() as IRecipe;
  const { name, cookingTime, ingredients, servings, mealCategory } = recipe;
  return (
    <Wrapper>
      <Form method='POST'>
        <h4>Edit Recipe</h4>
        <div className='form-center'>
          <FormRow type='text' name='name' defaultValue={name} />
          <FormRow
            type='text'
            name='cookingTime'
            defaultValue={cookingTime}
            labelDisplay='cooking time'
          />
          <FormRow
            type='number'
            name='servings'
            defaultValue={servings.toString()}
          />
          <FormSelect
            name='mealCategory'
            labelDisplay='meal category'
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
            name='ingredients'
            placeholder="'Please type ingredient comma separated!'"
            defaultValue={ingredients.join(",")}
          />
          <button type='submit' className='btn submit-btn'>
            Create recipe
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default EditRecipe;
