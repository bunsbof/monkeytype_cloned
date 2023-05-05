import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
import { WordHash } from "../../../utils/hashedWord";

const words = [
  "take",
  "fashion",
  "leather",
  "forensic",
  "take",
  "marble",
  "divide",
  "unending",
  "banding",
  "take",
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

const initialState = {
  value: new WordHash(words),
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    updateWordInput: (state, action) =>
      produce(state, (draftState) => {
        const { wordIndex, input } = action.payload;
        const wordEntry = draftState.value.getWord(words[wordIndex]);
        if (wordEntry) {
          wordEntry.input = input;
        }
      }),
  },
});

export function serialize(state) {
  // Serialize the WordHash object into a plain object
  const serializedWordHash = Array.from(state.words.value.wordHash.entries()).reduce(
    (acc, [key, value]) => {
      acc[key] = value;
      return acc;
    },
    {}
  );

  return {
    ...state,
    words: {
      ...state.words,
      value: serializedWordHash,
    },
  };
}

export function deserialize(state) {
  // Deserialize the plain object into a WordHash object
  const deserializedWordHash = new WordHash();
  Object.entries(state.words.value).forEach(([key, value]) => {
    deserializedWordHash.setWord(key, value);
  });

  return {
    ...state,
    words: {
      ...state.words,
      value: deserializedWordHash,
    },
  };
}

export const { updateWordInput } = wordsSlice.actions;

export default wordsSlice.reducer;
