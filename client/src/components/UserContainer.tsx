import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useRecipeContext } from "../pages/RecipesLayout";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const UserContainer = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { user, logout } = useRecipeContext();
  return (
    <Wrapper
      className="user-container"
      onClick={() => setIsDropDownOpen(!isDropDownOpen)}
    >
      <FaUser />
      <span>{user?.name}</span>
      {isDropDownOpen ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
      <div
        className={isDropDownOpen ? "drop-down show-drop-down" : "drop-down"}
      >
        <button type="button" className="logout" onClick={logout}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding: 0.5rem;
  border: 1px solid var(--white);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  span {
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    font-weight: 600;
  }
  svg {
    font-size: 0.75rem;
  }
  .drop-down {
    position: absolute;
    bottom: -150%;
    left: 0;
    width: 100%;
    visibility: hidden;
  }
  .show-drop-down {
    visibility: visible;
    transform: var(--transition);
  }
  .logout {
    width: 100%;
    border: 2px solid var(--white);
    padding: 0.5rem 0.75rem;
    background-color: var(--primary-300);
    border-radius: var(--radius);
    color: var(--grey-900);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    transition: var(--transition);
  }
  .logout:hover {
    background-color: var(--primary-500);
  }
`;
export default UserContainer;
