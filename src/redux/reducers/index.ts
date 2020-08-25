import { combineReducers } from "redux";
import Count from './Count/reducer'
import {State as CountState} from './Count/reducer'
import App from './App/reducer'
import {State as AppState} from './App/reducer'

export interface Reducer {
  Count: CountState,
  App: AppState,
}

export default combineReducers({ Count, App });
