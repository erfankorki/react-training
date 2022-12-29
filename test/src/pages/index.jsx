import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/theme";
import { useState } from "react";

function MainPage() {
  const [selectedTheme, setSelectedTheme] = useState("dark");
  return (
    <main>
      MAIN PAGE
      <ThemeContext.Provider value={selectedTheme}>
        <button
          onClick={() => {
            if (selectedTheme === "dark") {
              setSelectedTheme("light");
            } else {
              setSelectedTheme("dark");
            }
          }}
        >
          CHANGE THEME
        </button>
        <Outlet />
      </ThemeContext.Provider>
    </main>
  );
}

export default MainPage;
