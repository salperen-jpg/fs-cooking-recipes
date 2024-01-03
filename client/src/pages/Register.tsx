import styled from "styled-components";
import FormRow from "../components/FormRow";

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <div className='form-center'>
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
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  height: 100vh;
  display: grid;
  place-items: center;
  .form {
    padding: 1.5rem 1rem;
    width: var(--fluid-width);
    max-width: 25rem;
  }
  .form h4 {
    text-align: center;
    text-transform: capitalize;
    color: var(--primary-500);
  }
`;
export default Register;
