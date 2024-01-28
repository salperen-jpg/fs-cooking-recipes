import styled from "styled-components";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { useRecipeContext } from "../pages/RecipesLayout";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const UserContainer = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { user, logout } = useRecipeContext();
  return (
    <div
      className="relative flex gap-4 items-center border-4 border-white p-2 rounded-md capitalize"
      onClick={() => setIsDropDownOpen(!isDropDownOpen)}
    >
      {user?.avatar ? (
        <img
          src={user.avatar}
          alt=""
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
      ) : (
        <FaUser />
      )}
      <span>{user?.name}</span>
      {isDropDownOpen ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
      <div
        className={isDropDownOpen ? "drop-down show-drop-down" : "drop-down"}
      >
        <button type="button" className="logout" onClick={logout}>
          logout
        </button>
      </div>
    </div>
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
`;
export default UserContainer;
