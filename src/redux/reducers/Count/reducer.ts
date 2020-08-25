import { ADD, SUBTRACT } from "./actionTypes"
import { Actions } from "./actions"

export type State = number

const initialState: State = 0

export default function(state = initialState, action: Actions) {
  switch (action.type) {
    case ADD: {
      return state + action.payload
    }
    case SUBTRACT: {
      return state - action.payload
    }
    default:
      return state
  }
}
