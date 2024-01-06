import styled from "styled-components";
import { Navlinks } from ".";
import { FaBarsStaggered } from "react-icons/fa6";
import { useRecipeContext } from "../pages/RecipesLayout";
import { useEffect, useRef } from "react";
import { navbarLinks } from "../utils/constants";
import { NavLink } from "react-router-dom";

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
    <Wrapper>
      <div className="wrapper-center nav-center">
        <header>
          <h3>logo</h3>
          <button className="btn hamburger-btn" onClick={toggleSidebar}>
            <FaBarsStaggered />
          </button>
        </header>
        <div
          className="nav-links-container"
          ref={navLinksOuterContainer}
          style={outerStyles}
        >
          <div className="nav-links" ref={navLinksInnerContainer}>
            {navbarLinks.map((navlink) => {
              const { id, text, path } = navlink;
              return (
                <NavLink className="nav-link" key={id} to={path}>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background: var(--primary-300);

  .nav-center {
    /* display: flex;
    align-items: center; */
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-links-container {
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .nav-links {
    padding-block: 1rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: block;
    padding: 0.5rem 0;
    text-transform: capitalize;
    font-size: 0.775rem;
    letter-spacing: var(--spacing);
    font-weight: 600;
    color: var(--white);
    cursor: pointer;
  }
`;
export default Navbar;
