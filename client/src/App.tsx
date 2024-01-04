import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage, LoginPage, RegisterPage } from "./pages";
import { action as registerAction } from "./pages/Register";

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
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
