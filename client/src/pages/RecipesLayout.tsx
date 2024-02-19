import { Outlet, redirect, useLoaderData } from "react-router-dom";
import { Navbar } from "../components";
import { createContext, useContext, useState } from "react";
import { customFetch } from "../utils/customFetch";
import { toast } from "react-toastify";
import IUser from "../models/user.modal";
import { useNavigate } from "react-router-dom";
import { QueryClient, useQuery } from "@tanstack/react-query";

export const userQuery = () => {
  return {
    queryKey: ["user"],
    queryFn: async (): Promise<IUser> => {
      const { data } = await customFetch.get("/user/getUser");
      return data.user;
    },
  };
};

export const loader = (queryClient: QueryClient) => {
  return async () => {
    try {
      const { data } = await customFetch.get("/user/getUser");
      await queryClient.ensureQueryData(userQuery());
      return data.user;
    } catch (error: any) {
      toast.error(error?.response?.data?.msg);
      return redirect("/login");
    }
  };
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const user = useLoaderData() as IUser;
  const { data: user } = useQuery(userQuery());
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
      <div className="wrapper-center">
        <Outlet context={{ isSidebarOpen }} />
      </div>
    </RecipeContext.Provider>
  );
};
export default RecipesDashboardLayout;
