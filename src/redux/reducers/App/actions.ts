import {
  SET_ACTIVE_TOOL,
  SET_ACTIVE_PTNUM,
  TOGGLE_VIEW,
  ToggleViewAction,
  SetActiveToolAction,
  SetActivePtnumAction,
  SetActiveColorAction,
  SET_ACTIVE_COLOR,
  SetViewAction,
  SET_VIEW,
  SetScaleAction,
  SET_SCALE,
  ResetScaleAction,
  RESET_SCALE,
  ResetZoomAction,
  RESET_ZOOM,
  SetZoomAction,
  SET_ZOOM,
} from "./actionTypes";
import { Tool, Placement, Color } from "../../../types";

export const setScale = (scale: number): SetScaleAction => ({
  type: SET_SCALE,
  scale,
});
export const resetScale = (): ResetScaleAction => ({
  type: RESET_SCALE,
});

export const setZoom = (zoom: number): SetZoomAction => ({
  type: SET_ZOOM,
  zoom,
});
export const resetZoom = (): ResetZoomAction => ({
  type: RESET_ZOOM,
});

export const setView = (view: Placement): SetViewAction => ({
  type: SET_VIEW,
  view,
});
export const toggleView = (): ToggleViewAction => ({ type: TOGGLE_VIEW });

export const setActiveTool = (tool: Tool | null): SetActiveToolAction => ({
  type: SET_ACTIVE_TOOL,
  tool,
});

export const setActiveColor = (color: Color): SetActiveColorAction => ({
  type: SET_ACTIVE_COLOR,
  color,
});

export const setActivePtnum = (ptnum: number | null): SetActivePtnumAction => ({
  type: SET_ACTIVE_PTNUM,
  ptnum,
});
