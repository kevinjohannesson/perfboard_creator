import { State } from "../initialState";

// export const addConnection = (connections: State['connections']) => {
//   /// DIT WERKT NOG NIET MET OBJECT BASED 
//   // const connections = [...state.connections]
//   // const new_connection = (ptnum: number, connectedPoint: number | null, connectedPoint2?: number ) => ({ptnum, connectedPoints: connectedPoint !== null ? connectedPoint2 ? [connectedPoint, connectedPoint2] : [connectedPoint] : [], color: state.wireColor, placement: state.view })
  
//   // const connectionPoint_A_index = state.connections.findIndex(connection => connection.ptnum === state.current_ptnum && connection.placement === state.view)
//   // if(state.current_ptnum && connectionPoint_A_index >= 0) {
//   //   console.log('connectionPoint_A does exist.')
//   //   connections[connectionPoint_A_index] = {
//   //     ...connections[connectionPoint_A_index], 
//   //     connectedPoints: [
//   //       ...connections[connectionPoint_A_index].connectedPoints,
//   //       action.ptnum
//   //     ]
//   //   }
//   // } 
//   // else {
//   //   console.log('connectionPoint_A does NOT exist.')
//   // }
//   // const connectionPoint_B_index = state.connections.findIndex(connection => connection.ptnum === action.ptnum)
//   // if(connectionPoint_B_index >= 0 ) {
//   //   console.log('connectionPoint_B does exist.')
//   //   const connectedPoints = [...connections[connectionPoint_B_index].connectedPoints]
//   //   if(connections[connectionPoint_B_index].placement !== state.view) {
//   //     console.log('connectionPoint_B placement does NOT match.')
//   //     console.log(state.current_ptnum, action.ptnum)
//   //     const nConnection = {
//   //       ptnum: action.ptnum, 
//   //       connectedPoints: state.current_ptnum ? [state.current_ptnum, action.ptnum] : [action.ptnum],
//   //       color: state.wireColor, 
//   //       placement: state.view }
//   //     // const nConnection = new_connection(action.ptnum, state.current_ptnum, action.ptnum)
//   //     console.log(nConnection)
//   //     connections.push(nConnection)
//   //     // connections.push(new_connection(action.ptnum, state.current_ptnum, action.ptnum))
//   //     connectedPoints.push(action.ptnum)
//   //   }
//   //   else {
      
//   //     console.log('connectionPoint_B placement does match.')
//   //     if( state.current_ptnum !== null) connectedPoints.push(state.current_ptnum)
//   //   }
//   //   connections[connectionPoint_B_index] = {
//   //     ...connections[connectionPoint_B_index], 
//   //     connectedPoints,
//   //     // placement: state.view
//   //   }
//   //   if(connections[connectionPoint_B_index].color !== state.wireColor){
//   //     console.log('wireColor does NOT match')
//   //     const linkedConnectionPoint = connections[connectionPoint_B_index]
//   //     // console.log(linkedConnectionPoint)
//   //     const changeColor = (ptnum: number) => {connections[connections.findIndex(connection => connection.ptnum === ptnum) ].color = state.wireColor}
     
//   //     const points: number[] = []
//   //     const mapper = (connectedPoints: number[]) => {
//   //       connectedPoints.map(ptnum => {
//   //         const connection = connections[connections.findIndex(connection => connection.ptnum === ptnum)]
//   //         if(connection.connectedPoints.length && (points.some( pt => pt === ptnum))) {
//   //           changeColor(connection.ptnum)
//   //           points.push(connection.ptnum)
//   //           mapper(connection.connectedPoints)
//   //         }
//   //       })
//   //     }
//   //     mapper(linkedConnectionPoint.connectedPoints)
//   //   }
//   //   else console.log('wireColor does match')
//   // }
//   // else {
//   //   console.log('connectionPoint_B does NOT exist.')
//   //   connections.push( new_connection(action.ptnum, state.current_ptnum) )
//   // }
  
//   // console.log(connections)
  
//   // return { 
//   //   ...state, 
//   //   connections, 
//   //   current_ptnum: action.ptnum
//   // }
// }