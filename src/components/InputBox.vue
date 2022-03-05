<template>
  <div :class="inputBoxClass">
    <input
      type="text"
      :value="box.char"
      :disabled="box.disabled"
      @keypress="filterKey"
      @input="onInput"
      @keyup.delete="clearInput"
      @keyup.enter="submitAnswer"
    />
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    box: {
      type: Object,
      requred: true,
    },
  },
  setup(props, { emit }) {
    const inputBoxClass = computed(() => {
      let cls = ["input-box"];
      if (props.box.disabled) cls.push("disabled");
      cls.push(props.box.result);
      return cls;
    });

    function filterKey(e) {
      const isAlphabet = e.keyCode >= 97 && e.keyCode <= 122;
      const alreadyFilled = props.box.char.length >= 1;
      if (!isAlphabet || alreadyFilled) e.preventDefault();
    }
    function onInput(e) {
      if (e.isComposing) clearInput();
      else if (e.data) updateInput(e.data);
    }
    function updateInput(c) {
      emit("char-updated", c);
    }
    function clearInput() {
      emit("char-cleared");
    }
    function submitAnswer() {
      if (props.box.slot === 5) emit("submit-answer");
    }

    return { inputBoxClass, filterKey, onInput, clearInput, submitAnswer };
  },
};
</script>

<style lang="scss" scoped>
.input-box {
  width: 64px;
  height: 64px;
  input {
    width: 100%;
    height: 100%;
    display: block;
    color: #fff;
    text-align: center;
    font-size: 2.4rem;
    font-family: monospace;
    background-color: #121212;
    caret-color: #fff;
    border: 2px solid #b3b2b2;
    outline: 0;
    cursor: pointer;
    &:hover,
    &:focus {
      border-color: #5a4ec7;
    }
  }
}

.input-box {
  &.disabled input {
    cursor: default;
  }
  &.currect-position input {
    background-color: rgb(83, 141, 78);
    border-color: rgb(83, 141, 78);
  }
  &.other-position input {
    background-color: rgb(181, 159, 59);
    border-color: rgb(181, 159, 59);
  }
  &.not-include input {
    background-color: #302f2f;
    border-color: #302f2f;
  }
}
</style>
