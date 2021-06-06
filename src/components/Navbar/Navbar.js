import React, { useContext } from "react";
import { FiMoon } from "react-icons/fi";
import ThemeContext from "../../context/ThemeContext/ThemeContext";

import "./styles.css";

const Navbar = () => {
  const { isLight, dark, light, toggleTheme } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  return (
    <nav style={{ backgroundColor: theme.ui, color: theme.syntax }}>
      <div className="logo">
        <h2 className="appTitle">Where in the world ?</h2>
      </div>
      <div
        className="theme-switcher"
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={() => toggleTheme()}
      >
        <FiMoon
          style={{
            marginRight: ".3rem",
            fontSize: "1.3rem",
            backgroundColor: theme.ui,
          }}
        />
        <span className="switch">{isLight ? "Dark Mode" : "Light Mode"}</span>
      </div>
    </nav>
  );
};

export default Navbar;
