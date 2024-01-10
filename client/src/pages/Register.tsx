import styled from "styled-components";
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
    <Wrapper>
      <Form method="POST" className="form">
        <div className="form-cen">
          <h4>register</h4>
          <FormRow name="name" type="text" defaultValue="john" />
          <FormRow
            name="lastName"
            labelDisplay="last name"
            type="text"
            defaultValue="doe"
          />
          <FormRow name="email" type="email" defaultValue="john@gmail.com" />
          <FormRow name="password" type="password" defaultValue="12345678" />
          <button type="submit" className="btn" disabled={isLoading}>
            register
          </button>
          <small>
            Already a member ?
            <Link to="/login" className="navigation-btn">
              sign in
            </Link>
          </small>
        </div>
      </Form>
    </Wrapper>
  );
};

export const Wrapper = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
  .form {
    padding: 1.5rem 1rem;
    width: var(--fluid-width);
    max-width: 25rem;
  }
  .form .form-cen {
    width: 90%;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
  }
  .form h4 {
    text-align: center;
    text-transform: capitalize;
    color: var(--primary-500);
  }

  small {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.75rem;
  }
  .navigation-btn {
    padding: 0.5rem 0;
    position: relative;
    color: var(--primary-500);
    text-transform: capitalize;
  }
  .navigation-btn::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-500);
    transition: all 0.3s linear;
  }
  .navigation-btn:hover::after {
    width: 100%;
  }
`;
export default Register;
