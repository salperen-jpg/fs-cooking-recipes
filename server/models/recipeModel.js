import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: String,
    ingredients: [String],
    // image will come up at some point,
    cookingTime: Number,
    servings: Number,
    // belonging user will also come up,
    mealCategory: {
      type: String,
      enum: [
        "vegetarian",
        "breakfast",
        "lunches",
        "snacks",
        "dinner",
        "desserts",
      ],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Recipe", recipeSchema);