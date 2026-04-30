<template>
  <section
    class="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#e6f7ff] via-white to-[#f0fff4] px-4 sm:px-6 lg:px-8"
    id="teachers"
  >
    <div class="max-w-7xl mx-auto text-center">
      <!-- Heading -->
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2d21] leading-tight mb-4"
      >
        Meet Our Loving &
        <br class="hidden sm:block" />
        Experienced Teachers
      </h2>

      <!-- Wavy Separator -->
      <div class="flex justify-center mb-10 md:mb-16">
        <img
          src="@/assets/svg/wave-base.svg"
          alt=""
          class="w-32 h-auto opacity-50"
        />
      </div>

      <!-- Grid -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
      >
        <div
          v-for="teacher in teachers"
          :key="teacher.id"
          class="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-white hover:translate-y-[-5px] transition-all duration-300 group p-3 sm:p-4"
        >
          <!-- Image -->
          <div
            class="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl mb-3 sm:mb-5"
          >
            <img
              :src="teacher.avatar"
              :alt="teacher.name"
              class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <!-- Info -->
          <div class="flex items-center justify-between px-1 sm:px-2 gap-2">
            <div class="text-left min-w-0">
              <h3
                class="text-xs sm:text-sm md:text-base font-bold text-[#0f2d21] leading-tight mb-1 truncate"
              >
                {{ teacher.name }}
              </h3>
              <p
                class="text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest truncate"
              >
                {{ teacher.role }}
              </p>
            </div>

            <!-- Green Circle Icon -->
            <div
              class="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 border-[#2bb673]/20 flex items-center justify-center shrink-0"
            >
              <div
                class="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-[#2bb673] rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Teacher } from "@/types/homepage";

defineProps<{
  teachers: Teacher[];
}>();
</script>
