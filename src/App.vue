<template>
  <WordleFive />
</template>

<script>
import WordleFive from "./views/WordleFive.vue";

export default {
  name: "App",
  components: {
    WordleFive,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
