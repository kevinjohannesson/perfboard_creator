import { 
  SET_THEME, 
  TOGGLE_THEME, 
  TOGGLE_VIEW, 
} from "./actionTypes"
import { Actions } from "./actions"
import { initialState, State } from "./initialState"




export default function(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case SET_THEME: {
      return {...state, theme: action.theme}
    }
    case TOGGLE_THEME: {
      return {...state, theme: state.theme === 'dark' ? 'light' : 'dark'}
    }
    case TOGGLE_VIEW: {
      return {...state, view: state.view === 'front' ? 'back' : 'front'}
    }
    default:
      return state
  }
}
