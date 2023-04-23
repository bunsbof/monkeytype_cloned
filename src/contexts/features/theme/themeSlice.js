import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themeValue: "#111111",
  textColor: "#EEEEEE",
  mainBtnColor: "#444444",
  errorTypeColor: "#DA3333",
};

export const themeSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.themeValue = action.payload;
      state.textColor = action.payload;
      state.mainBtnColor = action.payload;
      state.errorTypeColor = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
