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
