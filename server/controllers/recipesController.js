// get recipes
const getRecipes = async (req, res) => {
  throw new Error(`Something  went wrong`);
  res.status(200).send("Get Recipes");
};

// add recipe
const addRecipe = async (req, res) => {
  res.status(200).send("Add Recipe");
};

// get recipe
const getSingleRecipe = async (req, res) => {
  res.status(200).send("Get Recipe");
};

// update recipes
const updateRecipe = async (req, res) => {
  res.status(200).send("update recipe");
};

// delete recipes
const deleteRecipe = async (req, res) => {
  res.status(200).send("delete recipe");
};

export { getRecipes, addRecipe, getSingleRecipe, updateRecipe, deleteRecipe };
