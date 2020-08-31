import { 
  // Side, 
  // Gender, 
  // Color 
} from "../../../types"
import { 
  Board, 
  // Header, 
  Grid, 
  // Pitch, 
  // Connection, 
  // NewHeader, 
  // Ptnum 
} from "./types"
import createPoints from "./reducer/createPoints"


export interface State {
  type: Board,
  grid: Grid,
  thickness: number,
  // board: {
  //   height: number,
  //   width: number,
  //   // layer
  // }

  // pitch: Pitch;
  
  
  // newHeader: NewHeader,
  // grid: {
  //   points: {
  //     x: number, 
  //     y: number,
  //     rowIndex: number,
  //     columnIndex: number,
  //     ptnum: number,
  //     purpose: {
  //       type: 'connection' ,
  //     } | {
  //       type: 'header',
  //     } | {
  //       type: 'empty'
  //     },
  //   }[],
  //   offset: {
  //     top: number,
  //     left: number
  //   }
  //   width: number,
  //   height: number,
  // } | null,
  
  // board: Board
  
  // wireColor: Color,
  
  // connections: Connection[],

  // headers: Header[],

  // tool: 'connection' | 'header' | null,
  // current_ptnum: number | null,
}
 
const initialState: State = (()=>{
  // const width = 70,
  //       height = 50;

  const type: Board = 'trimmed',
        columns = 24,
        rows = 18,
        pitch = 2.54;

  const grid: Grid = {
    columns, rows, pitch,
    width: (columns * pitch) - pitch,
    height: (rows * pitch) - pitch,
    points: createPoints(columns, rows, pitch),
  }

  // const wireColor: Color = 'black';

  // // const connections: Connection[] = [];
  // // const headers: Header[] = [];
  // const current_ptnum = null;
  // const tool = null;

  // const newHeader: NewHeader = {
  //   ptnum: null,
  //   width: 0,
  //   height: 0,
  //   type: 'male'
  // }

  return ({
    type,
    grid,
    thickness: 1.2,
    // wireColor,
    // connections,
    // headers,
    // current_ptnum,
    // tool,
    // newHeader
  })


  
  

})()

// const initialState: State = {
//   width: 70,
//   height: 50,

//   board: {
//     width: 0,
//     height: 0,
//     grid: {
//       columns: 0,
//       rows: 0,
//       points: {},
//     }
//   },
  
//   pitch: 2.54,

//   newHeader: {
//     ptnum: null,
//     width: 0,
//     height: 0,
//     type: 'male'
//   },


//   wireColor: 'black', 
  
//   grid: {
//     columns: 24,
//     rows: 18,
//     points: createPoints(24, 18),
//   },

//   connections: [
//     // {
//     //   ptnum: 368,
//     //   connectedPoints: [377],
//     //   color: 'green',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 377,
//     //   connectedPoints: [368],
//     //   color: 'green',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 431,
//     //   connectedPoints: [420],
//     //   color: 'blue',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 420,
//     //   connectedPoints: [366, 431],
//     //   color: 'blue',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 366,
//     //   connectedPoints: [420],
//     //   color: 'blue',
//     //   placement: 'back',
//     // },
    
//     // {
//     //   ptnum: 15,
//     //   connectedPoints: [0],
//     //   color: 'red',
//     //   placement: 'front',
//     // },
//     // {
//     //   ptnum: 0,
//     //   connectedPoints: [15, 18],
//     //   color: 'red',
//     //   placement: 'front',
//     // },
//     // {
//     //   ptnum: 18,
//     //   connectedPoints: [0, 27],
//     //   color: 'red',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 27,
//     //   connectedPoints: [18, 117],
//     //   color: 'red',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 117,
//     //   connectedPoints: [27, 123, 113],
//     //   color: 'red',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 123,
//     //   connectedPoints: [117],
//     //   color: 'red',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 113,
//     //   connectedPoints: [117, 167],
//     //   color: 'red',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 167,
//     //   connectedPoints: [113],
//     //   color: 'red',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 159,
//     //   connectedPoints: [357],
//     //   color: 'purple',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 357,
//     //   connectedPoints: [159, 350],
//     //   color: 'purple',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 350,
//     //   connectedPoints: [357],
//     //   color: 'purple',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 205,
//     //   connectedPoints: [308],
//     //   color: 'yellow',
//     //   placement: 'back',
//     // },
//     // {
//     //   ptnum: 308,
//     //   connectedPoints: [205],
//     //   color: 'yellow',
//     //   placement: 'back',
//     // }
//   ],
//   headers: [
//     // {
//     //   ptnum: 377,
//     //   type: 'male',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
//     // {
//     //   ptnum: 395,
//     //   type: 'male',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
//     // {
//     //   ptnum: 413,
//     //   type: 'male',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
//     // {
//     //   ptnum: 431,
//     //   type: 'male',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
//     // {
//     //   ptnum: 348,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'vertical',
//     //   double: true,
//     // },
//     // {
//     //   ptnum: 349,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'vertical',
//     //   double: true,
//     // },
//     // {
//     //   ptnum: 315,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: true,
//     // },
//     // {
//     //   ptnum: 333,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: true,
//     // },
//     // {
//     //   ptnum: 351,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
//     // {
//     //   ptnum: 369,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
//     // {
//     //   ptnum: 314,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: true,
//     // },
//     // {
//     //   ptnum: 332,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: true,
//     // },
//     // {
//     //   ptnum: 350,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
//     // {
//     //   ptnum: 368,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'horizontal',
//     //   double: false,
//     // },
    
//     // {
//     //   ptnum: 366,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'vertical',
//     //   double: true,
//     // },
//     // {
//     //   ptnum: 367,
//     //   type: 'female',
//     //   placement: 'front',
//     //   orientation: 'vertical',
//     //   double: true,
//     // },
    


//   ],


  
//   // tool: 'header',
//   tool: null,
//   // tool: 'connection',
//   current_ptnum: null,
// }

 export default initialState