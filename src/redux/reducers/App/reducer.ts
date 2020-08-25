import { 
  SET_THEME, 
} from "./actionTypes"
import { Actions } from "./actions"
import { Theme } from "./types";

export interface State {
  theme: Theme
}

const initialState = {
  theme: 'light',
};

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case SET_THEME: {
      return {...state, theme: action.theme}
    }
    default:
      return state
  }
}
