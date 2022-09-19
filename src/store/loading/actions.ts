import { Constants } from './types'
import { action } from 'typesafe-actions'

export const addLoadingId = (id: string) => {
  return action(Constants.ADD_LOADING_ID, {
    id,
  })
}

export const removeLoadingId = (id: string) => {
  return action(Constants.REMOVE_LOADING_ID, {
    id,
  })
}
