import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    modalStat: false,
  }),
  actions: {
    openBtn() {
      this.modalStat = true;
    },
    closeBtn() {
      this.modalStat = false;
    },
  },
});
