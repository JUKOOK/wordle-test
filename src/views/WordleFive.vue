<template>
  <div>테스트!</div>
</template>

<script>
import WordleManager from "../core/wordle-manager.js";

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
  setup() {
    const wordle = new WordleManager();
    wordle.checkAnswer("abesd");
  },
};
</script>

<style></style>
