import { NavLink } from "react-router-dom";
import { navbarLinks } from "../utils/constants";
import { useRecipeContext } from "../pages/RecipesLayout";

const Navlinks = () => {
  const { user } = useRecipeContext();
  console.log(user);
  return (
    <div className="nav-links">
      {navbarLinks.map((navlink) => {
        const { id, text, path } = navlink;
        if (path === "admin" && user?.role !== "admin") {
          return;
        }
        return (
          <NavLink key={id} to={path}>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default Navlinks;
