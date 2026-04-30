<template>
  <section class="py-20 bg-white overflow-hidden" id="testimonials">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <!-- Tag -->
      <div class="inline-block px-4 py-1.5 bg-[#f0f9f4] border border-[#2bb673]/20 rounded-full text-[10px] font-bold text-[#2bb673] uppercase tracking-widest mb-4">
        Testimonials
      </div>
      
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#0f2d21] leading-tight mb-4">
        What Student's Parents <br /> Say About Us
      </h2>
      
      <!-- Wavy Separator -->
      <div class="flex justify-center mb-16">
        <img src="@/assets/svg/wave-base.svg" alt="" class="w-32 h-auto opacity-50" />
      </div>

      <!-- Wooden Board Container (Simplified Re-construction) -->
      <div class="relative max-w-5xl mx-auto min-h-[500px] md:min-h-[600px] flex items-center justify-center p-8 md:p-12 lg:p-20 rounded-[3rem] bg-[#fdfaf5] border-8 border-[#8b5a2b] shadow-2xl overflow-hidden">
        
        <!-- Background Forest Vibe (Simulated with Blobs) -->
        <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div class="absolute top-10 left-10 w-32 h-32 bg-green-500 rounded-full blur-3xl"></div>
          <div class="absolute bottom-10 right-10 w-48 h-48 bg-green-600 rounded-full blur-3xl"></div>
        </div>

        <!-- White Paper Card -->
        <div class="relative z-10 bg-white w-full max-w-3xl p-8 md:p-16 rounded-2xl shadow-lg border border-gray-100 flex flex-col items-center">
          
          <!-- Green Quote Icon -->
          <div class="w-16 h-16 md:w-24 md:h-24 bg-[#32D74B] rounded-full flex items-center justify-center mb-8 md:mb-12 shadow-xl">
            <Quote class="w-8 h-8 md:w-12 md:h-12 text-white fill-current" />
          </div>

          <!-- Quote Text -->
          <blockquote class="text-xl md:text-3xl font-bold text-[#0f2d21] leading-relaxed mb-8 md:mb-12">
            “My child has become more confident and active since joining this school. The teachers genuinely care about each student.”
          </blockquote>

          <!-- Author Info -->
          <div class="flex flex-col items-center">
            <span class="text-gray-400 text-xs md:text-sm font-medium mb-1">© Doha, Qatar</span>
            <cite class="text-lg md:text-xl font-bold text-[#0f2d21] not-italic mb-3">Courtney Henry</cite>
            
            <!-- Stars -->
            <div class="flex items-center gap-1">
              <Star v-for="i in 5" :key="i" class="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
            </div>
          </div>
        </div>

        <!-- Pagination Dots -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          <div v-for="i in 5" :key="i" class="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border-2 border-white transition-all" :class="i === 1 ? 'bg-white scale-125' : 'bg-transparent'"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Quote, Star } from 'lucide-vue-next';
import type { Testimonial } from '@/types/homepage';

defineProps<{
  testimonials: Testimonial[];
}>();
</script>
