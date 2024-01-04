import styled from 'styled-components';
import FormRow from '../components/FormRow';
import { Form, redirect } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const registerData = Object.fromEntries(formData);
  console.log(registerData);
  try {
    const response = await customFetch.post('/auth/register', registerData);
    toast.success('Registered successfully !');
    return redirect('/login');
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <div className='form-cen'>
          <h4>register</h4>
          <FormRow name='name' type='text' defaultValue='john' />
          <FormRow
            name='lastName'
            labelDisplay='last name'
            type='text'
            defaultValue='doe'
          />
          <FormRow name='email' type='email' defaultValue='john@gmail.com' />
          <FormRow name='password' type='password' defaultValue='12345678' />
          <button type='submit' className='btn'>
            register
          </button>
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
`;
export default Register;
