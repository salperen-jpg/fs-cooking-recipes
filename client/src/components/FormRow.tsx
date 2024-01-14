export interface IFormRowProp {
  name: string;
  type: string;
  defaultValue: string | undefined;
  labelDisplay?: string;
}

const FormRow: React.FC<IFormRowProp> = ({
  name,
  type,
  defaultValue,
  labelDisplay,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name}>{labelDisplay || name}</label>
      <input type={type} name={name} id={name} defaultValue={defaultValue} />
    </div>
  );
};
export default FormRow;
