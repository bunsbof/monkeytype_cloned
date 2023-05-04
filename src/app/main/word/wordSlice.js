import { createSlice } from "@reduxjs/toolkit";
import { WordHash } from "../../../utils/hashedWord"; // Import the WordHash class

const words = [
  "take",
  "fashion",
  "leather",
  // ... other words ...
  "miracle",
];

// Initialize the state with a new instance of WordHash
const initialState = {
  value: new WordHash(words),
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {},
});

export default wordsSlice.reducer;
