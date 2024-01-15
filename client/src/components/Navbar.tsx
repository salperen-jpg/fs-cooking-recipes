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
    <nav className="bg-emerald-200 flex items-center justify-between ">
      <div className="wrapper-center w-full">
        <header className="flex justify-between">
          <h3>logo</h3>
          <div className="flex gap-4 right-side">
            <button className="btn hamburger-btn" onClick={toggleSidebar}>
              <FaBarsStaggered />
            </button>
            <UserContainer />
          </div>
        </header>
        <div
          className="nav-links-container overflow-hidden transition-all delay-150"
          ref={navLinksOuterContainer}
          style={outerStyles}
        >
          <div
            className="nav-links pt-4 flex flex-col gap-4 "
            ref={navLinksInnerContainer}
          >
            {navbarLinks.map((navlink) => {
              const { id, text, path } = navlink;
              return (
                <NavLink
                  className="nav-link block capitalize tracking-wider text-gray-500 pb-2"
                  key={id}
                  to={path}
                >
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="user-container-bigger-screen hidden">
          <UserContainer />
        </div>
      </div>
    </nav>
  );
};

const Wrapper = styled.nav`
  background: var(--primary-300);
  padding: 1rem 0;
  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
  }
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .right-side {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .hamburger-btn {
    background-color: transparent;
    svg {
      font-size: 1.5rem;
    }
  }
  .hamburger-btn:hover {
    border-color: transparent;
    transform: rotate(90deg);
  }
  /* .user-container {
    display: none;
  } */
  .nav-links-container {
    overflow: hidden;
    transition: all 0.3s linear;
  }
  .nav-links {
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .nav-link {
    display: block;
    text-transform: capitalize;
    font-size: 0.775rem;
    letter-spacing: var(--spacing);
    font-weight: 600;
    color: var(--white);
    cursor: pointer;
  }
  .user-container-bigger-screen {
    display: none;
  }
  /* come back to fix value later on */
  @media (min-width: 992px) {
    & {
      padding: 0;
      display: flex;
      align-items: center;
      height: var(--nav-height);
    }

    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .right-side {
      display: none;
    }
    .nav-links-container {
      height: auto !important;
    }
    .nav-links {
      padding: 0;
      flex-direction: row;
    }
    .nav-link {
    }
    .hamburger-btn {
      display: none;
    }
    .user-container-bigger-screen {
      display: block;
    }
  }
`;
export default Navbar;
