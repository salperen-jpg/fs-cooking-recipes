import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";
import { createContext, useState } from "react";

const initialContextState = {
  isSidebarOpen: false,
  toggleSidebar() {},
};

const RecipeContext = createContext(initialContextState);

const RecipesDashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <RecipeContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {/* sidebar out of flow does not matter where you place it  */}
      <Sidebar />
      <Navbar />
      <div className="wrapper-center">
        <Outlet context={{ isSidebarOpen }} />
      </div>
    </RecipeContext.Provider>
  );
};
export default RecipesDashboardLayout;
