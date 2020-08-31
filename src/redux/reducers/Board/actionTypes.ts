export const SET_TOOL = 'SET_TOOL'
export const SET_CURRENT_PTNUM = 'SET_CURRENT_PTNUM'

export const CREATE_PADS = 'CREATE_PADS'
export const CREATE_POINTS = 'CREATE_POINTS'
export const ADD_CONNECTION = 'ADD_CONNECTION'
export const ADD_CONNECTION_POINT = 'ADD_CONNECTION_POINT'

export const CREATE_HEADER = 'CREATE_HEADER'
export const SETUP_BOARD = 'SETUP_BOARD'

export const SET_WIRE_COLOR = 'SET_WIRE_COLOR'



export const DRAW_HEADER_INIT = 'DRAW_HEADER_INIT'
export const DRAW_HEADER_FINISH = 'DRAW_HEADER_FINISH'

export const SET_HEADER_WIDTH = 'SET_HEADER_WIDTH'
export const SET_HEADER_HEIGHT = 'SET_HEADER_HEIGHT'


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

type ActionTypes = SetWidth | SetHeight | SetDimensions;




