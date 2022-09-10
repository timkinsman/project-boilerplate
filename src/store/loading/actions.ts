import { Constants } from './types'
import { action } from 'typesafe-actions'

export const addLoadingIdAction = (id: string) => {
  return action(Constants.ADD_LOADING_ID, {
    id,
  })
}

export const removeLoadingIdAction = (id: string) => {
  return action(Constants.REMOVE_LOADING_ID, {
    id,
  })
}
