import { Tool, Placement, Color, Ptnum } from "../../../types";

export const CREATE_NEW_CONNECTION = "CREATE_NEW_CONNECTION";
export interface CreateNewConnectionAction {
  type: typeof CREATE_NEW_CONNECTION;
  ptnum: number;
  placement: Placement;
  color: Color;
  connectedPoints?: number | number[];
}

export const CONNECT_POINTS = "CONNECT_POINTS";
export interface ConnectPointsAction {
  type: typeof CONNECT_POINTS;
  ptnumArray: number[];
  targetPtnumArray: number[];
}

export const DISCONNECT_POINTS = "DISCONNECT_POINTS";
export interface DisconnectPointsAction {
  type: typeof DISCONNECT_POINTS;
  ptnumArray: number[];
  fromPtnumArray: number[];
}

export const SPLIT_CONNECTION = "SPLIT_CONNECTION";
export interface SplitConnectionAction {
  type: typeof SPLIT_CONNECTION;
  startPtnum: number;
  endPtnum: number;
  newPtnum: number;
}

// export const ADD_CONNECTED_POINT = "ADD_CONNECTED_POINT";
// export interface AddConnectedPointAction {
//   type: typeof ADD_CONNECTED_POINT;
//   connectionPtnum: number | number[];
//   ptnumToAdd: number;
// }

// export const ADD_CONNECTION = "ADD_CONNECTION";
// export interface AddConnectionAction {
//   type: typeof ADD_CONNECTION;
//   ptnum: number;
//   placement: Placement;
//   color: Color;
// }
// export const REMOVE_CONNECTED_POINT = "REMOVE_CONNECTED_POINT";
// export interface RemoveConnectedPointAction {
//   type: typeof REMOVE_CONNECTED_POINT;
//   connectionPtnum: number;
//   ptnumToRemove: number;
// }

// export const CONNECT_POINTS_TO = "CONNECT_POINTS_TO";
// export interface ConnectPointsToAction {
//   type: typeof CONNECT_POINTS_TO;
//   ptnumArray: number[];
//   targetPtnum: number;
// }
// // export const DISCONNECT_POINTS = "DISCONNECT_POINTS";
// // export interface DisconnectPointsAction {
// //   type: typeof DISCONNECT_POINTS;
// //   points: number[];
// // }
// export const SET_TOOL = "SET_TOOL";
// export interface SetToolAction {
//   type: typeof SET_TOOL;
//   tool: Tool;
// }

// export const ADD = "ADD";
// export interface AddAction {
//   type: typeof ADD;
//   ptnum: number;
// }

// export const INSERT_CONNECTION = "INSERT_CONNECTION";
// export interface InsertConnectionAction {
//   type: typeof INSERT_CONNECTION;
//   ptnumStart: number;
//   ptnumEnd: number;
//   column: number;
//   row: number;
// }

// export const SET_COLOR = "SET_COLOR";
// export interface SetColorAction {
//   type: typeof SET_COLOR;
//   color: Color;
// }

// export const SET_PTNUM = "SET_PTNUM";
// export interface SetPtnumAction {
//   type: typeof SET_PTNUM;
//   ptnum: Ptnum;
// }

export type ActionTypes =
  // | SetColorAction
  // | SetToolAction
  // | AddAction
  // | InsertConnectionAction
  // | AddConnectionAction
  | CreateNewConnectionAction
  // | AddConnectedPointAction
  // | RemoveConnectedPointAction
  | ConnectPointsAction
  // | ConnectPointsToAction
  | SplitConnectionAction
  | DisconnectPointsAction;
// | SetPtnumAction;
