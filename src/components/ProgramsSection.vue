<template>
  <section class="pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8">
    <div
      class="max-w-7xl mx-auto relative py-10 sm:py-14 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-[50px] rounded-3xl overflow-hidden bg-gray-50/50"
    >
      <!-- Background Pattern & Gradients -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <div
          class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(0,203,176,0.18)_0%,transparent_50%)]"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(166,225,46,0.18)_0%,transparent_50%)]"
        ></div>
        <img
          src="@/assets/svg/toys-2.svg"
          alt=""
          class="w-full h-full object-cover scale-110 opacity-15"
        />
      </div>

      <div class="relative z-10 flex flex-col items-center text-center">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2d21] leading-tight"
        >
          Experimentation
          <br class="hidden sm:block" />
          Nurtures Creativity
        </h2>

        <!-- Wavy Separator -->
        <div class="mb-6 md:mb-8 w-full max-w-md">
          <WavySeparator />
        </div>

        <FeatureGrid :items="items" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureGrid from "@/components/FeatureGrid.vue";
import type { FeatureItem } from "@/types/homepage";
import WavySeparator from "./WavySeparator.vue";

defineProps<{
  items: FeatureItem[];
}>();
</script>
