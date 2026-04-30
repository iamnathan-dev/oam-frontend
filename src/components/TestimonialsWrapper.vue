<template>
  <section
    class="py-12 md:py-16 lg:py-20 bg-white overflow-hidden px-4 sm:px-6 lg:px-8"
    id="testimonials"
  >
    <div class="max-w-7xl mx-auto text-center">
      <!-- Tag -->
      <div
        class="inline-block px-4 py-1.5 bg-[#f0f9f4] border border-[#2bb673]/20 rounded-full text-[10px] font-bold text-[#2bb673] uppercase tracking-widest mb-4"
      >
        Testimonials
      </div>

      <!-- Heading -->
      <h2
        class="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f2d21] leading-tight mb-4"
      >
        What Student's Parents
        <br class="hidden sm:block" />
        Say About Us
      </h2>

      <!-- Wavy Separator -->
      <div class="flex justify-center mb-10 md:mb-16">
        <img
          src="@/assets/svg/wave-base.svg"
          alt=""
          class="w-32 h-auto opacity-50"
        />
      </div>

      <!-- Wooden Board Container -->
      <div
        class="relative max-w-5xl mx-auto min-h-[420px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-center p-5 sm:p-8 md:p-12 lg:p-20 rounded-3xl sm:rounded-[2.5rem] md:rounded-[3rem] bg-[#fdfaf5] border-4 sm:border-8 border-[#8b5a2b] shadow-2xl overflow-hidden"
      >
        <!-- Background Forest Vibe (Simulated with Blobs) -->
        <div
          class="absolute inset-0 z-0 opacity-20 pointer-events-none"
        >
          <div
            class="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute bottom-10 right-10 w-48 h-48 bg-green-600 rounded-full blur-3xl"
          ></div>
        </div>

        <!-- White Paper Card -->
        <div
          class="relative z-10 bg-white w-full max-w-3xl p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center"
        >
          <!-- Green Quote Icon -->
          <div
            class="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-[#32D74B] rounded-full flex items-center justify-center mb-6 sm:mb-8 md:mb-12 shadow-xl shrink-0"
          >
            <Quote
              class="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white fill-current"
            />
          </div>

          <!-- Quote Text -->
          <blockquote
            class="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#0f2d21] leading-relaxed mb-6 sm:mb-8 md:mb-12"
          >
            {{ activeTestimonial.quote }}
          </blockquote>

          <!-- Author Info -->
          <div class="flex flex-col items-center">
            <span
              class="text-gray-400 text-[11px] sm:text-xs md:text-sm font-medium mb-1"
            >© Doha, Qatar</span>
            <cite
              class="text-base sm:text-lg md:text-xl font-bold text-[#0f2d21] not-italic mb-3"
            >{{ activeTestimonial.author }}</cite>

            <!-- Stars -->
            <div class="flex items-center gap-1">
              <Star
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current"
              />
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div
          class="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3"
        >
          <div
            v-for="i in 5"
            :key="i"
            class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full border-2 border-white transition-all"
            :class="i === 1 ? 'bg-white scale-125' : 'bg-transparent'"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Quote, Star } from "lucide-vue-next";
import type { Testimonial } from "@/types/homepage";

const props = defineProps<{
  testimonials: Testimonial[];
}>();

const activeTestimonial = computed(
  () =>
    props.testimonials[0] ?? {
      id: "default",
      quote:
        "My child has become more confident and active since joining this school. The teachers genuinely care about each student.",
      author: "Courtney Henry",
      role: "Parent",
    },
);
</script>
