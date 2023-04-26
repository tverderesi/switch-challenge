import { useState } from "react";
import "./App.css";
import { SwitchView } from "./components/switchView";

function App(): JSX.Element {
  const [darkMode, setDarkMode] = useState<Boolean>(false);
  const [color, setColor] = useState<"red" | "blue">("blue");
  const [display, setDisplay] = useState<"grid" | "list">("grid");
  return (
    <div className="app">
      <h1 style={{ textAlign: "center" }}>Switch Challenge</h1>
      <div
        style={{
          backgroundColor: "#21130daa",
          padding: "2rem",
          borderRadius: "1rem",
          marginBottom: "3rem",
          boxShadow: "0 0 1rem #0e0e0e80",
        }}
      >
        <h2 style={{ textAlign: "center" }}>State Control</h2>
        <span style={{ marginRight: "1rem" }}>
          <input
            type="checkbox"
            id="switch"
            name="theme"
            onClick={(e) => {
              setDarkMode(!darkMode);
            }}
          />
          <label htmlFor="switch">Dark Mode</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="color"
            name="theme"
            onClick={(e) => {
              setColor(color === "red" ? "blue" : "red");
            }}
          />
          <label htmlFor="color">Red</label>
        </span>
        <p style={{ textAlign: "center" }}>Display Mode: {display}</p>
      </div>

      <div>
        <SwitchView
          darkMode={darkMode}
          color={color}
          display={display}
          setDisplay={setDisplay}
        />
        <span
          style={{
            fontSize: "1rem",
            textAlign: "center",
            width: "100%",
            display: "block",
            marginTop: "1rem",
          }}
        >
          Component at 10x
        </span>
      </div>
    </div>
  );
}

export default App;
