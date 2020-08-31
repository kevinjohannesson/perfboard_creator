import React, { ReactElement } from 'react'
// import { useSelector } from 'react-redux'

// import { 
//   getGrid, 
//   getDimensions,
//   getPitch, 
//   // getDimensions,
//  } from '../../../redux/reducers/Board/selectors'
// import { Vector } from '../../../types'
// import { 
//   getView,
//   // getZoom,
//   // getScale,
//  } from '../../../redux/reducers/App/selectors'
// import createAlphabeticalIndex from '../../Perfboard/createAlphabeticalIndex'



// const maskID = 'maskID'

// interface BaseProps {
//   mask?: boolean,
// }

// function Base ({mask}: BaseProps): ReactElement {
//   const {width, height} = useSelector(getDimensions)
//   const pitch = useSelector(getPitch)
//   return (
//     <rect 
//       x={-pitch / 2}
//       y={-pitch / 2}
//       width={width + pitch}
//       height={height + pitch}
//       fill={mask ? 'white' : '#ae7754'}
//       mask={`url(#${maskID})`} 
      
//     />
//   )
// }
  


// const copperRadius = 1.05;

// const Copper = (): ReactElement => {
//   const grid = useSelector(getGrid)
//   const view = useSelector(getView)
//   return (
//     <>
//       { 
//         Object.values(grid.points).map((pt, i) => (
//           <circle 
//             key = { i }
//             cx = { pt.location.back.x }
//             cy = { pt.location.back.y }
//             r = { copperRadius }

//             fill = 'rgba(0,0,0,0)'
//             stroke = '#e3aa80'

//             style = {{
//               display: view === 'back' ? '' : 'none',
//               clipPath: 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)'
//             }}
//           />
//         ))
//       }
//     </>
//   )
// }


// export const Indexing = (): ReactElement => {
//   const view = useSelector(getView);
//   const grid = useSelector(getGrid);

//   return (
//     <>
//       {/* alphabetical indexing for columns: */}
//       {[...Array(grid.columns)].map((x, i) => {
//         const {pitch, width, columns} = grid;

//         return (
//           <text 
//             key= {i} 
//             x = {i * (pitch) - (pitch/4)}  
//             y = {-pitch / 1.75} 
//             textLength = {width / columns - (pitch/2)} 
//             lengthAdjust = 'spacingAndGlyphs'
//             style = {{
//               fontSize: 2, 
//               fill: view === 'front' ? 'white' : '#e3aa80',
//             }}
//           >
//             { 
//               view === 'back' 
//                 ? createAlphabeticalIndex(i) 
//                 : createAlphabeticalIndex((columns - 1) - i)
//             }
//           </text>
//         )
//       }
//       )}
//       {/* numerical indexing for rows:  */}
//       {[...Array(grid.rows)].map((x, i) => {
//         const {pitch, width, columns} = grid;
        
//         return (
//           <text 
//             key = {i} 
//             x = {view === 'back' ? -pitch * 1.5 : width + pitch} 
//             y = {i * (pitch) + (pitch/4)}  
//             textLength = {width / columns - (pitch/2)} 
//             lengthAdjust = 'spacingAndGlyphs'
//             style = {{
//               fontSize: 2,
//               fill: view === 'front' ? 'white' : '#e3aa80',
//             }}
//           >
//             {(i < 10 ? '0' : '') + i}
//           </text>
//         )
//       }
//       )}
//     </>
//   )
// }

// export const Grid = (): ReactElement => {
//   const grid = useSelector(getGrid)
//   const view = useSelector(getView)
//   const lines = (()=> {
//     interface Line {
//       start: Vector;
//       end: Vector;
//     }
//     const v: Line[] = [];
//     const h: Line[] = [];

//     const {width, height, pitch, columns, rows} = grid
//     for(let c = 4; c < columns; c += 5){
//       const start = {x: c * pitch - (pitch / 2), y: -pitch / 2}
//       const end = {x: c * pitch - (pitch / 2), y: height + (pitch / 2)}
//       v.push({start, end})
//     }
//     let toggle = true;
//     for(let r = 5; r < rows; toggle ? r += 5 : r += 4){
//       const start = {x: -pitch / 2, y: r * pitch - (pitch / 2)}
//       const end = {x: width + (pitch / 2), y: r * pitch - (pitch / 2)}
//       h.push({start, end})
//       toggle = !toggle
//     }
//     return [...v, ...h]
//   })()

//   return (
//     <>
//     <rect
//       x = {-grid.pitch / 2}
//       y = {-grid.pitch / 2}
//       width = {grid.width + grid.pitch}
//       height = {grid.height + grid.pitch}

//       style = {{
//         display: view === 'front' ? '' : 'none',
//         fill: 'none',
//         strokeWidth: 0.25,
//         stroke: 'rgba(255, 255, 255, 1)'
//       }}
//     />
//     {
//       lines.map((line, i) => (
//         <line 
//           key = {i}
//           x1 = {line.start.x}
//           y1 = {line.start.y}
//           x2 = {line.end.x}
//           y2 = {line.end.y}

//           style = {{
//             display: view === 'front' ? '' : 'none',
//             strokeWidth: 0.25,
//             stroke: 'rgba(255, 255, 255, 1)'
//         }}
//     />
//       ))
//     }
    
//     </>
//   )
// }


// const Mask = (): ReactElement => {
//   const grid = useSelector(getGrid)

//   return (
//     <mask id={maskID}>
//       {/* Unmasked base: */}
//       <Paper.Base mask/>
//       {/* Component holes */}
//       {
//         Object.values(grid.points).map( (pt, i) => 
//           <circle
//             key = { i }
//             cx = {pt.location.front.x}
//             cy = {pt.location.front.y}
//             r = {(grid.pitch === 2.54 ? 1.2 : 0.6) / 2}
//           /> 
//         )
//       }
//     </mask>
//   )
// }


// interface Paper {
//   Base: (props: BaseProps) => ReactElement; 
//   Indexing: () => ReactElement;
//   Copper: () => ReactElement;
//   Grid: () => ReactElement;

//   Mask: () => ReactElement;
// }

// const Paper: Paper = {
//   Base, 
//   Indexing,
//   Copper,
//   Grid,
  
//   Mask, 
// }

// export default Paper
// // {/* Drilled mounting holes: */}
// //         {/* { mountingHoles && width && height &&
// //           <>
// //             <circle 
// //               cx={mountingHoles.offset} 
// //               cy={mountingHoles.offset} 
// //               r={mountingHoles.radius} 
// //             /> 
// //             <circle 
// //               cx={width - mountingHoles.offset} 
// //               cy={mountingHoles.offset} 
// //               r={mountingHoles.radius}
// //             />
// //             <circle 
// //               cx={mountingHoles.offset} 
// //               cy={height - mountingHoles.offset} 
// //               r={mountingHoles.radius} 
// //             />
// //             <circle 
// //               cx={width - mountingHoles.offset} 
// //               cy={height - mountingHoles.offset} 
// //               r={mountingHoles.radius} 
// //             />
// //           </>
// //         } 