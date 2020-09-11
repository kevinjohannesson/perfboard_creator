import initialState, { State } from "./initialState";
import {
  ActionTypes,
  CREATE_NEW_CONNECTION,
  CONNECT_POINTS,
  DISCONNECT_POINTS,
  SPLIT_CONNECTION,
  // REMOVE_CONNECTED_POINT,
  // DISCONNECT_POINTS,
} from "./actionTypes";

import { Connection, Connections } from "./types";
import { Placement, Color } from "../../../types";

const makeArray = <T>(input?: T | T[]) =>
  input === undefined ? [] : Array.isArray(input) ? input : [input];

const createNewConnection = (
  connections: Connections,
  ptnum: number,
  placement: Placement,
  color: Color,
  connectedPoints?: number | number[]
) => {
  return {
    ...connections,
    [ptnum]: {
      ptnum,
      placement,
      color,
      connectedPoints:
        Array.isArray(connectedPoints) && connectedPoints.length
          ? connectedPoints
          : typeof connectedPoints === "number"
          ? [connectedPoints]
          : [],
    },
  };
};

type UpdateType = "connect" | "disconnect";
const updateConnections = (
  type: UpdateType,
  connections: Connections,
  arr1: number[],
  arr2?: number[]
) => {
  const obj: { [key: number]: Connection } = {};

  const addConnection = (arr1: number[], arr2: number[]) => {
    arr1.forEach((ptnum) => {
      obj[ptnum] = { ...connections[ptnum] };
      obj[ptnum].connectedPoints = [...obj[ptnum].connectedPoints, ...arr2].filter(
        (_ptnum) => _ptnum !== ptnum
      );
    });
  };

  const removeConnection = (arr1: number[], arr2: number[]) => {
    arr1.forEach((ptnum) => {
      obj[ptnum] = { ...connections[ptnum] };
      obj[ptnum].connectedPoints = obj[ptnum].connectedPoints.filter(
        (_ptnum) => !arr2.includes(_ptnum)
      );
    });
  };

  const updateFunctions: { [key in UpdateType]: (a: number[], b: number[]) => void } = {
    connect: addConnection,
    disconnect: removeConnection,
  };

  if (arr2 && arr2.length) {
    updateFunctions[type](arr1, arr2);
    updateFunctions[type](arr2, arr1);
  } else {
    updateFunctions[type](arr1, arr1);
  }
  return { ...connections, ...obj };
};

export default function (state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case CREATE_NEW_CONNECTION: {
      const { ptnum, placement, color, connectedPoints } = action;
      const { connections } = state;
      const updatedConnections = createNewConnection(
        connections,
        ptnum,
        placement,
        color,
        connectedPoints
      );
      return {
        ...state,
        connections: { ...updatedConnections },
      };
    }

    case CONNECT_POINTS: {
      const { ptnumArray, targetPtnumArray } = action;
      const { connections } = { ...state };
      const updatedConnections = updateConnections(
        "connect",
        connections,
        ptnumArray,
        targetPtnumArray
      );
      return {
        ...state,
        connections: {
          ...state.connections,
          ...updatedConnections,
        },
      };
    }

    case DISCONNECT_POINTS: {
      const { ptnumArray, fromPtnumArray } = action;
      const { connections } = state;
      const updatedConnections = updateConnections(
        "disconnect",
        connections,
        ptnumArray,
        fromPtnumArray
      );
      return {
        ...state,
        connections: {
          ...state.connections,
          ...updatedConnections,
        },
      };
    }

    case SPLIT_CONNECTION: {
      const { startPtnum, endPtnum, newPtnum } = action;
      const { connections } = state;
      const { placement, color } = connections[startPtnum];
      const withNewPoint = createNewConnection(connections, newPtnum, placement, color);

      const withNewConnections = updateConnections(
        "connect",
        withNewPoint,
        [startPtnum, endPtnum],
        makeArray(newPtnum)
      );

      const withDisconnectedEndpoints = updateConnections("disconnect", withNewConnections, [
        startPtnum,
        endPtnum,
      ]);

      return { ...state, connections: { ...withDisconnectedEndpoints } };
    }
    // case CONNECT_POINTS_TO: {
    //   const { ptnumArray, targetPtnum } = action;
    //   const { connections } = { ...state };
    //   const updatedConnections = (() => {
    //     const obj: { [key: number]: Connection } = {};
    //     ptnumArray.forEach((ptnum) => {
    //       obj[ptnum] = { ...connections[ptnum] };
    //       obj[ptnum].connectedPoints = [...obj[ptnum].connectedPoints, targetPtnum];
    //     });
    //     return obj;
    //   })();
    //   return {
    //     ...state,
    //     connections: {
    //       ...state.connections,
    //       ...updatedConnections,
    //     },
    //   };
    // }

    // case ADD_CONNECTED_POINT: {
    //   const { connectionPtnum, ptnumToAdd } = action;
    //   // const pointNumber = "pt" + connectionPtnum;
    //   return {
    //     ...state,
    //     connections: {
    //       ...state.connections,
    //       [connectionPtnum]: {
    //         ...state.connections[connectionPtnum],
    //         connectedPoints: [...state.connections[connectionPtnum].connectedPoints, ptnumToAdd],
    //       },
    //     },
    //   };
    // }
    // case REMOVE_CONNECTED_POINT: {
    //   const { connectionPtnum, ptnumToRemove } = action;
    //   const pointNumber = "pt" + connectionPtnum;
    //   return {
    //     ...state,
    //     connections: {
    //       ...state.connections,
    //       [pointNumber]: {
    //         ...state.connections[pointNumber],
    //         connectedPoints: [...state.connections[pointNumber].connectedPoints].filter(
    //           (ptnum) => ptnum !== ptnumToRemove
    //         ),
    //       },
    //     },
    //   };
    // }

    // case DISCONNECT_POINTS: {
    //   const { points } = action;
    //   const { connections } = { ...state };
    //   points.forEach((num) => {
    //     const ptnum = "pt" + num;
    //     const { connectedPoints } = connections[ptnum];
    //     connections[ptnum].connectedPoints = [...connectedPoints.filter((_ptnum) => !points.includes(_ptnum))];
    //   });
    //   return { ...state, connections };
    // }

    // case CONNECT_POINTS: {
    //   const { points } = action;
    //   const connections = { ...state.connections };
    //   points.forEach((_ptnum) => {
    //     const ptnum = "pt" + _ptnum;
    //     const { connectedPoints } = connections[ptnum];
    //     connections[ptnum].connectedPoints = [...connectedPoints, _ptnum];
    //   });
    //   return { ...state, connections: { ...connections } };
    // }
    // case CONNECT_POINTS_TO: {
    //   const { ptnumArray, targetPtnum } = action;
    //   const { connections } = { ...state };
    //   const updatedConnections = (() => {
    //     const obj: { [key: string]: Connection } = {};
    //     ptnumArray.forEach((ptnum) => {
    //       const index = "pt" + ptnum;
    //       obj[index] = { ...connections[index] };
    //       obj[index].connectedPoints = [...obj[index].connectedPoints, targetPtnum];
    //     });
    //     return obj;
    //   })();

    //   return {
    //     ...state,
    //     connections: {
    //       ...state.connections,
    //       ...updatedConnections,
    //     },
    //   };
    // }
    // case ADD_CONNECTION: {
    //   const { ptnum, placement, color } = action;
    //   const newConnection = createNewConnection(ptnum, placement, color);
    //   return { ...state, connections: { ...state.connections, ["pt" + ptnum]: newConnection } };
    // }
    // case ADD: {
    //   switch (state.currentTool) {
    //     case "Connection": {
    //       const connections = { ...state.connections };
    //       const { ptnum } = action;
    //       const prevPtnum = state.currentPtnum;
    //       if (connections["pt" + ptnum] !== undefined) {
    //         // A connection exists on this point:
    //         if (prevPtnum !== undefined) {
    //           // Currently active point is not the first drawn point of current tool lifecycle
    //           const currentConnection = connections["pt" + ptnum];
    //           if (currentConnection.connectedPoints.includes(prevPtnum) === false) {
    //             // Do not create duplicate connections:
    //             const _newConnection = {
    //               ...currentConnection,
    //               connectedPoints: [...currentConnection.connectedPoints, prevPtnum],
    //             };
    //             connections["pt" + ptnum] = _newConnection;
    //           }
    //         }
    //       } else {
    //         // Connection is new:
    //         const _newConnection = {
    //           ptnum,
    //           connectedPoints: prevPtnum !== undefined ? [prevPtnum] : [],
    //           color: state.currentColor,
    //         };
    //         connections["pt" + ptnum] = createNewConnection(
    //           ptnum,
    //           "front",
    //           state.currentColor,
    //           prevPtnum !== undefined ? [prevPtnum] : []
    //         );
    //       }
    //       if (prevPtnum !== undefined && connections["pt" + prevPtnum] !== undefined) {
    //         // Previously created point exists and is a connection:
    //         const prevConnection = connections["pt" + prevPtnum];
    //         if (prevConnection.connectedPoints.includes(ptnum) === false) {
    //           // Do not create duplicate connections:
    //           const _newConnection = {
    //             ...prevConnection,
    //             connectedPoints: [...prevConnection.connectedPoints, ptnum],
    //           };
    //           connections["pt" + prevPtnum] = _newConnection;
    //         }
    //       }
    //       return {
    //         ...state,
    //         connections,
    //         currentPtnum: ptnum,
    //       };
    //     }
    //     default: {
    //       return { ...state };
    //     }
    //   }
    // }
    // case INSERT_CONNECTION: {
    //   if (state.currentTool === "Connection") {
    //     const { column, row, ptnumStart, ptnumEnd } = action;
    //     const { rows } = state.board.grid;
    //     const connections = { ...state.connections };
    //     const ptnum = column * rows + row;
    //     if (state.currentPtnum !== undefined) {
    //       const key = "pt" + state.currentPtnum;
    //       const { connectedPoints } = connections[key];
    //       connections[key].connectedPoints = [...connectedPoints, ptnum];
    //     }
    //     if (ptnum !== ptnumStart && ptnum !== ptnumEnd) {
    //       // Exclude endpoints
    //       const connection = createNewConnection(ptnum, "front", state.currentColor, [ptnumStart, ptnumEnd]);
    //       console.log(connection);
    //       console.log(ptnum);
    //       console.log("ptnumStart: ", ptnumStart);
    //       console.log("ptnumEnd: ", ptnumEnd);
    //       const removePoint = (ptnumArray: number[], ptnumToRemove: number) =>
    //         ptnumArray.filter((ptnum) => ptnum !== ptnumToRemove);

    //       const startConnection = { ...connections["pt" + ptnumStart] };
    //       const endConnection = { ...connections["pt" + ptnumEnd] };

    //       const startConnectedPoints = removePoint(startConnection.connectedPoints, ptnumEnd);
    //       const endConnectedPoints = removePoint(endConnection.connectedPoints, ptnumStart);

    //       const updatedStartConnection = { ...startConnection, connectedPoints: [...startConnectedPoints, ptnum] };
    //       const updatedEndConnection = { ...endConnection, connectedPoints: [...endConnectedPoints, ptnum] };

    //       return {
    //         ...state,
    //         currentPtnum: ptnum,
    //         connections: {
    //           ...state.connections,
    //           ["pt" + ptnum]: connection,
    //           ["pt" + ptnumStart]: updatedStartConnection,
    //           ["pt" + ptnumEnd]: updatedEndConnection,
    //         },
    //       };
    //     } else {
    //       if (state.currentPtnum !== undefined) {
    //         console.log("endpoint clicked");
    //         const connection = updateConnection(connections["pt" + ptnum], state.currentPtnum);
    //         return { ...state, connections: { ...state.connections, ["pt" + ptnum]: connection }, currentPtnum: ptnum };
    //       } else return { ...state, currentPtnum: ptnum };
    //     }
    //   } else return state;
    // }
    default:
      return state;
  }
}
