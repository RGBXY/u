<template>
  <div @click="closeBtn" v-if="modalStat === true" class="fixed w-full h-full z-50 top-0 left-0 bg-[#4a4a4a86] flex justify-center items-center">
    <div @click.stop class="w-[300px] h-[400px]">
      <swiper :spaceBetween="30" :effect="'fade'" :navigation="true" :modules="modules" class="mySwiper h-full">
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>1/8</p>
            <p>Gallery-Photo-1.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery.png" />
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>2/8</p>
            <p>Gallery-Photo-2.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery-2.png" />
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>3/8</p>
            <p>Gallery-Photo-3.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery-3.png" />
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>4/8</p>
            <p>Gallery-Photo-4.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery-4.png" />
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>5/8</p>
            <p>Gallery-Photo-5.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery-5.png" />
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>6/8</p>
            <p>Gallery-Photo-6.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery-6.png" />
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>7/8</p>
            <p>Gallery-Photo-7.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery-7.png" />
        </swiper-slide>
        <swiper-slide>
          <div class="flex items-center justify-between text-white font-amita mb-2 text-sm">
            <p>8/8</p>
            <p>Gallery-Photo-8.jpg</p>
            <button @click="closeBtn">
              <img src="../../public/assets/assets-icon-close.svg" alt="" />
            </button>
          </div>
          <img class="h-[360px] w-[300px] object-cover rounded-xl" src="../../public/assets/assets-image-gallery-8.png" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Navigation } from "swiper/modules";

import { useModalStore } from "@/stores/modal";
import { computed } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modal = useModalStore();

    const modalStat = computed(() => modal.modalStat);

    const closeBtn = () => {
      modal.closeBtn();
    };

    return {
      modules: [EffectFade, Navigation],
      modalStat,
      closeBtn,
    };
  },
};
</script>

<style scoped>
.swiper {
  position: static;
}

.swiper-slide {
  visibility: hidden;
}

.swiper-slide-active {
  visibility: visible;
}

::v-deep .swiper-button-next,
::v-deep .swiper-button-prev {
  background-position: center;
  background-size: 30px;
  background-repeat: no-repeat;
  margin: 8px 500px;
  width: 100px;
}

::v-deep .swiper-button-prev {
  background-image: url("../../public/assets/assets-icon-arrow.svg");
}

::v-deep .swiper-button-next {
  background-image: url("../../public/assets/assets-icon-arrow.svg");
  transform: rotate(180deg);
}

::v-deep .swiper-button-next::after,
::v-deep .swiper-button-prev::after {
  content: "";
}

@media (max-width: 720px) {
  ::v-deep .swiper-button-next,
  ::v-deep .swiper-button-prev {
    margin: 8px 0px;
    width: 70px;
  }
}
</style>
