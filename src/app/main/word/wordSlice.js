import { createSlice } from "@reduxjs/toolkit";
import { WordHash } from "../../../utils/hashedWord"; // Import the WordHash class

const words = [
  "take",
  "fashion",
  "leather",
  "take",
  "forensic",
  "marble",
  "take",
  "divide",
  "unending",
  "banding",
  "broad",
  "subjugate",
  "determine",
  "inflate",
  "forthcoming",
  "climate",
  "make",
  "drunkenness",
  "yoke",
  "glumness",
  "paw",
  "predict",
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
