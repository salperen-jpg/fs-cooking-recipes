import { IFormRowProp } from "./FormRow";

interface IFormTextArea extends Partial<IFormRowProp> {
  type?: string;
  placeholder: string;
  children?: string;
}

const FormTextarea: React.FC<IFormTextArea> = ({
  name,
  labelDisplay,
  placeholder,
  children,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{labelDisplay || name}</label>
      <textarea name={name} id={name} placeholder={placeholder} required>
        {children}
      </textarea>
    </div>
  );
};
export default FormTextarea;
