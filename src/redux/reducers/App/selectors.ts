import { State } from "../index";

export const getView = (state: State) => state.App.view;
export const getZoom = (state: State) => state.App.zoom;
export const getScale = (state: State) => state.App.scale;

export const getActiveTool = (state: State) => state.App.activeTool;
export const getActiveColor = (state: State) => state.App.activeColor;
