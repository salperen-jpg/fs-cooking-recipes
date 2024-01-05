import { NavLink } from "react-router-dom";
import { navbarLinks } from "../utils/constants";

const Navlinks = () => {
  return (
    <div className="nav-links">
      {navbarLinks.map((navlink) => {
        const { id, text, path } = navlink;
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
