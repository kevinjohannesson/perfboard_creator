import { Color, Tool, Placement } from "../../../types";

export interface State {
  zoom: number;
  scale: number;
  view: Placement;
  activeTool: Tool | null;
  activeColor: Color;
  activePtnum: number | null;
}

export const initialState: State = {
  view: "front",
  zoom: 2,
  scale: 4.48,
  activeColor: "black",
  activeTool: null,
  activePtnum: null,
};
