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
  activeWordIndex: 0,
  classNames: [],
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    updateWordInput: (state, action) =>
      produce(state, (draftState) => {
        const { word, wordIndex, input, errors } = action.payload;
        const wordEntry = draftState.value.getWord(word);

        if (wordEntry) {
          if (
            wordEntry.occurrenceIndices &&
            wordEntry.occurrenceIndices.length > 0
          ) {
            if (wordEntry.wordIndex === wordIndex) {
              // Modify input of the main key
              wordEntry.input = input;
              wordEntry.errors = errors;
            } else {
              // Loop through occurrenceIndices to find matching wordIndex
              const occurrenceIndex = wordEntry.occurrenceIndices.find(
                (oi) => oi.wordIndex === wordIndex
              );
              if (occurrenceIndex) {
                // Modify input of the matched occurrenceIndex
                occurrenceIndex.input = input;
                occurrenceIndex.errors = errors;
              }
            }
          } else {
            // Modify input of the main key (non-duplicate word)
            wordEntry.input = input;
            wordEntry.errors = errors;
          }
        }
      }),
    activeWordIndexInc: (state) => {
      state.activeWordIndex += 1;
    },
  },
});

export function serialize(state) {
  // Serialize the WordHash object into a plain object
  const serializedWordHash = Array.from(
    state.words.value.wordHash.entries()
  ).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

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

export const { updateWordInput, activeWordIndexInc } = wordsSlice.actions;

export default wordsSlice.reducer;
