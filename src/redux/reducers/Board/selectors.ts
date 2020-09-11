import { State } from "../index";

// export const get__tool = ( reducer: Reducer ) => reducer.Board.tool
// export const get__current_ptnum = ( reducer: Reducer ) => reducer.Board.current_ptnum

// export const get__points = ( reducer: Reducer ) => reducer.Board.grid?.points
// // export const get__width = ( reducer: Reducer ) => reducer.BoardReducer.width
// // export const get__height = ( reducer: Reducer ) => reducer.BoardReducer.height

// // export const get__pitch = ( reducer: Reducer ) => reducer.BoardReducer.board.grid.pitch

// // export const get__grid = ( reducer: Reducer ) => reducer.BoardReducer.board.grid

// export const get__connections = ( reducer: Reducer ) => reducer.Board.connections
// export const get__headers = ( reducer: Reducer ) => reducer.Board.headers

// export const get__wireColor = ( reducer: Reducer ) => reducer.Board.wireColor

// // export const get__board = (reducer: Reducer ) => reducer.BoardReducer.board

// export const get__newHeader = (reducer: Reducer) => reducer.Board.newHeader

// /////
export const getDimensions = (state: State) => {
  const { width, height } = state.Board.grid;
  const { thickness } = state.Board;
  return { width, height, thickness };
};
export const getWidth = (state: State) => state.Board.grid.width;
export const getHeight = (state: State) => state.Board.grid.height;
export const getThickness = (state: State) => state.Board.thickness;

export const getGrid = (state: State) => state.Board.grid;
export const getColumns = (state: State) => state.Board.grid.columns;
export const getRows = (state: State) => state.Board.grid.rows;
export const getPitch = (state: State) => state.Board.grid.pitch;

export const getPoints = (state: State) => state.Board.grid.points;
// export const getCurrentColor = (reducer: Reducer) => reducer.Board.currentColor;
