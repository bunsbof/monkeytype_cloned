import { createSlice } from "@reduxjs/toolkit";
import { MenuModeGenerator } from "../../../utils/MenuModes";

const initialState = {
  value: new MenuModeGenerator(),
  config: {
    time: 30,
    words: 25,
    quotes: "medium",
    zen: "",
    custom: "The quick brown fox jumps over the lazy dog",
  },
  currentMode: {
    defaultMode: "time",
    defaultValue: 15,
  },
};

const modesSlice = createSlice({
  name: "modes",
  initialState,
  reducers: {
    changeMode(state, action) {
      const { key, value } = action.payload;

      state.config[key] = value;
      state.currentMode.defaultMode = key;
      state.currentMode.defaultValue = value;

      localStorage.setItem("currentMode", JSON.stringify(state.currentMode))
      localStorage.setItem("config", JSON.stringify(state.config));
    },
  },
});

export const { changeMode } = modesSlice.actions;
export default modesSlice.reducer;
