import { combineReducers } from "redux";
import wordsReducer from "./word/wordSlice";

const mainReducer = combineReducers({
  words: wordsReducer,
});

export default mainReducer;
