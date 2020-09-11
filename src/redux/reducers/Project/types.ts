import { Color, Vector } from "../../../types";

export interface Connections {
  [key: string]: Connection;
}
export type Placement = "front" | "back";
export interface Connection {
  ptnum: number;
  placement: Placement;
  color: Color;
  connectedPoints: number[];
}

export type Pitch = 2.54 | 1.27;

export interface Grid {
  columns: number;
  rows: number;
  pitch: Pitch;
  width: number;
  height: number;
  points: { [key: string]: Point };
}

export interface Point {
  row: number;
  column: number;
  ptnum: number;
  index: string;
  location: Vector;
}

export type Points = { [key: string]: Point };
