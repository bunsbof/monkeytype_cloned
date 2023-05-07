export class WordHash {
  constructor(initialWords = []) {
    this.wordHash = new Map();
    const duplicatedWords = new Set();
    initialWords.forEach((word, idx) => {
      if (duplicatedWords.has(word)) {
        const currentWord = this.getWord(word);
        if (currentWord) {
          const occurrenceIndices = currentWord.occurrenceIndices;
          const isAlreadyIndexed = occurrenceIndices.some(
            (oi) => oi.wordIndex === idx
          );
          if (!isAlreadyIndexed) {
            occurrenceIndices.push({
              name: word,
              input: "",
              errors: 0,
              wordIndex: idx,
            });
          }
        } else {
          this.setWord(word, {
            input: "",
            errors: 0,
            wordIndex: idx,
            occurrenceIndices: [
              {
                name: word,
                input: "",
                errors: 0,
                wordIndex: duplicatedWords[word],
              },
              { name: word, input: "", errors: 0, wordIndex: idx },
            ],
          });
        }
      } else {
        duplicatedWords.add(word);
        this.setWord(word, {
          input: "",
          errors: 0,
          wordIndex: idx,
          occurrenceIndices: [],
        });
      }
    });

    this.wordHash.forEach((value, key) => {
      if (value.occurrenceIndices.length === 0) {
        delete value.occurrenceIndices;
      }
    });
  }

  setWord(word, value) {
    this.wordHash.set(word, value);
  }

  getWord(word) {
    return this.wordHash.get(word);
  }

  getWordByIndex(wordIndex) {
    const words = this.toSerializable();
    const key = this.getWords()[wordIndex];

    if (words) {
      const mainKey = words[key];
      if (mainKey) {
        if (mainKey.wordIndex === wordIndex) {
          // Get input and key of the main key
          const { input, errors } = mainKey;
          return { passedInput: input, passedKey: key, passedErrors: errors };
        } else if (
          mainKey.occurrenceIndices &&
          mainKey.occurrenceIndices.length > 0
        ) {
          // Loop through occurrenceIndices to find matching wordIndex
          const occurrenceIndex = mainKey.occurrenceIndices.find(
            (oi) => oi.wordIndex === wordIndex
          );
          if (occurrenceIndex) {
            // Get the input and name inside the occurrenceIndices array of objects
            const { input, name, errors } = occurrenceIndex;
            return {
              passedInput: input,
              passedKey: name,
              passedErrors: errors,
            };
          }
        }
      }
    }

    // Return undefined if the wordIndex is not found
    return undefined;
  }

  getWords() {
    const words = new Array(this.wordHash.size);
    this.wordHash.forEach((value, key) => {
      words[value.wordIndex] = key;
      if (value.occurrenceIndices) {
        value.occurrenceIndices.forEach((occurrenceIndex) => {
          words[occurrenceIndex.wordIndex] = occurrenceIndex.name;
        });
      }
    });
    return words.filter((word) => word !== undefined);
  }

  toSerializable() {
    const serializableObject = {};
    this.wordHash.forEach((value, key) => {
      serializableObject[key] = value;
    });
    return serializableObject;
  }
}
