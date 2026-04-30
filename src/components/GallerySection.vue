<template>
  <section class="py-20 bg-linear-to-b from-white to-green-50/50" id="gallery">
    <div class="max-w-380 mx-auto px-4">
      <div class="mb-12 space-y-4">
        <h2 class="m-0 text-4xl md:text-5xl font-bold tracking-tight text-[#0f2d21]">
          Learning, Growing & Smiling Together
        </h2>
        <p class="m-0 text-muted-foreground max-w-2xl text-lg font-medium">
          Modern lessons, supportive teachers, and joyful moments help every
          child shine.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Card
          v-for="card in cards"
          :key="card.id"
          class="overflow-hidden border-2 border-white shadow-xl rounded-[3rem] group hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl bg-white/50 backdrop-blur-sm"
        >
          <div class="relative overflow-hidden h-72">
            <img
              :src="card.imageUrl"
              :alt="card.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <CardContent class="p-8">
            <h3 class="m-0 mb-4 font-bold text-2xl tracking-tight text-[#0f2d21]">
              {{ card.title }}
            </h3>
            <p class="m-0 text-muted-foreground leading-relaxed font-medium">
              {{ card.description }}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card, CardContent } from "@/components/ui/card";
import type { GalleryCard } from "@/types/homepage";

defineProps<{
  cards: GalleryCard[];
}>();
</script>
