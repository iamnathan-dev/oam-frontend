<template>
  <section class="py-12 px-6">
    <div class="max-w-7xl mx-auto">
      <div
        class="bg-white border-2 border-[#eaf5ef] rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden shadow-[0_20px_50px_rgba(43,182,115,0.05)]"
      >
        <!-- Background Decorative Pattern -->
        <div class="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <img src="@/assets/svg/toys.svg" alt="" class="w-full h-full object-cover" />
        </div>

        <!-- Content -->
        <div class="relative z-10 flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 class="text-3xl md:text-5xl font-bold text-[#0f2d21] leading-tight mb-8 max-w-2xl">
            Make your children's life special by enrolling them in our academy
          </h2>
          <button
            class="bg-[#2bb673] hover:bg-[#24a365] text-white px-8 py-5 rounded-xl font-bold text-sm tracking-widest uppercase flex items-center gap-3 shadow-lg transition-transform hover:-translate-y-1"
          >
            Enroll Your Child
            <div class="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowRight class="w-4 h-4 text-white" />
            </div>
          </button>
        </div>

        <!-- Visual (ABC Blocks) -->
        <div class="relative z-10 w-full lg:w-[45%] flex justify-center">
          <img
            src="@/assets/svg/hero-cartoon.svg"
            alt="Children with ABC blocks"
            class="w-full h-auto max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
</script>
