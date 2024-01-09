import styled from "styled-components";

const Loading = () => {
  return <Wrapper className="loading"></Wrapper>;
};

const Wrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 5px solid var(--grey-700);
  border-top-color: var(--primary-300);
  animation: spinner 0.6s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;
export default Loading;
