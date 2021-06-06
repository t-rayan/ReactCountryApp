import React, { useReducer } from "react";
import { TOGGLE_THEME } from "../types";

import ThemeContext from "./ThemeContext";
import ThemeReducer from "./ThemeReducer";

const ThemeState = ({ children }) => {
  const initialState = {
    isLight: true,
    dark: {
      syntax: "#fff",
      ui: "hsl(209, 23%, 22%)",
      bg: " hsl(207, 26%, 17%)",
    },
    light: {
      syntax: "hsl(200, 15%, 8%)",
      ui: "hsl(0, 0%, 100%)",
      bg: "hsl(0, 0%, 98%)",
    },
  };

  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const toggleTheme = () => {
    dispatch({
      type: TOGGLE_THEME,
    });
  };

  return (
    <div>
      <ThemeContext.Provider
        value={{
          isLight: state.isLight,
          light: state.light,
          dark: state.dark,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeState;
