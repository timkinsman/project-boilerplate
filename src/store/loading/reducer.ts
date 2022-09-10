import { Constants, LoadingActions, LoadingState } from './types'

const initialState: LoadingState = []

export const loadingReducer = (state = initialState, action: LoadingActions): LoadingState => {
  switch (action.type) {
    case Constants.ADD_LOADING_ID: {
      return [...state, action.payload.id]
    }

    case Constants.REMOVE_LOADING_ID: {
      return [...state.filter((id) => id !== action.payload.id)]
    }

    default: {
      return state
    }
  }
}
