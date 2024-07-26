<template>
  <div class="py-16 relative overflow-hidden bg-bg_prim">
    <div class="flex flex-col px-8 text-center text-sm font-kurale h-full justify-center items-center">
      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" class="text-[34px] font-amita mb-8">Wedding Gift</h1>
      <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" class="mb-8">
        Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. <br /><br />
        Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless.
      </p>
      <img v-if="giftStat === true" class="pointer-events-none mb-8" src="../../public/assets/assets-image-card.svg" alt="" />
      <Button data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="1000" v-on:click.native="toggleBtn">
        <img src="../../public/assets/assets-icon-gift.svg" alt="" />
        <p v-if="giftStat === false">Klik Disini</p>
        <p v-else>Konfirmasi</p>
      </Button>
    </div>
    <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" class="absolute top-0 left-0" src="../../public/assets/assets-item-5.png" alt="" />
    <img data-aos="fade-right" data-aos-duration="1000" class="absolute bottom-0 left-0" src="../../public/assets/assets-item-8.png" alt="" />
    <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" class="absolute top-0 right-0" src="../../public/assets/assets-item-6.png" alt="" />
    <img data-aos="fade-left" data-aos-duration="1000" class="absolute bottom-0 right-0" src="../../public/assets/assets-item-7.png" alt="" />
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import { ref } from "vue";
export default {
  components: {
    Button,
  },
  setup() {
    const giftStat = ref(false);

    return {
      giftStat,
    };
  },
  methods: {
    toggleBtn() {
      this.giftStat = !this.giftStat;
    },
  },
};
</script>
