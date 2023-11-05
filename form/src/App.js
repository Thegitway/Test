import logo from "./logo.svg";
import "./App.css";
import Switcher from "./components/switcher/index";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Switcher />
        <li>élément 1</li>
        <li>élément 2</li>
      </header>
    </div>
  );
}

export default App;
