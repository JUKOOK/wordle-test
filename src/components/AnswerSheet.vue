<template>
  <div class="answer-sheet" :class="{ unvailed: isGameOver }">
    <span class="character" v-for="char in characters" :key="char">
      {{ char }}</span
    >
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: {
    wordle: {
      type: Object,
      required: true,
    },
    isGameOver: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const characters = reactive(props.wordle.answerChars);

    return { characters };
  },
};
</script>

<style lang="scss" scoped>
.answer-sheet {
  width: 100%;
  height: 96px;
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 4px solid #fff;
  border-radius: 8px;
  visibility: hidden;
  .character {
    font-size: 42px;
    font-family: monospace;
    color: #fff;
    user-select: none;
  }
  &.unvailed {
    visibility: visible;
  }
}
</style>
