import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: String,
    ingredients: [String],
    // image will come up at some point,
    recipeAvatar: String,
    recipeAvatarId: String,
    cookingTime: String,
    servings: Number,
    // belonging user will also come up,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
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
