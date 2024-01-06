import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddRecipe,
  LandingPage,
  LoginPage,
  Recipes,
  RecipesDashboardLayout,
  RegisterPage,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { loader as recipesLayoutLoader } from "./pages/RecipesLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
      action: registerAction,
    },
    {
      path: "/login",
      element: <LoginPage />,
      action: loginAction,
    },
    {
      path: "/recipes",
      element: <RecipesDashboardLayout />,
      loader: recipesLayoutLoader,
      children: [
        {
          index: true,
          element: <Recipes />,
        },
        {
          path: "addRecipe",
          element: <AddRecipe />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
