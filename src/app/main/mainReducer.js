import { combineReducers } from "redux";
import wordsReducer from "./word/wordSlice";
import inputReducer from "./input/inputSlice";
import beamReducer from "./beam/beamSlice";
import modeReducer from "./modes/modeSlice";

const mainReducer = combineReducers({
  input: inputReducer,
  words: wordsReducer,
  beam: beamReducer,
  modes: modeReducer,
});

export default mainReducer;
