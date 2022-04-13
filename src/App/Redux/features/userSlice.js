import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    loginOut: (state, action) => {
      state.user = null;
    },
  },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
