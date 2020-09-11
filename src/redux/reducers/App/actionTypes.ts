import { Color, Tool, Placement } from "../../../types";

export const SET_VIEW = "SET_VIEW";
export interface SetViewAction {
  type: typeof SET_VIEW;
  view: Placement;
}
export const TOGGLE_VIEW = "TOGGLE_VIEW";
export interface ToggleViewAction {
  type: typeof TOGGLE_VIEW;
}

export const SET_ZOOM = "SET_ZOOM";
export interface SetZoomAction {
  type: typeof SET_ZOOM;
  zoom: number;
}
export const RESET_ZOOM = "RESET_ZOOM";
export interface ResetZoomAction {
  type: typeof RESET_ZOOM;
}

export const SET_SCALE = "SET_SCALE";
export interface SetScaleAction {
  type: typeof SET_SCALE;
  scale: number;
}
export const RESET_SCALE = "RESET_SCALE";
export interface ResetScaleAction {
  type: typeof RESET_SCALE;
}

export const SET_ACTIVE_TOOL = "SET_ACTIVE_TOOL";
export interface SetActiveToolAction {
  type: typeof SET_ACTIVE_TOOL;
  tool: Tool | null;
}

export const SET_ACTIVE_PTNUM = "SET_ACTIVE_PTNUM";
export interface SetActivePtnumAction {
  type: typeof SET_ACTIVE_PTNUM;
  ptnum: number | null;
}

export const SET_ACTIVE_COLOR = "SET_ACTIVE_COLOR";
export interface SetActiveColorAction {
  type: typeof SET_ACTIVE_COLOR;
  color: Color;
}

export const DUMMY_ACTION = "DUMMY_ACTION";
export interface DummyAction {
  type: typeof DUMMY_ACTION;
}

export type ActionTypes =
  | SetScaleAction
  | ResetScaleAction
  | SetZoomAction
  | ResetZoomAction
  | SetViewAction
  | ToggleViewAction
  | SetActiveToolAction
  | SetActiveColorAction
  | SetActivePtnumAction
  | DummyAction;
