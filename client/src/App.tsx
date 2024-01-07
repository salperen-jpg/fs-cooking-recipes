import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  AddRecipe,
  LandingPage,
  LoginPage,
  Profile,
  Recipes,
  RecipesLayout,
  RegisterPage,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addRecipeAction } from "./pages/AddRecipe";
import { loader as recipesLayoutLoader } from "./pages/RecipesLayout";
import { loader as recipesLoader } from "./pages/Recipes";

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
      element: <RecipesLayout />,
      loader: recipesLayoutLoader,
      children: [
        {
          index: true,
          element: <Recipes />,
          loader: recipesLoader,
        },
        {
          path: "addRecipe",
          element: <AddRecipe />,
          action: addRecipeAction,
        },
        {
          path: "profile",
          element: <Profile />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
