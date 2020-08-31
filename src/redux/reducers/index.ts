import { combineReducers } from "redux";
import Count from './Count/reducer'
import {State as CountState} from './Count/reducer'
import App from './App/reducer'
import {State as AppState} from './App/initialState'
import Board from './Board/reducer'
import {State as BoardState} from './Board/initialState'

export interface Reducer {
  Count: CountState,
  App: AppState,
  Board: BoardState,
}

export default combineReducers({ Count, App, Board });
