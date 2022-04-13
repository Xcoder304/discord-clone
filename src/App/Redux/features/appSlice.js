import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  app: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    login: (state, action) => {
      state.app = action.payload;
    },
    loginOut: (state, action) => {
      state.app = null;
    },
  },
});

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export const selectapp = (state) => state.app.app;

export default appSlice.reducer;
