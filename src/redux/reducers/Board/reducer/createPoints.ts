import { Point, Pitch } from "../types";
import createAlphabeticalIndex from "../../../../components/Perfboard/createAlphabeticalIndex";
// import createNumericalIndex from "../../../../components/Perfboard/createNumericalIndex"

const createPoints = (columns: number, rows: number, pitch: Pitch) => {
  const points: { [key: string]: Point } = {};
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const ptnum = c * rows + r;
      points[`pt${ptnum}`] = {
        row: r,
        column: c,
        ptnum: ptnum,
        index: createIndex(c, r),
        location: {
          x: pitch / 2 + c * pitch,
          y: pitch / 2 + r * pitch,
        },
      };
    }
  }
  return points;
};

const createIndex = (column: number, row: number) =>
  `${createAlphabeticalIndex(column)}${row + 1}`;

export default createPoints;
