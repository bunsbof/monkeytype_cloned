import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  caretWidth: 0,
  animationObj: {
    top: 0,
    left: 0,
    width: 0,
  },
};

const beamSlice = createSlice({
  name: "beam",
  initialState,
  reducers: {
    setCaretWidth(state, action) {
      state.caretWidth = action.payload;
    },
    setAnimationObj(state, action) {
      state.animationObj = action.payload;
    },
  },
});

export const { setCaretWidth, setAnimationObj } = beamSlice.actions;
export default beamSlice.reducer;
