import styled from "styled-components";
import { FaBarsStaggered } from "react-icons/fa6";
import { useRecipeContext } from "../pages/RecipesLayout";
import { useRef } from "react";
import { navbarLinks } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { UserContainer } from ".";

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useRecipeContext();
  const navLinksOuterContainer = useRef<HTMLDivElement>(null);
  const navLinksInnerContainer = useRef<HTMLDivElement>(null);

  const outerStyles = {
    height: isSidebarOpen
      ? `${navLinksInnerContainer.current?.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav className="bg-emerald-200 flex items-center py-6">
      <div className="px-4 mx-auto w-11/12 max-w-7xl md:flex justify-between">
        <header className="flex justify-between items-center  w-full  md:w-auto">
          <h3>logo</h3>
          <div className="flex items-center justify-between gap-4  md:hidden">
            <button className="btn hamburger-btn " onClick={toggleSidebar}>
              <FaBarsStaggered />
            </button>
            <UserContainer />
          </div>
        </header>
        <div
          className="nav-links-container overflow-hidden transition-all delay-150 md:!h-auto"
          ref={navLinksOuterContainer}
          style={outerStyles}
        >
          <div
            className="nav-links pt-4 flex flex-col gap-4 md:flex-row3 md:flex-row "
            ref={navLinksInnerContainer}
          >
            {navbarLinks.map((navlink) => {
              const { id, text, path } = navlink;
              return (
                <NavLink
                  className="nav-link block capitalize tracking-wider text-gray-700 pb-2 font-bold "
                  key={id}
                  to={path}
                >
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="user-container-bigger-screen hidden md:block">
          <UserContainer />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
