<template>
  <section class="py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" id="about">
    <div
      class="max-w-7xl mx-auto relative py-10 sm:py-14 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-[100px] rounded-3xl overflow-hidden bg-gray-50/50"
    >
      <!-- Background Pattern -->
      <div class="absolute inset-0 z-0 opacity-40">
        <img
          src="@/assets/svg/toys-2.svg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Background Gradients -->
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

      <!-- main content -->
      <div class="relative z-10 flex flex-col items-center text-center">
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f2d21] leading-tight"
        >
          About Our School &
          <br class="hidden sm:block" />
          Creative Learning Center
        </h2>

        <!-- Wavy Separator -->
        <div class="mb-6 md:mb-8 w-full max-w-md">
          <WavySeparator />
        </div>

        <p
          class="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mb-8 md:mb-12 opacity-80"
        >
          Our school follows a balanced learning pattern that prioritizes
          child-led discovery and creative play. We nurture natural curiosity
          through a rhythmic schedule that transforms every moment into a
          meaningful adventure.
        </p>

        <!-- Video Board Image -->
        <div
          class="relative w-full group cursor-pointer animate-in fade-in zoom-in duration-1000 delay-300"
        >
          <img
            src="@/assets/images/about.png"
            alt="Video Board"
            class="w-full h-auto rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center">
            <div
              class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110"
            >
              <div
                class="w-0 h-0 border-t-[8px] sm:border-t-[10px] border-t-transparent border-l-[14px] sm:border-l-[18px] border-l-red-500 border-b-[8px] sm:border-b-[10px] border-b-transparent ml-1"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import WavySeparator from "@/components/WavySeparator.vue";

defineProps<{
  videoCover: string;
}>();
</script>
