export class WordHash {
  constructor(initialWords = []) {
    this.wordHash = new Map();
    initialWords.forEach((word, idx) => {
      const currentWord = this.getWord(word);
      if (currentWord) {
        currentWord.occurrenceIndices.push(idx);
      } else {
        this.setWord(word, { input: "", errors: 0, occurrenceIndices: [idx] });
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
    const wordsArr = [];
    this.wordHash.forEach((value, key) => {
      const indices = value.occurrenceIndices;
      if (Array.isArray(indices) && indices.length > 0) {
        indices.forEach((index) => {
          wordsArr[index] = key;
        });
      } else {
        wordsArr.push(key);
      }
    });
    return wordsArr;
  }

  deleteWord(word) {
    this.wordHash.delete(word);
  }

  clear() {
    this.wordHash.clear();
  }

  size() {
    return this.wordHash.size;
  }
}
