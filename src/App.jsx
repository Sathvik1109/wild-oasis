import styled from "styled-components";

const H1 = styled.h1`
  font-size: 50px;
  font-weight: 600;
  background-color: aliceblue;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: aliceblue;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  border-radius: 20px;
  background-color: antiquewhite;
  color: black;
  padding: 0.5rem 0 0.5rem 2rem;
  width: 30rem;
  /* font-size: 1.2rem; */
  font-size: 1rem;
  font-weight: lighter;
  margin: 2rem 0;
`;

const StyledApp = styled.div`
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (
    <StyledApp>
      <H1>The wild Oasis</H1>
      <Button onClick={() => alert("Hi bey")}>Click me</Button>
      <Input type="text" placeholder="Guess the number" />
    </StyledApp>
  );
};

export default App;
