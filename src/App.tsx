import { useState } from "react";
import "./App.css";
import { SwitchView } from "./components/switchView";

function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  const [color, setColor] = useState<"red" | "blue">("red");
  const [display, setDisplay] = useState<"grid" | "list">("grid");
  return (
    <div className="app">
      <div>
        <input
          type="checkbox"
          id="switch"
          name="theme"
          onClick={(e) => {
            setDarkMode(!darkMode);
          }}
        />
        <label htmlFor="switch">Dark Mode</label>
        <input
          type="checkbox"
          id="red"
          name="theme"
          onClick={(e) => {
            setColor(color === "red" ? "blue" : "red");
          }}
        />
        <label htmlFor="blue">red</label>
      </div>
      <div>
        <div style={{ width: "440px", height: "220px" }}>
          <SwitchView
            darkMode={darkMode}
            color={color}
            display={display}
            setDisplay={setDisplay}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
