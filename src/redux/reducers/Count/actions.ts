import {ADD, SUBTRACT} from './actionTypes'

export const add = (n: number) => ({type: ADD, payload: n})
export const subtract = (n: number) => ({type: SUBTRACT, payload: n})

interface AddAction {
  type: typeof ADD,
  payload: number,
}

interface SubtractAction {
  type: typeof SUBTRACT,
  payload: number,
}

export type Actions = AddAction | SubtractAction