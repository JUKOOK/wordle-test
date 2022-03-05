<template>
  <div class="input-line">
    <InputBox
      v-for="(box, idx) in inputBoxes"
      :key="idx + 1"
      :box="box"
      @char-updated="(char) => updateBoxChar(idx, char)"
      @char-cleared="clearBoxChar(idx)"
      @submit-answer="submitAnswer"
    />
  </div>
</template>

<script>
import { reactive } from "vue";

import InputBox from "./InputBox.vue";

/**
 * slot 구성
 * [
 *   {
 *     slot: Number // 1 ~ 5
 *     char: String // one Character of InputBox
 *     disabled: Boolean // true or false
 *     result: String // 'currect-position', 'other-position', 'not-include'
 *   }
 *   ...
 * ]
 *
 */

export default {
  props: {
    wordle: {
      type: Object,
      requred: true,
    },
  },
  components: {
    InputBox,
  },
  setup(props, { emit }) {
    const initializeBoxes = () => {
      const arr = [];
      for (let slot = 1; slot <= 5; slot++) {
        arr.push({
          slot,
          char: "",
          disabled: false,
          result: "",
        });
      }
      return arr;
    };

    const inputBoxes = reactive(initializeBoxes());

    function updateBoxChar(idx, char) {
      if (inputBoxes[idx].char.length) return;
      inputBoxes[idx].char = char;
    }
    function clearBoxChar(idx) {
      inputBoxes[idx].char = "";
    }
    function submitAnswer() {
      const submitChars = inputBoxes.map((box) => box.char);
      const results = props.wordle.getResults(submitChars);
      for (const idx in inputBoxes) {
        inputBoxes[idx].disabled = true;
        inputBoxes[idx].result = results[idx];
      }
      const isSuccess = results.every(
        (result) => result === "currect-position"
      );
      emit("result-displayed", isSuccess);
    }

    return { inputBoxes, updateBoxChar, clearBoxChar, submitAnswer };
  },
};
</script>

<style lang="scss" scoped>
.input-line {
  display: flex;
  justify-content: space-between;
}
</style>
