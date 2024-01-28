import { useRecipeContext } from "./RecipesLayout";
import { FormRow } from "../components";
import { Form } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  // const newUserData = Object.fromEntries(formData);
  console.log(formData);
  const avatar = formData.get("avatar");
  if (avatar.size > 800000) {
    toast.error("Avatar can not be bigger than 8MB!");
    return null;
  }
  try {
    const response = await customFetch.patch("/user/updateUser", formData);
    return toast.success(response.data.msg);
  } catch (error: any) {
    return toast.error(error?.response?.data?.msg);
  }
};

const Profile = () => {
  const { user } = useRecipeContext();
  return (
    <section>
      <Form method="POST" encType="multipart/form-data" className="form">
        <h4>Profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar">photo</label>
            <input type="file" name="avatar" id="avatar" />
          </div>
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
    </section>
  );
};

export default Profile;
