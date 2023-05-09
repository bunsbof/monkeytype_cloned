import { combineReducers } from "redux";
import wordsReducer from "./word/wordSlice";
import inputReducer from "./input/inputSlice";
import beamReducer from "./beam/beamSlice";

const mainReducer = combineReducers({
  input: inputReducer,
  words: wordsReducer,
  beam: beamReducer,
});

export default mainReducer;
