interface IFormSelect {
  name: string;
  list: string[];
  defaultValue: string;
  labelDisplay?: string;
}

const FormSelect: React.FC<IFormSelect> = ({
  name,
  list,
  defaultValue = "",
  labelDisplay,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{labelDisplay || name}</label>
      <select name={name} id={name} defaultValue={defaultValue}>
        {list.map((value) => {
          return <option key={value}>{value}</option>;
        })}
      </select>
    </div>
  );
};
export default FormSelect;
