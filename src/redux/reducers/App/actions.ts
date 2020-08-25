import { SET_THEME } from "./actionTypes";
import { Theme } from "./types";

export const setTheme = (theme: Theme): setThemeAction => ({type: SET_THEME, theme})

interface setThemeAction {
  type: typeof SET_THEME,
  theme: Theme,
}

export type Actions = setThemeAction