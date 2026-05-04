import GlobalStyle from "./styles/GlobalStyle";
import Button from "./ui/Button";
import Input from "./ui/Input";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Button onClick={() => alert("Hi bey")}>Click me</Button>
      <Input type="text" placeholder="Guess the number" />
    </>
  );
};

export default App;
