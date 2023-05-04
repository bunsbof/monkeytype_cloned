import { combineReducers } from "redux";
import inputReducer from "./input/inputSlice";

const rootReducer = combineReducers({
  input: inputReducer,
});

export default rootReducer;
