import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './loading';

const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
