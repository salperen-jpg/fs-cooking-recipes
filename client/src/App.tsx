import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  LandingPage,
  LoginPage,
  Recipes,
  RecipesDashboardLayout,
  RegisterPage,
} from './pages';
import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
      action: registerAction,
    },
    {
      path: '/login',
      element: <LoginPage />,
      action: loginAction,
    },
    {
      path: '/recipes',
      element: <RecipesDashboardLayout />,
      children: [
        {
          index: true,
          element: <Recipes />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
