import {
  // ADD_CONNECTION,
  // AddConnectionAction,
  // ADD,
  // AddAction,
  // InsertConnectionAction,
  // INSERT_CONNECTION,
  CreateNewConnectionAction,
  CREATE_NEW_CONNECTION,
  // RemoveConnectedPointAction,
  // REMOVE_CONNECTED_POINT,
  DisconnectPointsAction,
  DISCONNECT_POINTS,
  ConnectPointsAction,
  CONNECT_POINTS,
  SplitConnectionAction,
  SPLIT_CONNECTION,
  // ConnectPointsToAction,
  // CONNECT_POINTS_TO,
} from "./actionTypes";
import { Color } from "../../../types";
import { Placement } from "./types";
// import { AddConnectedPointAction, ADD_CONNECTED_POINT } from "../Project/actionTypes";

export const createNewConnection = (
  ptnum: number,
  placement: Placement,
  color: Color,
  connectedPoints?: number | number[]
): CreateNewConnectionAction => ({
  type: CREATE_NEW_CONNECTION,
  ptnum,
  placement,
  color,
  connectedPoints,
});

export const connectPoints = (
  _ptnumArray: number | number[],
  _targetPtnumArray?: number | number[]
): ConnectPointsAction => {
  const ptnumArray = makeArray(_ptnumArray);
  const targetPtnumArray = makeArray(_targetPtnumArray);
  return {
    type: CONNECT_POINTS,
    ptnumArray,
    targetPtnumArray,
  };
};

export const disconnectPoints = (
  _ptnumArray: number | number[],
  _fromPtnumArray?: number | number[]
): DisconnectPointsAction => {
  const ptnumArray = makeArray(_ptnumArray);
  const fromPtnumArray = makeArray(_fromPtnumArray);
  return {
    type: DISCONNECT_POINTS,
    ptnumArray,
    fromPtnumArray,
  };
};

const makeArray = <T>(input?: T | T[]) =>
  input === undefined ? [] : Array.isArray(input) ? input : [input];

export const splitConnection = (
  startPtnum: number,
  endPtnum: number,
  newPtnum: number
): SplitConnectionAction => ({
  type: SPLIT_CONNECTION,
  startPtnum,
  endPtnum,
  newPtnum,
});
// export const addConnection = (
//   ptnum: number,
//   placement: Placement,
//   color: Color
// ): AddConnectionAction => ({
//   type: ADD_CONNECTION,
//   ptnum,
//   placement,
//   color,
// });

// export const createNewConnection = (
//   ptnum: number,
//   placement: Placement,
//   color: Color,
//   connectedPoints?: number | number[]
// ): CreateNewConnectionAction => {
//   connectedPoints = Array.isArray(connectedPoints)
//     ? connectedPoints
//     : typeof connectedPoints === "number"
//     ? [connectedPoints]
//     : [];
//   return {
//     type: CREATE_NEW_CONNECTION,
//     ptnum,
//     placement,
//     color,
//     connectedPoints,
//   };
// };

// export const addConnectedPoint = (
//   connectionPtnum: number | number[],
//   ptnumToAdd: number
// ): AddConnectedPointAction => ({
//   type: ADD_CONNECTED_POINT,
//   connectionPtnum,
//   ptnumToAdd,
// });
// export const removeConnectedPoint = (
//   connectionPtnum: number,
//   ptnumToRemove: number
// ): RemoveConnectedPointAction => ({
//   type: REMOVE_CONNECTED_POINT,
//   connectionPtnum,
//   ptnumToRemove,
// });

// export const connectPointsTo = (
//   ptnumArray: number | number[],
//   targetPtnum: number
// ): ConnectPointsToAction => {
//   ptnumArray = Array.isArray(ptnumArray) ? ptnumArray : [ptnumArray];
//   return {
//     type: CONNECT_POINTS_TO,
//     ptnumArray,
//     targetPtnum,
//   };
// };

// export const insertConnection = (
//   ptnumStart: number,
//   ptnumEnd: number,
//   column: number,
//   row: number
// ): InsertConnectionAction => ({
//   type: INSERT_CONNECTION,
//   ptnumStart,
//   ptnumEnd,
//   column,
//   row,
// });

// export const add = (ptnum: number): AddAction => ({
//   type: ADD,
//   ptnum,
// });
