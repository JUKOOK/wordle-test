import { getRandomIndex } from "@/utils";
import WORDLIST from "../stuff/word-list";

class WordleManager {
  constructor() {
    const randomIdx = getRandomIndex(WORDLIST.WORD5.length);
    this.answer = WORDLIST.WORD5[randomIdx];
    this.answerChars = this.answer.split("");
  }

  getResults(inputChars) {
    return inputChars.map((char, idx) => {
      if (char === "") return "not-include";
      else {
        if (this.answerChars[idx] === char) return "currect-position";
        else if (this.answer.includes(char)) return "other-position";
        else return "not-include";
      }
    });
  }
}

export default WordleManager;
