interface IRecipeProperty {
  property: string;
  value: string | number;
}

const RecipeProperty: React.FC<IRecipeProperty> = ({ property, value }) => {
  return (
    <div className="flex gap-4 mb-4 font-bold capitalize">
      <span className="bg-emerald-400  text-white px-2 rounded-sm">
        {property}
      </span>
      <span>{value}</span>
    </div>
  );
};
export default RecipeProperty;
