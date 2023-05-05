import {
  configureStore,
} from "@reduxjs/toolkit";
import mainReducer from "./main/mainReducer";
import { serialize, deserialize } from "./main/word/wordSlice";

export default configureStore({
  reducer: {
    main: mainReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["myAction"],
        ignoredPaths: ["main.words.value"], // Ignore the 'words.value' path
        serialize: serialize, // Use our custom serialize function
        deserialize: deserialize // Use our custom deserialize function
      }
    })
});
