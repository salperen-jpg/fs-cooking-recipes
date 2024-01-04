interface FormRowProp {
  name: string;
  type: string;
  defaultValue: string;
  labelDisplay?: string;
}

const FormRow: React.FC<FormRowProp> = ({
  name,
  type,
  defaultValue,
  labelDisplay,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{labelDisplay || name}</label>
      <input type={type} name={name} id={type} defaultValue={defaultValue} />
    </div>
  );
};
export default FormRow;
