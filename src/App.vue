<template>
  <WordleNav />
  <div class="wordle-board">
    <!-- <WordleFive /> -->
    <router-view />
  </div>
</template>

<script>
import WordleNav from "./components/WordleNav.vue";

export default {
  name: "App",
  components: {
    WordleNav,
  },
};
</script>

<style lang="scss" scoped>
.wordle-board {
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
