import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

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
    <>
      <GlobalStyle />
      <StyledApp>
        <Heading as="h1">The wild Oasis</Heading>
        <Heading as="h2">Check in & out</Heading>
        <Heading as="h3">Welcome the Oasis</Heading>
        <Button onClick={() => alert("Hi bey")}>Click me</Button>
        <Input type="text" placeholder="Guess the number" />
      </StyledApp>
    </>
  );
};

export default App;
