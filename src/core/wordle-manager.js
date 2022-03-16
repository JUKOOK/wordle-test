import { getRandomIndex } from "../utils";
import WORDLIST from "../stuff/word-list";

const getWordList = (letters) => {
  switch (letters) {
    case 4:
      return WORDLIST.WORD4;
    case 5:
      return WORDLIST.WORD5;
    case 6:
      return WORDLIST.WORD6;
  }
};

class WordleManager {
  constructor(letters) {
    const wordList = getWordList(letters);
    const randomIdx = getRandomIndex(wordList.length);
    this.letters = letters;
    this.answer = wordList[randomIdx];
    this.answerChars = this.answer.split("");
  }

  getResults(inputChars) {
    return inputChars.map((char, idx) => {
      if (char === "") return "none";
      else {
        if (this.answerChars[idx] === char) return "correct";
        else if (this.answer.includes(char)) return "other";
        else return "none";
      }
    });
  }
}

export default WordleManager;
