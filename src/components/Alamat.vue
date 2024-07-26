<template>
  <div class="py-16 relative overflow-hidden bg-bg_prim">
    <div class="flex flex-col text-center px-8 h-full justify-center items-center">
      <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" class="font-amita text-3xl font-semibold mb-6">Location Address</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23815.494532643657!2d110.38633139311058!3d-6.969858218061421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b12b5694f0f%3A0x72210ee40fee75ce!2sCAN%20Creative%20%7C%20Jasa%20Pembuatan%20Web%20dan%20Aplikasi%20Mobile%20Android%20IOS!5e0!3m2!1sid!2sid!4v1721894176143!5m2!1sid!2sid"
        class="w-full h-[350px] mb-5"
        allowfullscreen=""
        loading="lazy"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
        <h1 class="font-amita text-xl font-bold mb-4">Kediaman Mempelai Wanita</h1>
        <p class="font-kurale text-[14px] mb-4">Jl Saputan Barat XII RT 02 RW 01, Tandang, Tembalang</p>
      </div>
      <Button data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500">
        <img src="../../public/assets/assets-icon-location.svg" alt="" />
        <p>Petunjuk ke Lokasi</p>
      </Button>
    </div>
    <img data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" class="absolute top-0 left-0" src="../../public/assets/assets-item-5.png" alt="" />
    <img data-aos="fade-right" data-aos-duration="1000" class="absolute bottom-0 left-0" src="../../public/assets/assets-item-8.png" alt="" />
    <img data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500" class="absolute top-0 right-0" src="../../public/assets/assets-item-6.png" alt="" />
    <img data-aos="fade-left" data-aos-duration="1000" class="absolute bottom-0 right-0" src="../../public/assets/assets-item-7.png" alt="" />
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
</script>
