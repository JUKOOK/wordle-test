<template>
  <div class="display-point">
    <h2 class="title">점수</h2>
    <p class="point">{{ pointStore.point }}</p>
    <!-- <p class="point">{{ point }}</p> -->
  </div>
</template>

<script setup>
import { usePointStore } from "../store";
// import { storeToRefs } from "pinia";

const pointStore = usePointStore(); // 기본적으로 pointStore.~ 는 모두 반응형을 가지고 온다.
// const { point } = pointStore; // destruction하면 반응형을 잃는다(변수의 경우) 변화가 없다면야..
// const { point } = storeToRefs(pointStore); // storeToRefs 를 쓰면 destruction하면서 반응형을 새로 붙일 수 있다.
</script>

<style lang="scss" scoped>
.display-point {
  width: 96px;
  height: 80px;
  border: 2px solid #fff;
  border-radius: 4px;
  overflow: hidden;

  position: absolute;
  top: 20%;
  right: 32px;
}

.title {
  height: 32px;
  line-height: 32px;
  color: #fff;
  border-bottom: 2px solid #fff;
  font-size: 16px;
  text-align: center;
}

.point {
  height: 44px;
  line-height: 48px;
  color: #fff;
  font-size: 32px;
  text-align: center;
}
</style>
