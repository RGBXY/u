<template>
  <div class="h-full flex justify-center items-center bg-cover bg-center bg-no-repeat bg-[url('../../public/assets/assets-bg-image.jpeg')]">
    <div class="text-center flex flex-col items-center">
      <h1 class="text-2xl mb-10 font-kurale italic font-medium">The Wedding Of</h1>
      <div class="text-6xl grid mb-10 gap-7 font-kurale text-center">
        <p>Ayu</p>
        <p>&</p>
        <p>Gavin</p>
      </div>
      <p class="font-semibold italic font-kurale mb-5">Kepada Bapak/Ibu/Saudara/i</p>
      <h1 class="font-lexend text-lg mb-5">Nama Tamu</h1>
      <audio ref="audioPlayer" src="../../public/assets/audio/assets-audio.mp3"></audio>
      <RouterLink to="/page">
        <Button v-on:click.native="playAudio">
          <EnvelopeIcon />
          <p>Buka Undangan</p>
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { useAudioStore } from "../stores/audio";
import { RouterLink } from "vue-router";
import { computed } from "vue";
import Button from "../components/Button.vue";
import EnvelopeIcon from "../components/icon/EnvelopeIcon.vue";

export default {
  components: {
    Button,
    EnvelopeIcon,
  },
  setup() {
    const audioStore = useAudioStore();

    // Inisialisasi audio saat komponen dipasang
    audioStore.initializeAudio("../../public/assets/audio/assets-audio.mp3");

    const playAudio = () => {
      audioStore.playAudio();
    };

    const stopAudio = () => {
      audioStore.stopAudio();
    };

    return { playAudio, stopAudio, isLooping: computed(() => audioStore.isLooping) };
  },
};
</script>
