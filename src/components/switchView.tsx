export function SwitchView({
  darkMode = false,
  color = "red",
  display = "grid",
  setDisplay,
}: {
  darkMode: Boolean;
  color?: "red" | "blue";
  display?: "grid" | "list";
  setDisplay: React.Dispatch<React.SetStateAction<"grid" | "list">>;
}): JSX.Element {
  return (
    <div
      className={`container ${darkMode ? "background-dark" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        setDisplay(display === "grid" ? "list" : "grid");
      }}
    >
      <div className="icons-container">
        {/* Grid Icon */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          className={`grid-icon ${display === "list" ? "show" : "hidden"} ${
            darkMode ? "grid-icon-dark" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            transform="translate(.6, .6)"
            style={{}}
            d="M1.27273 0.272705C0.569819 0.272705 0 0.842525 0 1.54543V3.99998C0 4.70289 0.569819 5.27271 1.27273 5.27271H3.72727C4.43018 5.27271 5 4.70289 5 3.99998V1.54543C5 0.842525 4.43018 0.272705 3.72727 0.272705H1.27273ZM7.63637 0.272705C6.93347 0.272705 6.36365 0.842525 6.36365 1.54543V3.99998C6.36365 4.70289 6.93347 5.27271 7.63637 5.27271H10.0909C10.7938 5.27271 11.3636 4.70289 11.3636 3.99998V1.54543C11.3636 0.842525 10.7938 0.272705 10.0909 0.272705H7.63637ZM6.36365 7.9092C6.36365 7.20629 6.93347 6.63647 7.63637 6.63647H10.0909C10.7938 6.63647 11.3636 7.20629 11.3636 7.9092V10.3637C11.3636 11.0667 10.7938 11.6365 10.0909 11.6365H7.63637C6.93347 11.6365 6.36365 11.0667 6.36365 10.3637V7.9092ZM1.27273 6.63647C0.569819 6.63647 0 7.20629 0 7.9092V10.3637C0 11.0667 0.569819 11.6365 1.27273 11.6365H3.72727C4.43018 11.6365 5 11.0667 5 10.3637V7.9092C5 7.20629 4.43018 6.63647 3.72727 6.63647H1.27273Z"
          />
        </svg>
        {/* List Icon */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`list-icon ${display === "list" ? "hidden" : "show"} ${
            darkMode ? "list-icon-dark" : ""
          }`}
        >
          <path
            transform="translate(0, 1.5)"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.27272 0.54541C0.921262 0.54541 0.636353 0.83032 0.636353 1.18177C0.636353 1.53323 0.921262 1.81814 1.27272 1.81814H11.4545C11.806 1.81814 12.0909 1.53323 12.0909 1.18177C12.0909 0.83032 11.806 0.54541 11.4545 0.54541H1.27272ZM1.27272 3.09082C0.921262 3.09082 0.636353 3.37573 0.636353 3.72718C0.636353 4.07864 0.921262 4.36355 1.27272 4.36355H11.4545C11.806 4.36355 12.0909 4.07864 12.0909 3.72718C12.0909 3.37573 11.806 3.09082 11.4545 3.09082H1.27272ZM0.636353 6.27284C0.636353 5.92138 0.921262 5.63647 1.27272 5.63647H11.4545C11.806 5.63647 12.0909 5.92138 12.0909 6.27284C12.0909 6.62429 11.806 6.9092 11.4545 6.9092H1.27272C0.921262 6.9092 0.636353 6.62429 0.636353 6.27284ZM1.27272 8.18188C0.921262 8.18188 0.636353 8.46679 0.636353 8.81825C0.636353 9.1697 0.921262 9.45461 1.27272 9.45461H11.4545C11.806 9.45461 12.0909 9.1697 12.0909 8.81825C12.0909 8.46679 11.806 8.18188 11.4545 8.18188H1.27272Z"
          />
        </svg>
      </div>
      <div
        //prettier-ignore
        className={`button ${display === "list" ? "active" : ""} ${darkMode ? "dark" : ""}`}
        style={{
          background: darkMode
            ? color !== "red"
              ? "linear-gradient(66.56deg, #EA3C47 11.23%, #C4797D 159.88%) border-box" //red button //dark
              : "linear-gradient(66.56deg, #3960EF 11.23%, #7690ED 159.88%) border-box" //blue button //dark
            : color !== "red"
            ? "linear-gradient(66.56deg, #EA3C47 11.23%, #C4797D 159.88%) border-box" //red button // light
            : "linear-gradient(0deg, #2141B3, #2141B3)", //blue button //light

          boxShadow:
            color !== "red"
              ? "0px 1px 40px #D6455B, inset 0.5px -1.5px 2px #00000040"
              : "0px 1px 40px 0px #4062DD, 0.5px -1.5px 2px 0px #00000040 inset",
        }}
      ></div>
    </div>
  );
}
