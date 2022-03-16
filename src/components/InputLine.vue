<template>
  <div class="input-line">
    <InputBox
      v-for="(box, idx) in inputBoxes"
      :key="idx + 1"
      :box="box"
      @updated="(char) => updateBoxChar(idx, char)"
      @cleared="clearBoxChar(idx)"
      @submit="submitAnswer(idx)"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from "vue";

import InputBox from "./InputBox.vue";

const props = defineProps({
  wordle: Object,
  columns: Number,
});
const emit = defineEmits(["result-displayed"]);
/**
 * slot 구성
 * [
 *   {
 *     slot: Number // 1 ~ columns
 *     char: String // one Character of InputBox
 *     disabled: Boolean // true or false
 *     result: String // 'correct', 'other', 'none'
 *   }
 *   ...
 * ]
 */
const initializeBoxes = (col) => {
  const arr = [];
  for (let slot = 1; slot <= col; slot++) {
    arr.push({
      slot,
      char: "",
      disabled: false,
      result: "",
    });
  }
  return arr;
};

const inputBoxes = reactive(initializeBoxes(props.columns));

const updateBoxChar = (idx, char) => {
  if (inputBoxes[idx].char.length) return;
  inputBoxes[idx].char = char;
};
const clearBoxChar = (idx) => {
  inputBoxes[idx].char = "";
};
const submitAnswer = (idx) => {
  if (props.columns !== idx + 1) return;
  const submitChars = inputBoxes.map((box) => box.char);
  const results = props.wordle.getResults(submitChars);
  for (const idx in inputBoxes) {
    inputBoxes[idx].disabled = true;
    inputBoxes[idx].result = results[idx];
  }
  const isSuccess = results.every((result) => result === "correct");
  emit("result-displayed", isSuccess);
};
</script>

<style lang="scss" scoped>
.input-line {
  display: flex;
  justify-content: space-between;
}
</style>
