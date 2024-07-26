<template>
  <div id="ucapan" class="w-full bg-center relative py-12 bg-cover bg-no-repeat bg-[url('../../public/assets/assets-bg-image-2.jpeg')]">
    <img class="absolute bottom-20 left-0" src="../../public/assets/assets-item-9.png" alt="" />
    <img class="absolute right-0 top-20" src="../../public/assets/assets-item-10.png" alt="" />
    <div class="flex flex-col justify-center items-center px-4 text-center">
      <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" class="font-amita text-3xl font-semibold">Wedding Event</h1>
      <p data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="pt-2 text-sm font-kurale mb-3 z-10 relative">Konfirmasi Kehadiran dan Berikan Ucapan serta Doa Restu</p>
      <div data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500" class="relative py-3 px-3 bg-secondary rounded-2xl">
        <img class="absolute -top-12 -left-10 w-[120px]" src="../../public/assets/assets-3.png" alt="" />
        <div class="bg-bg_prim p-3 rounded-xl font-kurale">
          <div v-if="submitStat === true" class="text-center my-5 text-[14px]">
            <p>Terima Kasih! <br />Konfirmasi kehadiran Anda sudah tercatat.</p>
            <Button class="w-full mt-4 text-sm font-light">Edit Kehadiran</Button>
          </div>
          <form class="mb-5" @submit.prevent="tambah">
            <div class="flex flex-col text-start">
              <label class="font-semibold mb-1 text-sm" for="nama">Nama</label>
              <input id="nama" v-model="nama" required type="text" class="mb-3 py-2 px-3 rounded-xl text-[12px] border border-slate-200" placeholder="Masukan nama anda" />
              <label class="font-semibold mb-1 text-sm" for="ucapan">Ucapan</label>
              <textarea id="ucapan" required v-model="ucapan" cols="30" rows="7" placeholder="Beri ucapan manis dan doa untuk mempelai" class="mb-3 py-2 px-3 rounded-xl text-[12px] border border-slate-200"></textarea>
              <label for="absen" class="font-semibold mb-1 text-sm">Konfirmasi Kehadiran</label>
              <select v-model="absen" required class="py-2 px-3 rounded-xl text-[12px] border border-slate-200 text-black" id="absen">
                <option disabled selected>Pilih Opsi Kehadiran</option>
                <option value="Hadir">Hadir</option>
                <option value="Berhalangan">Berhalangan</option>
              </select>
              <Button class="w-full mt-4 text-sm font-semibold">Kirim</Button>
            </div>
          </form>
          <div v-for="(ucapan, index) in ucapans" :key="index" class="text-start mb-3 px-3 py-2 border-2 border-[#DFDFDF] rounded-xl">
            <div class="flex items-center gap-3 mb-1">
              <h1 class="text-[12px]">{{ ucapan.nama }}</h1>
              <div class="flex items-center gap-1">
                <div v-if="ucapan.absen === 'Berhalangan'" class="bg-red-600 rounded-full h-2 w-2 mb-0.5"></div>
                <div v-else :class="['bg-green-600 rounded-full h-2 w-2']"></div>
                <p class="text-[11px]">{{ ucapan.absen }}</p>
              </div>
            </div>
            <p class="text-[12px] mb-1">{{ ucapan.ucapan }}</p>
            <p class="text-[11px]">23 Mei 2024</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import { ref } from "vue";

let id = 0;
const nama = ref("");
const ucapan = ref("");
const absen = ref("");
const submitStat = ref(false);

const ucapans = ref([
  { id: id++, nama: "Brody Hitam Maniez", ucapan: "Keren Baru kemaren mabar sekrang udah nikah aja", absen: "Hadir" },
  { id: id++, nama: "Wahyu Wangsaf", ucapan: "Keren Udah Nikah, btw izin ya bro.", absen: "Berhalangan" },
]);

function tambah() {
  ucapans.value.push({ id: id++, nama: nama.value, ucapan: ucapan.value, absen: absen.value });
  nama.value = "";
  ucapan.value = "";
  absen.value = "";
  submitStat.value = true;
}
</script>
