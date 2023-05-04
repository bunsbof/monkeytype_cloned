import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
    resetInputValue: (state) => {
      state.value = "";
    },
  },
});

export const { setInputValue, resetInputValue } = inputSlice.actions;

export default inputSlice.reducer;
