import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Sidebar from "../components/Sidebar";

const RecipesDashboardLayout = () => {
  return (
    <>
      <Navbar />
      {/* sidebar out of flow does not matter where you place it  */}
      <Sidebar />
      <Outlet />
    </>
  );
};
export default RecipesDashboardLayout;
