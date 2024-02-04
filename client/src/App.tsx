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
  Recipe,
  Admin,
  Favorites,
} from "./pages";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as addRecipeAction } from "./pages/AddRecipe";
import EditRecipe, { action as editRecipeAction } from "./pages/EditRecipe";
import { action as deleteRecipeAction } from "./pages/DeleteRecipe";
import { action as profileAction } from "./pages/Profile";
import { loader as recipesLayoutLoader } from "./pages/RecipesLayout";
import { loader as recipesLoader } from "./pages/Recipes";
import { loader as editRecipeLoader } from "./pages/EditRecipe";
import { loader as singleRecipeLoader } from "./pages/Recipe";
import { loader as adminLoader } from "./pages/Admin";

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
          path: ":id",
          element: <Recipe />,
          loader: singleRecipeLoader,
        },
        {
          path: "addRecipe",
          element: <AddRecipe />,
          action: addRecipeAction,
        },
        {
          path: "favorites",
          element: <Favorites />,
          loader: favoritesLoader,
        },
        {
          path: "editRecipe/:id",
          element: <EditRecipe />,
          loader: editRecipeLoader,
          action: editRecipeAction,
        },
        {
          path: "deleteRecipe/:id",
          action: deleteRecipeAction,
        },
        {
          path: "profile",
          element: <Profile />,
          action: profileAction,
        },
        {
          path: "admin",
          element: <Admin />,
          loader: adminLoader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
