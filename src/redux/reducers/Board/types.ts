import { 
  Vector,
  // Side,
  // Orientation,
  // Gender,
  // Color 
} from "../../../types"

export type Pitch = 2.54 | 1.27
export type Board = 'fullsize' | 'trimmed'

export interface Grid {
  columns: number,
  rows: number,
  pitch: Pitch,
  width: number,
  height: number,
  points: {[key: string]: Point},
}

export interface Point {
  row: number,
  column: number,
  ptnum: number,
  index: string,
  location: Vector,
}

// export interface Connection {
//   ptnum: number,
//   connectedPoints: number[],
//   color: Color,
//   placement: Side,
// }

// export interface Header {
//   ptnum: number,
//   type: Gender,
//   placement: Side,
//   orientation: Orientation,
//   double: boolean,
// }



// export type Ptnum = number

// export interface NewHeader {
//   ptnum: Ptnum | null, 
//   width: number,
//   height: number,
//   type: Gender
// }

