import cooking from "../assets/cooking.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <nav className="bg-emerald-200">
        <div className="wrapper-center h-20 grid items-center">
          <span>Logo will come up</span>
        </div>
      </nav>
      <section className="wrapper-center h-[calc(100vh-5rem)] grid items-center md: grid-cols-2 ">
        <div className="info">
          <h2 className="italic  font-bold text-3xl capitalize mb-4 tracking-wide">
            Who says no to mom recipe ?
          </h2>
          <p className="leading-7 mb-4 max-w-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            deleniti eaque nesciunt itaque ipsa facilis commodi sapiente
            exercitationem eos ut!
          </p>
          <div className="flex gap-4">
            <Link to="/register" type="button" className="btn">
              register
            </Link>
            <Link to="/login" type="button" className="btn">
              login
            </Link>
          </div>
        </div>
        <img src={cooking} alt="cooking" className="hidden md:block " />
      </section>
    </>
  );
};

export default Landing;
