import {
  TOGGLE_VIEW,
  // SET_CURRENT_TOOL,
  // SET_CURRENT_PTNUM,
  // SET_CURRENT_COLOR,
  // SET_CURRENT_VIEW,
  // SET_CURRENT_ZOOM,
  SET_ZOOM,
  RESET_ZOOM,
  SET_SCALE,
  RESET_SCALE,
  SET_VIEW,
  SET_ACTIVE_TOOL,
  SET_ACTIVE_COLOR,
  SET_ACTIVE_PTNUM,
} from "./actionTypes";
import { ActionTypes } from "./actionTypes";
import { initialState, State } from "./initialState";

export default function (state: State = initialState, action: ActionTypes): State {
  switch (action.type) {
    case SET_ZOOM: {
      const { zoom } = action;
      return { ...state, zoom };
    }
    case RESET_ZOOM: {
      return { ...state, zoom: 1 };
    }
    case SET_SCALE: {
      const { scale } = action;
      return { ...state, scale };
    }
    case RESET_SCALE: {
      return { ...state, scale: 1 };
    }

    case SET_VIEW: {
      const { view } = action;
      return { ...state, view };
    }
    case TOGGLE_VIEW: {
      return { ...state, view: state.view === "front" ? "back" : "front" };
    }

    case SET_ACTIVE_TOOL: {
      const { tool } = action;
      return { ...state, activeTool: tool };
    }
    case SET_ACTIVE_COLOR: {
      const { color } = action;
      return { ...state, activeColor: color };
    }
    case SET_ACTIVE_PTNUM: {
      const { ptnum } = action;
      return { ...state, activePtnum: ptnum };
    }
    // case SET_CURRENT_TOOL: {
    //   return {
    //     ...state,
    //     currentTool: action.tool,
    //     currentPtnum: action.tool === "none" ? null : state.currentPtnum,
    //   };
    // }
    // case SET_CURRENT_COLOR: {
    //   return { ...state, currentColor: action.color };
    // }
    // case SET_CURRENT_PTNUM: {
    //   return { ...state, currentPtnum: action.ptnum };
    // }
    // case SET_CURRENT_ZOOM: {
    //   return { ...state, zoom: action.zoom };
    // }
    // case SET_CURRENT_VIEW: {
    //   return { ...state, currentView: action.view };
    // }
    // case TOGGLE_VIEW: {
    //   return { ...state, view: state.view === "front" ? "back" : "front" };
    // }
    default:
      return state;
  }
}
