<template>
  <div class="wordle-five">
    <div class="wordle-tiles">
      <InputLine
        v-for="idx in ROWS"
        :key="idx"
        :wordle="wordle"
        @result-displayed="(isSuccess) => checkGameOver(idx, isSuccess)"
      />
    </div>
    <AnswerSheet :is-game-over="isGameOver" :wordle="wordle" />
  </div>
</template>

<script>
import { ref } from "vue";
import WordleManager from "../core/wordle-manager.js";

import InputLine from "../components/InputLine.vue";
import AnswerSheet from "../components/AnswerSheet.vue";

const ROWS = 5;
// const COLUMNS = 5;

export default {
  components: {
    InputLine,
    AnswerSheet,
  },
  setup() {
    const wordle = new WordleManager();
    const isGameOver = ref(false);

    function checkGameOver(idx, isSuccess) {
      console.log(idx);

      if (idx === ROWS || isSuccess) {
        isGameOver.value = true;
      }
      // 원래 위치에 전달
      // 다음 요소 활성화
    }

    return { ROWS, wordle, isGameOver, checkGameOver };
  },
};
</script>

<style lang="scss" scoped>
.wordle-five {
  width: 416px; // 64 * 5 + 24 * 4
}

.wordle-tiles {
  width: 100%;
  height: 416px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
