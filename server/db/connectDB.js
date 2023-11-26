import mongoose from "mongoose";

export const connectDB = async (MONGO_URI) => mongoose.connect(MONGO_URI);
