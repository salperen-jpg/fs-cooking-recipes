import mongoose from "mongoose";

const favoritesSchema = new mongoose.Schema({
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  recipeId: mongoose.ObjectId,
});

export default mongoose.model("Favorite", favoritesSchema);
