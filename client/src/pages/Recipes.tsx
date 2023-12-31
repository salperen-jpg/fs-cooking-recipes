import styled from "styled-components";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import { Form, Link, useLoaderData } from "react-router-dom";
import IRecipe from "../models/recipe.modal";

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
  return (
    <Wrapper>
      {recipes.map((recipe) => {
        const { name, _id } = recipe;
        return (
          <div key={_id}>
            <h4>{name}</h4>
            <div className='btn-container'>
              <Link to={`./editRecipe/${_id}`} className='btn'>
                Edit
              </Link>
              <Form method='POST' action={`./deleteRecipe/${_id}`}>
                <button type='submit' className='btn'>
                  delete
                </button>
              </Form>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Recipes;
