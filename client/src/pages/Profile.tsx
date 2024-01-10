import styled from "styled-components";
import { useRecipeContext } from "./RecipesLayout";
import { FormRow } from "../components";
import { Form } from "react-router-dom";

export const action = async (data: any) => {
  console.log(data);
  return null;
};

const Profile = () => {
  const { user } = useRecipeContext();
  return (
    <Wrapper>
      <Form method="POST">
        <h4>Profile</h4>
        <div className="form-center">
          <FormRow type="text" name="name" defaultValue={user?.name} />
          <FormRow
            type="text"
            name="lastName"
            labelDisplay="last name"
            defaultValue={user?.lastName}
          />
          <FormRow type="email" name="email" defaultValue={user?.email} />
          <button type="submit" className="btn">
            Edit
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default Profile;
