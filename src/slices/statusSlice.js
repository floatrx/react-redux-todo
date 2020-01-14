import { createSlice } from '@reduxjs/toolkit';

const statusSlice = createSlice({
  name: 'status',
  initialState: {
    isProcessing: true,
    message: 'Loading',
  },
  reducers: {
    showSpinner(state, { payload }) {
      const message = payload || 'Loading';
      return {
        isProcessing: true,
        message,
      };
    },
    hideSpinner(state, { payload }) {
      return {
        isProcessing: false,
        message: ''
      };
    },
  },
});

export const { showSpinner, hideSpinner } = statusSlice.actions;
export const statusReducer = statusSlice.reducer;
