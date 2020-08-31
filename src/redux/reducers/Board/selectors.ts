import { Reducer } from '../index'




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
export const getDimensions = (reducer: Reducer) => {
  const {width, height} = reducer.Board.grid
  const {thickness} = reducer.Board
  return ({width, height, thickness})
}
export const getWidth = ( reducer: Reducer ) => reducer.Board.grid.width;
export const getHeight = ( reducer: Reducer ) => reducer.Board.grid.height;
export const getThickness = ( reducer: Reducer ) => reducer.Board.thickness;


export const getGrid = (reducer: Reducer) => reducer.Board.grid;
export const getPitch = (reducer: Reducer) => reducer.Board.grid.pitch;
