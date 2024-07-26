<template>
  <div id="gallery" class="relative w-full flex justify-center overflow-hidden items-center py-12 bg-cover bg-center bg-no-repeat bg-[url('../../public/assets/assets-bg-image-2.jpeg')]">
    <img class="absolute left-0 bottom-10" src="../../public/assets/assets-item-9.png" alt="" />
    <img class="absolute right-0 top-10" src="../../public/assets/assets-item-10.png" alt="" />
    <div class="text-center">
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" class="font-amita text-3xl font-semibold mb-6">Gallery Photo</h1>
      <div class="grid grid-cols-2 grid-rows-6 gap-2">
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-3 w-32 rounded-xl overflow-hidden h-full">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery.png" alt="" />
        </button>
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-2 w-32 rounded-xl overflow-hidden h-[130px]">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery-2.png" alt="" />
        </button>
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-4 w-32 rounded-xl overflow-hidden h-full">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery-3.png" alt="" />
        </button>
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-3 w-32 rounded-xl overflow-hidden h-full">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery-4.png" alt="" />
        </button>
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-3 w-32 rounded-xl overflow-hidden h-full">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery-6.png" alt="" />
        </button>
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-2 w-32 rounded-xl overflow-hidden h-[130px]">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery-5.png" alt="" />
        </button>
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-3 w-32 rounded-xl overflow-hidden h-full">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery-7.png" alt="" />
        </button>
        <button @click="openBtn" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="bg-red-500 row-span-2 w-32 rounded-xl overflow-hidden h-[130px]">
          <img class="h-full w-full object-cover" src="../../public/assets/assets-image-gallery-8.png" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { useModalStore } from "../stores/modal";
export default {
  setup() {
    const modal = useModalStore();

    const openBtn = () => {
      modal.openBtn();
    };

    return {
      openBtn,
    };
  },
};
</script>
