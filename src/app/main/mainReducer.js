import { combineReducers } from "redux";
import wordsReducer from "./word/wordSlice";
import inputReducer from "./input/inputSlice";

const mainReducer = combineReducers({
  input: inputReducer,
  words: wordsReducer,
});

export default mainReducer;
