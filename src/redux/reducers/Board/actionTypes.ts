export const SET_WIDTH = "SET_WIDTH";
export const SET_HEIGHT = "SET_HEIGHT";
export const SET_DIMENSIONS = "SET_DIMENSIONS";

interface SetWidth {
  type: typeof SET_WIDTH;
  width: number;
}
interface SetHeight {
  type: typeof SET_HEIGHT;
  height: number;
}
interface SetDimensions {
  type: typeof SET_DIMENSIONS;
  width: number;
  height: number;
}

export type ActionTypes = SetWidth | SetHeight | SetDimensions;
