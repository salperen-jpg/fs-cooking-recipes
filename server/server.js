import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
dotenv.config();
const app = express();
// imports

// middlewares
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// routes
app.get("/", (req, res) => {
  res.send("Hi there");
});

// errors

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
