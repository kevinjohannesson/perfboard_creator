export interface Vector {
  x: number;
  y: number;
}

export type Side = "front" | "back";

export type Orientation = "horizontal" | "vertical";

export type Gender = "male" | "female";

export type Color =
  | "black"
  | "brown"
  | "white"
  | "grey"
  | "red"
  | "green"
  | "blue"
  | "orange"
  | "yellow"
  | "purple";

export type Colors = { [key in Color]: string };

export type View = "front" | "back" | "right" | "left" | "top" | "bottom";

export type Ptnum = number | undefined;

export type Tool = "none" | "Connection" | "Header";

export type Placement = "front" | "back";
