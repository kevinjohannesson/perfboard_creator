// import { ThunkAction } from "redux-thunk";
// import { Action } from "redux";
// import { State } from "./index";
import { Thunk } from "./types";
// import { ADD_CONNECTION } from "./Project/actionTypes";
import {
  // addConnection,
  createNewConnection,
  // addConnectedPoint,
  // removeConnectedPoint,
  connectPoints,
  disconnectPoints,
} from "./Project/actions";
import { setActivePtnum } from "./App/actions";
import { Vector } from "../../types";
import map from "../../components/map";

// export const addConnection = (ptnum: number): Thunk<void> => async (dispatch, getState) => {
//   console.log(getState());
//   const state = getState();
//   const { view, currentColor } = state.App;
//   dispatch({ type: ADD_CONNECTION, ptnum, placement: view, color: currentColor });
//   // const asyncResp = await exampleAPI()
//   // dispatch(
//   //   sendMessage({
//   //     message,
//   //     user: asyncResp,
//   //     timestamp: new Date().getTime()
//   //   })
//   // )
// };

export const clickHandlerEmptyPoint = (ptnum: number): Thunk<void> => (dispatch, getState) => {
  const state = getState();
  const { activeTool } = state.App;
  // Do nothing if there is no tool selected:
  if (activeTool === null) return;
  else {
    const { activePtnum } = state.App;
    // Do nothing if the currently active ptnum is the same as the new provided ptnum IE the same point is pressed twice:
    if (activePtnum === ptnum) return;
    else {
      switch (activeTool) {
        case "Connection": {
          // If another point number is acting as currentPtnum, add a connection to the new point
          if (activePtnum !== null) {
            console.log("Previous ptnum active");
            dispatch(connectPoints(activePtnum, ptnum));
          }
          // if no connection exists on the new ptnum, create a new connection
          if (state.Project.connections[ptnum] === undefined) {
            const { activeColor, view } = state.App;
            const connectedPoints = activePtnum !== null ? [activePtnum] : [];
            dispatch(createNewConnection(ptnum, view, activeColor, connectedPoints));
            dispatch(setActivePtnum(ptnum));
            return;
          }
          break;
        }
        case "Header": {
          console.log("Header");
          break;
        }
      }
    }
  }
  console.log("continue");
};

export const clickHandlerConnectionPoint = (ptnum: number): Thunk<void> => (dispatch, getState) => {
  const state = getState();
  const { activeTool } = state.App;
  // Do nothing if there is no tool selected:
  if (activeTool === "none") return;
  else {
    console.log("$currentTool is ", activeTool);
    const { activePtnum } = state.App;
    // Do nothing if the currently active ptnum is the same as the new provided ptnum IE the same point is pressed twice:
    if (activePtnum === ptnum) return;
    else {
      switch (activeTool) {
        case "Connection": {
          console.log("Connection");
          // If another point number is acting as currentPtnum, add a connection to the new connection point
          if (activePtnum !== null) {
            console.log("Previous ptnum active");
            dispatch(connectPoints([activePtnum, ptnum]));
            // dispatch(addConnectedPoint(currentPtnum, ptnum));
            // dispatch(addConnectedPoint(ptnum, currentPtnum));
          }
          dispatch(setActivePtnum(ptnum));
          break;
        }
        case "Header": {
          console.log("Header");
          break;
        }
      }
    }
    console.log("continue");
  }
};

export const clickHandlerConnectionLine = (
  startPtnum: number,
  endPtnum: number,
  mouseClickLocation: Vector,
  boundingClientRect: DOMRect
): Thunk<void> => async (dispatch, getState) => {
  const state = getState();
  const { activeTool } = state.App;
  // Do nothing if there is no tool selected:
  if (activeTool === "none") return;
  else {
    switch (activeTool) {
      case "Connection": {
        const { x, y } = mouseClickLocation;
        const x_local = x - boundingClientRect.left; //x position within the element.
        const y_local = y - boundingClientRect.top; //y position within the element.
        const mapped = {
          x: map(x_local, 0, boundingClientRect.width, 0, 1),
          y: map(y_local, 0, boundingClientRect.height, 0, 1),
        };
        const line = {
          start: { ...state.Board.grid.points["pt" + startPtnum] },
          end: { ...state.Board.grid.points["pt" + endPtnum] },
        };
        console.log(line);
        const closestColumn = (function () {
          if (line.start.column === line.end.column) return line.start.column;
          else {
            const lowestColumn = Math.min(line.start.column, line.end.column);
            const highestColumn = Math.max(line.start.column, line.end.column);
            return Math.round(map(mapped.x, 0, 1, lowestColumn, highestColumn));
          }
        })();
        const closestRow = (function () {
          if (line.start.row === line.end.row) return line.start.row;
          else {
            const lowestRow = Math.min(line.start.row, line.end.row);
            const highestRow = Math.max(line.start.row, line.end.row);
            return Math.round(map(mapped.y, 0, 1, lowestRow, highestRow));
          }
        })();
        console.log("closestRow: ", closestRow);
        console.log("closestColumn: ", closestColumn);
        const { rows } = state.Board.grid;
        // const connections = { ...state.connections };
        const closestPtnum = closestColumn * rows + closestRow;
        console.log(closestPtnum);
        if (closestPtnum !== startPtnum && closestPtnum !== endPtnum) {
          if (state.Project.connections["pt" + closestPtnum] === undefined) {
            dispatch(
              createNewConnection(closestPtnum, state.App.view, state.App.activeColor, [
                startPtnum,
                endPtnum,
              ])
            );
            dispatch(disconnectPoints([startPtnum, endPtnum]));
            dispatch(connectPoints([startPtnum, endPtnum], closestPtnum));
            // dispatch(addConnectedPoint(startPtnum, closestPtnum));
            // dispatch(addConnectedPoint(endPtnum, closestPtnum));
            // dispatch(setCurrentPtnum(closestPtnum));
          } else {
            if (state.App.activePtnum !== null) {
              dispatch(connectPoints(closestPtnum, state.App.activePtnum));
            }
          }
        }
        break;
      }
      case "Header": {
        console.log("Header");
        break;
      }
    }
  }
  console.log("continue");
};
