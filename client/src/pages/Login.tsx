import FormRow from '../components/FormRow';
import { Form, redirect } from 'react-router-dom';
import { customFetch } from '../utils/customFetch';
import { toast } from 'react-toastify';
import { Wrapper } from './Register';

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const loginData = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/login', loginData);
    toast.success('Successful!');
    return redirect('/recipes');
  } catch (error: any) {
    return toast.error(error?.response?.data?.msg);
  }
};

const Login = () => {
  return (
    <Wrapper>
      <Form method='POST' className='form'>
        <div className='form-cen'>
          <h4>login</h4>
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
export default Login;
