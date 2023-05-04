export class WordHash {
  constructor(initialWords = []) {
    this.wordHash = new Map();
    initialWords.forEach((word, idx) =>
      this.setWord(word, { input: "", errors: 0, wordIndex: idx })
    );
  }

  setWord(word, value) {
    this.wordHash.set(word, value);
  }

  getWord(word) {
    return this.wordHash.get(word);
  }

  getWords() {
    return Array.from(this.wordHash.keys());
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
