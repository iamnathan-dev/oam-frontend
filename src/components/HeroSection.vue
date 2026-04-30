<template>
  <section
    id="home"
    class="min-h-[calc(100vh-80px)] flex justify-center items-center relative bg-[#DFFFE0] overflow-hidden py-12 md:py-16 lg:py-20"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 opacity-40">
      <img
        src="@/assets/svg/toys.svg"
        alt=""
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-center"
    >
      <!-- Left Content -->
      <div
        class="flex flex-col items-center lg:items-start text-center lg:text-left animate-in fade-in slide-in-from-bottom-12 duration-1200 ease-out order-2 lg:order-1"
      >
        <!-- Tag -->
        <div
          class="w-fit bg-white py-2 px-4 sm:py-2.5 sm:px-5 text-xs sm:text-sm font-bold border-2 border-black rounded-sm shadow-[-3.5px_3.5px_0px_0px_rgba(0,0,0,1)] mb-6 md:mb-10 flex items-center gap-2"
        >
          <span class="w-2 h-2 rounded-full bg-green-500"></span>
          Play. Learn. Shine.
        </div>

        <!-- Heading -->
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-black mb-4 md:mb-5"
        >
          Smart
          <img
            src="@/assets/svg/learning-badge.svg"
            alt="Learning"
            class="inline-block h-[1em] sm:h-[1.2em] md:h-[1.5em] w-auto mx-1 sm:mx-2 align-middle -mt-3 sm:-mt-5 md:-mt-7 animate-dangle origin-top-right"
          />
          <br />
          Made Fun for Kids
        </h1>

        <!-- Description -->
        <p
          class="text-muted-foreground text-sm sm:text-base max-w-lg mb-6 md:mb-5 leading-relaxed"
        >
          Dive into a world full of colors, characters, and challenges designed
          for kids. KiddoVerse helps children learn new things while having fun
          every single minute.
        </p>

        <!-- CTA Button -->
        <Button
          as="a"
          href="/enroll"
          class="w-fit whitespace-nowrap transition-all duration-150 ease-in! rounded-2xl px-6 sm:px-8 py-5 sm:py-7 text-sm font-semibold text-white bg-linear-to-r from-[#00cbb0] to-[#a6e12e] shadow-[-3px_3.5px_0px_0px_rgba(0,0,0,1)] border-none hover:shadow-none hover:-translate-x-px hover:-translate-y-px mb-8 md:mb-10"
        >
          Apply Now
          <span
            class="ml-2 group-hover:translate-x-1 transition-transform inline-block"
          >→</span>
        </Button>

        <!-- Stats Row -->
        <div
          class="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full max-w-xl"
        >
          <div
            v-for="item in stats"
            :key="item.id"
            class="bg-white/60 backdrop-blur-sm border-2 border-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center lg:text-left"
          >
            <div
              class="text-muted-foreground text-[10px] sm:text-xs font-semibold mb-1 uppercase tracking-wider"
            >
              {{ item.label }}
            </div>
            <div class="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
              <StatCounter :value="item.value" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div
        class="relative order-1 lg:order-2 animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-300 ease-out flex justify-center lg:justify-end"
      >
        <img
          src="@/assets/svg/hero-cartoon.svg"
          alt="Hero Illustration"
          class="w-full max-w-sm sm:max-w-md lg:max-w-none h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import StatCounter from "@/components/StatCounter.vue";
import type { StatItem } from "@/types/homepage";

defineProps<{
  stats: StatItem[];
  image: string;
}>();
</script>
