import FormRow from "../components/FormRow";
import { Form, Link, redirect, useNavigation } from "react-router-dom";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const loginData = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", loginData);
    toast.success("Successful!");
    return redirect("/recipes");
  } catch (error: any) {
    return toast.error(error?.response?.data?.msg);
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <main className="h-screen grid place-items-center">
      <Form method="POST" className="form p-4 w-4/5 max-w-80">
        <div>
          <h3 className="text-center text-emerald-500 mb-4  text-xl capitalize tracking-wider">
            login
          </h3>
          <FormRow name="email" type="email" defaultValue="john@gmail.com" />
          <FormRow name="password" type="password" defaultValue="12345678" />
          <button
            type="submit"
            className="btn block my-4 w-full"
            disabled={isLoading}
          >
            login
          </button>
          <small className="flex justify-end gap-2">
            You are not a member ?
            <Link
              to="/register"
              className="text-emerald-500 capitalize tracking-wider font-bold hover:text-emerald-600 delay-200"
            >
              sign up
            </Link>
          </small>
        </div>
      </Form>
    </main>
  );
};
export default Login;
