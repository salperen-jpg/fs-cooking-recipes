import FormRow from "../components/FormRow";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const registerData = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", registerData);
    toast.success("Registered successfully !");
    return redirect("/login");
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const Register = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="form p-4 w-4/5 max-w-80 ">
        <div>
          <h3 className="text-center text-emerald-500 mb-4  text-xl capitalize tracking-wider">
            register
          </h3>
          <FormRow name="name" type="text" defaultValue="john" />
          <FormRow
            name="lastName"
            labelDisplay="last name"
            type="text"
            defaultValue="doe"
          />
          <FormRow name="email" type="email" defaultValue="john@gmail.com" />
          <FormRow name="password" type="password" defaultValue="12345678" />
          <button
            type="submit"
            className="btn block my-4 w-full"
            disabled={isLoading}
          >
            register
          </button>
          <small className="flex justify-end gap-2">
            Already a member ?
            <Link
              to="/login"
              className="text-emerald-500 capitalize tracking-wider font-bold hover:text-emerald-600 delay-200"
            >
              sign in
            </Link>
          </small>
        </div>
      </Form>
    </section>
  );
};

export default Register;
