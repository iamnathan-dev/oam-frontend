<template>
  <section class="pb-20" id="why-choose">
    <div
      class="max-w-380 mx-auto min-h-[500px] relative py-16 px-[50px] rounded-3xl overflow-hidden bg-gray-50/50"
    >
      <div class="absolute inset-0 z-0 opacity-40">
        <img
          src="@/assets/svg/toys-2.svg"
          alt="Background Pattern"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Background Pattern & Gradients -->
      <div class="absolute inset-0 z-0">
        <div
          class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(0,203,176,0.18)_0%,transparent_50%)]"
        ></div>
        <div
          class="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(166,225,46,0.18)_0%,transparent_50%)]"
        ></div>
        <img
          src="@/assets/svg/toys-2.svg"
          alt="Background Pattern"
          class="w-full h-full object-cover scale-110 opacity-15"
        />
      </div>

      <div class="relative z-10 flex flex-col items-center text-center">
        <h2 class="text-5xl md:text-5xl font-bold text-[#0f2d21] leading-tight">
          Why Choose <br />
          Oaks & Acorns
        </h2>

        <!-- Wavy Separator -->
        <div class="mb-8 mt-5">
          <WavySeparator />
        </div>

        <WhyChooseSection :items="items" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WhyChooseSection from "@/components/WhyChooseSection.vue";
import type { WhyChooseItem } from "@/types/homepage";
import WavySeparator from "./WavySeparator.vue";

defineProps<{
  items: WhyChooseItem[];
}>();
</script>
