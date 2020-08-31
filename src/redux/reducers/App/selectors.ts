import {Reducer} from '../index'

export const getTheme = (reducer: Reducer) => reducer.App.theme

export const getView = (reducer: Reducer) => reducer.App.view
export const getZoom = (reducer: Reducer) => reducer.App.zoom
export const getScale = (reducer: Reducer) => reducer.App.scale