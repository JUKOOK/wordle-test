import { getRandomIndex } from "@/utils";
import WORDLIST from "../stuff/word-list";

class WordleManager {
  constructor() {
    const randomIdx = getRandomIndex(WORDLIST.WORD5.length);
    this.answer = WORDLIST.WORD5[randomIdx];
    this.answerChars = this.answer.split("");
  }

  checkAnswer(inputString) {
    const inputChars = inputString.split("");
    const a = inputChars.map((char, idx) => {
      let result = "not-include";
      if (this.answerChars[idx] === char) result = "currect-position";
      else if (this.answer.includes(char)) result = "other-position";
      return result;
    });
    console.log(a);
  }
}

export default WordleManager;
