<template>
  <WordleNav />
  <div class="wordle-board">
    <!-- <WordleFour /> -->
    <!-- <WordleFive /> -->
    <!-- <WordleSix /> -->
    <router-view />
  </div>
</template>

<script setup>
import WordleNav from "./components/WordleNav.vue";
// import WordleFour from "./views/WordleFour.vue";
// import WordleFive from "./views/WordleFive.vue";
// import WordleSix from "./views/WordleSix.vue";
</script>

<style lang="scss" scoped>
.wordle-board {
  height: calc(100% - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
