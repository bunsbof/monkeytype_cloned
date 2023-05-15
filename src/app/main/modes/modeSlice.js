import { createSlice } from "@reduxjs/toolkit";
import { MenuModeGenerator } from "../../../utils/MenuModes";

const initialState = {
  value: new MenuModeGenerator(),
};

const modesSlice = createSlice({
  name: "modes",
  initialState,
  reducers: {
    changeMode(state, action) {
    //   state.value = action.payload;
    },
  },
});

export const { changeMode } = modesSlice.actions;
export default modesSlice.reducer;
