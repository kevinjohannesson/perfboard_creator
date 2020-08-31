import { 
  SET_THEME,
  TOGGLE_THEME,
  TOGGLE_VIEW,
} from "./actionTypes";
import { Theme } from "./types";

export const setTheme = (theme: Theme): setThemeAction => ({type: SET_THEME, theme})
export const toggleTheme = (): toggleThemeAction => ({type: TOGGLE_THEME})

export const toggleView = (): toggleViewAction => ({type: TOGGLE_VIEW})

interface setThemeAction {
  type: typeof SET_THEME,
  theme: Theme,
}
interface toggleThemeAction {
  type: typeof TOGGLE_THEME,
}
interface toggleViewAction {
  type: typeof TOGGLE_VIEW,
}

export type Actions = setThemeAction 
| toggleThemeAction
| toggleViewAction