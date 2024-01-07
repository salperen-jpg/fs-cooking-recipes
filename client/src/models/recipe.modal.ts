interface IRecipe {
  name: string;
  ingredients: string[];
  mealCategory: string;
  servings: number;
  cookingTime: string;
  createdAt: string;
  createdBy: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export default IRecipe;
