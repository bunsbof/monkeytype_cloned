import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main/mainReducer";

export const store = configureStore({
  reducer: {
    main: mainReducer,
  },
});
