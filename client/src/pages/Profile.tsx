import styled from "styled-components";
import { useRecipeContext } from "./RecipesLayout";
import { FormRow } from "../components";
import { Form } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const newUserData = Object.fromEntries(formData);
  try {
    const response = await customFetch.patch("/user/updateUser", newUserData);
    console.log(response);
    return toast.success(response.data.msg);
  } catch (error: any) {
    return toast.error(error?.response?.data?.msg);
  }
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

const Wrapper = styled.section`
  .form-center {
    align-items: flex-end;
  }
  .btn {
    padding: 0.75rem 1rem;
    border: none;
  }
`;
export default Profile;
