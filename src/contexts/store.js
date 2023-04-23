import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import themeSlice from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeSlice,
  },
});
