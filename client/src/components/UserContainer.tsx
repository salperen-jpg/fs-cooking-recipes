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

export default UserContainer;
