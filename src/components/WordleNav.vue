<template>
  <nav class="wordle-nav">
    <h1 class="game-title">Wordle</h1>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wordle-nav {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  .game-title {
    line-height: 2.4rem;
    font-family: system-ui;
    font-size: 2.4rem;
    font-weight: 700;
    color: #fff;
  }
}
</style>
