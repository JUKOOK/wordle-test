<template>
  <nav class="wordle-nav">
    <h1 class="game-title">Wordle</h1>
    <div class="btns-wrap">
      <button class="btn-route" @click="routePage(firstTo.next)">
        {{ firstTo.text }}
      </button>
      <button class="btn-route" @click="routePage(secondTo.next)">
        {{ secondTo.text }}
      </button>
    </div>
  </nav>
</template>

<script setup>
import { computed } from "vue"; // computed -> 기본적으로 반응형
import { useRouter, useRoute } from "vue-router";

const router = useRouter(); // this.$router.push
const route = useRoute(); // this.$route.name

const firstTo = computed(() => {
  return {
    next: route.name === "wordleFour" ? "wordleFive" : "wordleFour",
    text: route.name === "wordleFour" ? "5글자" : "4글자",
  };
});
const secondTo = computed(() => {
  return {
    next: route.name === "wordleSix" ? "wordleFive" : "wordleSix",
    text: route.name === "wordleSix" ? "5글자" : "6글자",
  };
});

const routePage = (toName) => {
  router.push({ name: toName });
};
</script>

<style lang="scss" scoped>
.wordle-nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  position: relative;
  .game-title {
    line-height: 2.4rem;
    font-family: system-ui;
    font-size: 2.4rem;
    font-weight: 700;
    color: #fff;
  }
}

.wordle-nav .btns-wrap {
  width: 200px;
  height: 36px;
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translate(0, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .btn-route {
    min-width: 84px;
    height: 100%;
    padding-top: 2px;
    color: #fff;
    text-align: center;
    font-size: 16px;
    border-radius: 19px;
    background-color: inherit;
    border: 2px solid #fff;
    cursor: pointer;
    &:hover {
      color: #121212;
      background-color: #fff;
    }
  }
}
</style>
