<template>
  <div class="min-h-full w-full flex justify-center pt-5 pb-10 items-center bg-cover bg-center bg-no-repeat bg-[url('../../public/assets/assets-bg-image.jpeg')]">
    <div class="text-center flex flex-col justify-center items-center overflow-hidden">
      <h1 class="text-2xl mb-6 font-kurale italic font-medium">The Wedding Of</h1>
      <div class="relative mb-8">
        <img class="absolute z-20 -bottom-8 -left-20 w-[300px] -rotate-12" src="../../public/assets/assets-item.png" alt="" />
        <img class="absolute -bottom-10 -right-20 rotate-12" src="../../public/assets/assets-item-2.png" alt="" />
        <img class="z-10 relative w-[180px] shadow-2xl h-[195px] object-cover rounded-full" src="../../public/assets/assets-image-home.jpeg" alt="" />
      </div>
      <div class="divide-x-[3px] mb-6 divide-black flex items-center text-center gap-6 text-[35px] font-kurale">
        <p>Ayu</p>
        <p class="pl-6">Gafin</p>
      </div>
      <div class="flex gap-3 text-center mb-4">
        <div class="bg-gradient-to-b from-[#70FFE7] to-[#B2CAC6] pb-1 px-4 rounded-lg shadow-xl font-quin font-medium">
          <p>347</p>
          <p>Hari</p>
        </div>
        <div class="bg-gradient-to-b from-[#70FFE7] to-[#B2CAC6] pb-1 px-4 rounded-lg shadow-xl font-quin font-medium">
          <p>12</p>
          <p>Jam</p>
        </div>
        <div class="bg-gradient-to-b from-[#70FFE7] to-[#B2CAC6] pb-1 px-4 rounded-lg shadow-xl font-quin font-medium">
          <p>39</p>
          <p>Menit</p>
        </div>
        <div class="bg-gradient-to-b from-[#70FFE7] to-[#B2CAC6] pb-1 px-4 rounded-lg shadow-xl font-quin font-medium">
          <p>23</p>
          <p>Detik</p>
        </div>
      </div>
      <h1 class="font-semibold text-lg font-lexend mb-4">Minggu, 21 Juli 2024</h1>
      <Button class="mb-10">
        <CalenderIcon class="w-5" />
        <p>Save The Date</p>
      </Button>
    </div>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import CalenderIcon from "./icon/CalenderIcon.vue";
</script>
