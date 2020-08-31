import { Theme } from "./types";
import { Side } from "../../../types";

export interface State {
  theme: Theme,
  view: Side,
  zoom: number,
  scale: number,
}

export const initialState: State = {
  theme: 'dark',
  view: 'front',
  zoom: 2,
  scale: 4.44,
};
