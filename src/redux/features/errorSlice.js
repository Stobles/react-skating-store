import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null,
  message: '',
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setResponse(state, action) {
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
  },
});

export const { setResponse } = errorSlice.actions;

export default errorSlice.reducer;
