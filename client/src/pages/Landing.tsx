import styled from "styled-components";
import cooking from "../assets/cooking.svg";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <span>Logo will come up</span>
      </nav>
      <section>
        <div className='info'>
          <h2>Who says no to mom recipe ?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            deleniti eaque nesciunt itaque ipsa facilis commodi sapiente
            exercitationem eos ut!
          </p>
        </div>
        <img src={cooking} alt='cooking' />
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    height: var(--nav-height);
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    align-items: center;
  }

  section {
    height: calc(100vh - var(--nav-height));
    display: grid;
    place-items: center;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    align-items: center;
  }

  p {
    max-width: 30rem;
    line-height: 2;
    margin-top: 2rem;
  }
  img {
    display: none;
  }
  @media (min-width: 900px) {
    section {
      grid-template-columns: 1fr 1fr;
    }
    img {
      display: block;
      max-width: 500px;
    }
  }
`;
export default Landing;
