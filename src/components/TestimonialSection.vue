<template>
  <Card
    class="p-12 md:p-16 rounded-[3rem] bg-linear-to-br from-[#f0f9f1] via-white to-[#f7fdf9] max-w-4xl mx-auto border-2 border-white shadow-2xl relative overflow-hidden"
  >
    <!-- Decorative Quote Icon -->
    <div class="absolute top-8 right-12 text-green-200/50 text-[10rem] font-serif leading-none select-none pointer-events-none">
      “
    </div>

    <CardHeader class="p-0 relative z-10">
      <CardTitle class="m-0 mb-8 text-sm uppercase tracking-[0.2em] font-bold text-green-600">
        Testimonials
      </CardTitle>
    </CardHeader>
    <CardContent class="p-0 relative z-10">
      <p class="m-0 mb-10 text-3xl md:text-4xl text-[#0f2d21] font-bold leading-tight tracking-tight">
        "{{ activeTestimonial.quote }}"
      </p>
      <footer class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-xl font-bold text-green-700">
          {{ activeTestimonial.author.charAt(0) }}
        </div>
        <div class="flex flex-col">
          <strong class="text-[#0f2d21] text-xl font-bold">{{ activeTestimonial.author }}</strong>
          <span class="text-muted-foreground font-medium text-sm">{{ activeTestimonial.role }}</span>
        </div>
      </footer>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Testimonial } from "@/types/homepage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const props = defineProps<{ testimonials: Testimonial[] }>();

const activeTestimonial = computed(() => props.testimonials[0]);
</script>
