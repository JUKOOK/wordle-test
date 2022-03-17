import { defineStore } from "pinia";

// defineStore() 의 첫번째 인자는 스토어의 고유한 ID
export const usePointStore = defineStore("point", {
  state: () => {
    return {
      point: 0,
    };
  },
  actions: {
    initPoint() {
      this.point = 0;
    },
    increasePoint(p) {
      this.point += p;
    },
    decreasePoint(p) {
      this.point -= p;
    },
  },
  getters: {
    doublePoint(state) {
      return state.point * 2;
    },
  },
});
