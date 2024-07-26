import { defineStore } from "pinia";

export const useModalStore = defineStore("gift", {
  state: () => ({
    giftStat: false,
  }),
  actions: {
    toggleBtn() {
      this.giftStat = !this.giftStat;
    },
  },
});
