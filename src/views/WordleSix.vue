<template>
  <div class="wordle-five">
    <div class="wordle-tiles">
      <InputLine
        v-for="idx in ROWS"
        :key="idx"
        :wordle="wordle"
        :columns="COLUMNS"
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
const COLUMNS = 6;

export default {
  components: {
    InputLine,
    AnswerSheet,
  },
  setup() {
    const wordle = new WordleManager(COLUMNS);
    const isGameOver = ref(false);

    function checkGameOver(idx, isSuccess) {
      if (idx === ROWS || isSuccess) {
        isGameOver.value = true;
      }
      // 원래 위치에 전달
      // 다음 요소 활성화
    }

    return { ROWS, COLUMNS, wordle, isGameOver, checkGameOver };
  },
};
</script>

<style lang="scss" scoped>
.wordle-five {
  width: 504px; // 64 * 6 + 24 * 5
}

.wordle-tiles {
  width: 100%;
  height: 416px; // 64 * 5 + 24 * 4
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
