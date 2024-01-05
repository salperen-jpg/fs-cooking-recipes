import styled from "styled-components";
import { Navlinks } from ".";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="wrapper-center">
        <h3>logo coming up</h3>
        <Navlinks />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: red;
`;
export default Navbar;
