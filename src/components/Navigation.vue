<template>
  <div class="flex justify-center relative">
    <div class="fixed z-50 bottom-[4%] flex justify-between py-2 px-2 rounded-xl h-[9%] bg-bg_prim w-[90%] lg:w-[24%]">
      <a href="#home" class="bg-green_prim group hover:bg-white w-[16%] transition-all flex items-center justify-center rounded-md">
        <HomeIcon class="w-[60%] text-[#F5F5F2] group-hover:text-[#3F3F46]" />
      </a>
      <a href="#story" class="group hover:bg-white bg-green_prim w-[16%] transition-all flex items-center justify-center rounded-md">
        <LoveIcon class="w-[60%] text-[#F5F5F2] group-hover:text-[#3F3F46]" />
      </a>
      <div class="bg-green_prim w-[16%] group hover:bg-white transition-all flex items-center justify-center rounded-md">
        <CalenderIcon class="w-[60%] text-[#F5F5F2] group-hover:text-[#3F3F46]" />
      </div>
      <div class="bg-green_prim w-[16%] group hover:bg-white transition-all flex items-center justify-center rounded-md">
        <GalleryIcon class="w-[60%] text-[#F5F5F2] group-hover:text-[#3F3F46]" />
      </div>
      <div class="bg-green_prim w-[16%] group hover:bg-white transition-all flex items-center justify-center rounded-md">
        <ChatIcon class="w-[60%] text-[#F5F5F2] group-hover:text-[#3F3F46]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import CalenderIcon from "./icon/CalenderIcon.vue";
import ChatIcon from "./icon/ChatIcon.vue";
import GalleryIcon from "./icon/GalleryIcon.vue";
import HomeIcon from "./icon/HomeIcon.vue";
import LoveIcon from "./icon/LoveIcon.vue";
</script>
