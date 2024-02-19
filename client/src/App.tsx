import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import { loader as favoritesLoader } from "./pages/Favorites";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

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
      loader: recipesLayoutLoader(queryClient),
      children: [
        {
          index: true,
          element: <Recipes />,
          loader: recipesLoader(queryClient),
        },
        {
          path: ":id",
          element: <Recipe />,
          loader: singleRecipeLoader(queryClient),
        },
        {
          path: "addRecipe",
          element: <AddRecipe />,
          action: addRecipeAction(queryClient),
        },
        {
          path: "favorites",
          element: <Favorites />,
          loader: favoritesLoader(queryClient),
        },
        {
          path: "editRecipe/:id",
          element: <EditRecipe />,
          loader: editRecipeLoader(queryClient),
          action: editRecipeAction(queryClient),
        },
        {
          path: "deleteRecipe/:id",
          action: deleteRecipeAction(queryClient),
        },
        {
          path: "profile",
          element: <Profile />,
          action: profileAction(queryClient),
        },
        {
          path: "admin",
          element: <Admin />,
          loader: adminLoader(queryClient),
        },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
