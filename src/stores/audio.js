// stores/useAudioStore.js
import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", {
  state: () => ({
    audio: null,
    isLooping: false, // Status looping
  }),
  actions: {
    initializeAudio(src) {
      this.audio = new Audio(src);
      this.audio.muted = true; // Mulai dengan muted
    },
    playAudio() {
      if (this.audio) {
        this.audio.loop = this.isLooping; // Atur status loop
        this.audio
          .play()
          .then(() => {
            this.audio.muted = false; // Hapus mute setelah diputar
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
          });
      }
    },
    stopAudio() {
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
    },
    toggleLoop() {
      if (this.audio) {
        this.isLooping = !this.isLooping;
        this.audio.loop = this.isLooping; // Perbarui status loop
      }
    },
  },
});
