import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export enum Constants {
  ADD_LOADING_ID = 'ADD_LOADING_ID',
  REMOVE_LOADING_ID = 'REMOVE_LOADING_ID',
}

export type LoadingActions = ActionType<typeof actions>
export type LoadingState = string[]
