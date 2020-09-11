import { ThunkAction } from "redux-thunk";
import { State } from "./index";
import { Action } from "redux";

export type Thunk<ReturnType = void> = ThunkAction<ReturnType, State, unknown, Action<string>>;
