import { combineReducers } from "redux";
import App from "./App/reducer";
import { State as AppState } from "./App/initialState";
import Board from "./Board/reducer";
import { State as BoardState } from "./Board/initialState";
import Project from "./Project/reducer";
import { State as ProjectState } from "./Project/initialState";

export interface State {
  App: AppState;
  Board: BoardState;
  Project: ProjectState;
}

export default combineReducers<State>({ App, Board, Project });
