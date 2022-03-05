<template>
  <WordleNav />
  <WordleFive />
</template>

<script>
import WordleNav from "./components/WordleNav.vue";
import WordleFive from "./views/WordleFive.vue";

export default {
  name: "App",
  components: {
    WordleNav,
    WordleFive,
  },
};
</script>
