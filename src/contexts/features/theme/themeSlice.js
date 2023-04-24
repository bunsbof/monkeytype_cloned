import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from 'reselect';

const initialState = {
  themeValue: "#111111",
  textColor: "#EEEEEE",
  mainBtnColor: "#ababab",
  errorTypeColor: "#DA3333",
  menuColor: "#444444",
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
      state.menuColor = action.payload;
    },
  },
});


export const themeSelector = createSelector(
  state => state.theme.menuColor,
  state => state.theme.themeValue,
  state => state.theme.mainBtnColor,
  state => state.theme.textColor,
  (menuColor, themeColor, mainButton, textColor) => ({
    menuColor,
    themeColor,
    mainButton,
    textColor
  })
);

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
