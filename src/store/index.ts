import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, createStore } from 'redux'
import { LoadingState } from './loading/types'
import { loadingReducer } from './loading/reducer'

export type RootState = {
  loadingIds: LoadingState
}

const store = createStore<RootState, any, any, any>(
  combineReducers({
    loadingIds: loadingReducer,
  }),
  composeWithDevTools(),
)
export default store
