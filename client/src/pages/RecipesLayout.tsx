import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { Navbar } from "../components";
import { createContext, useContext, useState } from "react";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import IUser from "../models/user.modal";
import { useNavigate } from "react-router-dom";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/getUser");
    return data.user;
  } catch (error: any) {
    toast.error(error?.response?.data?.msg);
    return redirect("/login");
  }
};

const initialContextState = {
  isSidebarOpen: false,
  toggleSidebar() {},
  user: {} as IUser | undefined,
  logout() {},
};

const RecipeContext = createContext(initialContextState);

export const useRecipeContext = () => useContext(RecipeContext);

const RecipesDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const user = useLoaderData() as IUser;
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const logout = async () => {
    try {
      await customFetch.get("/auth/logout");
      navigate("/login");
      toast.success("Logged out !");
    } catch (error: any) {
      console.log(error?.response?.data?.msg);
    }
  };

  return (
    <RecipeContext.Provider
      value={{ isSidebarOpen, toggleSidebar, user, logout }}
    >
      {/* sidebar out of flow does not matter where you place it  */}
      {/* <Sidebar /> */}
      <Navbar />
      <div className='wrapper-center'>
        <Outlet context={{ isSidebarOpen }} />
      </div>
    </RecipeContext.Provider>
  );
};
export default RecipesDashboardLayout;
