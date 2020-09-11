import {
  Board,
  // Header,
  Grid,
  // Pitch,
  // Connection,
  // NewHeader,
  // Ptnum
} from "./types";
import createPoints from "./reducer/createPoints";

export interface State {
  type: Board;
  grid: Grid;
  thickness: number;
}

const initialState: State = (() => {
  const type: Board = "trimmed",
    columns = 24,
    rows = 18,
    pitch = 2.54,
    thickness = 1.4;

  const grid: Grid = {
    columns,
    rows,
    pitch,
    width: columns * pitch, // - pitch,
    height: rows * pitch, // - pitch,
    points: createPoints(columns, rows, pitch),
  };

  return {
    type,
    grid,
    thickness,
  };
})();

export default initialState;
