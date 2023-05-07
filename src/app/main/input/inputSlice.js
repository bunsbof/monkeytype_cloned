import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
  key: "",
  errors: 0,
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.value = action.payload;
    },
    setKeyValue: (state, action) => {
      state.key = action.payload;
    },
    resetInputValue: (state) => {
      state.value = "";
      state.key = "";
      state.errors = 0;
    },
  },
});

export const { setInputValue, resetInputValue, setKeyValue } =
  inputSlice.actions;

export default inputSlice.reducer;
