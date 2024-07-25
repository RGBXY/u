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
      <RouterLink to="/page">
        <Button>
          <EnvelopeIcon />
          <p>Buka Undangan</p>
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import Button from "../components/Button.vue";
import EnvelopeIcon from "../components/icon/EnvelopeIcon.vue";
</script>
