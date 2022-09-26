import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface LoadingState {
  ids: string[];
}

// Define the initial state using that type
const initialState: LoadingState = {
  ids: [],
};

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    addLoadingId: (state, action: PayloadAction<string>) => {
      state.ids = [...state.ids, action.payload];
    },
    removeLoadingId: (state, action: PayloadAction<string>) => {
      state.ids = [...state.ids.filter((id) => id !== action.payload)];
    },
  },
});

export const { addLoadingId, removeLoadingId } = loadingSlice.actions;
export default loadingSlice.reducer;
