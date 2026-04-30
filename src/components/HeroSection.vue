<template>
  <section
    id="home"
    class="h-screen flex justify-center items-center relative bg-[#DFFFE0] overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 opacity-40">
      <img
        src="@/assets/svg/toys.svg"
        alt="Background Pattern"
        class="w-full h-full object-cover"
      />
    </div>

    <div
      class="max-w-380 mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center"
    >
      <!-- Left Content -->
      <div
        class="flex flex-col animate-in fade-in slide-in-from-bottom-12 duration-1200 ease-out"
      >
        <!-- Tag -->
        <div
          class="w-fit bg-white py-2.5 px-5 text-sm font-bold border-2 border-black rounded-sm shadow-[-3.5px_3.5px_0px_0px_rgba(0,0,0,1)] mb-10 flex items-center gap-2"
        >
          <span class="w-2 h-2 rounded-full bg-green-500"></span>
          Play. Learn. Shine.
        </div>

        <!-- Heading -->
        <h1
          class="text-6xl md:text-7xl font-bold leading-[1.1] text-black mb-5"
        >
          Smart
          <img
            src="@/assets/svg/learning-badge.svg"
            alt="Learning"
            class="inline-block h-[1.5em] w-auto mx-2 align-middle -mt-7 animate-dangle origin-top-right"
          />
          <br />
          Made Fun for Kids
        </h1>

        <!-- Description -->
        <p
          class="text-muted-foreground text-base max-w-lg mb-5 leading-relaxed"
        >
          Dive into a world full of colors, characters, and challenges designed
          for kids. KiddoVerse helps children learn new things while having fun
          every single minute.
        </p>

        <!-- CTA Button -->
        <Button
          as="a"
          href="/enroll"
          class="w-fit whitespace-nowrap transition-all duration-150 ease-in! rounded-2xl px-8 py-7 text-sm font-semibold text-white bg-linear-to-r from-[#00cbb0] to-[#a6e12e] shadow-[-3px_3.5px_0px_0px_rgba(0,0,0,1)] border-none hover:shadow-none hover:-translate-x-px hover:-translate-y-px mb-10"
        >
          Apply Now
          <span
            class="ml-2 group-hover:translate-x-1 transition-transform inline-block"
            >→</span
          >
        </Button>

        <!-- Stats Row -->
        <div class="grid grid-cols-3 gap-4 max-w-xl">
          <div
            v-for="item in stats"
            :key="item.id"
            class="bg-white/60 backdrop-blur-sm border-2 border-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          >
            <div
              class="text-muted-foreground text-xs font-semibold mb-1 uppercase tracking-wider"
            >
              {{ item.label }}
            </div>
            <div class="text-2xl font-bold text-green-600">
              <StatCounter :value="item.value" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right Image -->
      <div
        class="relative animate-in fade-in slide-in-from-bottom-12 duration-1200 delay-300 scale-105 translate-x-5 origin-center ease-out"
      >
        <img
          src="@/assets/svg/hero-cartoon.svg"
          alt="Hero Illustration"
          class="w-auto h-auto drop-shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import StatCounter from "@/components/StatCounter.vue";
import type { StatItem } from "@/types/homepage";

defineProps<{
  stats: StatItem[];
  image: string;
}>();
</script>
