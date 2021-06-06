import { TOGGLE_THEME } from "../types";

const ThemeReducer = (state, { type, payload }) => {
  switch (type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isLight: !state.isLight,
      };
    default:
      return {
        state,
      };
  }
};

export default ThemeReducer;
