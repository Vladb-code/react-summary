import HomePage from "./HomePage";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <HomePage />
      </ThemeProvider>
    </>
  );
}

export default App;
