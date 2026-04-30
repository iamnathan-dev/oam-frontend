<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <Card
      v-for="card in cards"
      :key="card.id"
      class="p-10 border-2 border-white/50 shadow-xl rounded-[3rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group cursor-default"
      :style="{ background: card.background }"
    >
      <CardHeader class="p-0">
        <CardTitle class="m-0 mb-5 text-3xl font-bold tracking-tight text-[#0f2d21] leading-tight">
          {{ card.title }}
        </CardTitle>
      </CardHeader>
      <CardContent class="p-0">
        <p class="m-0 text-muted-foreground leading-relaxed text-lg font-medium opacity-90">
          {{ card.description }}
        </p>
        <div class="mt-8 flex items-center gap-2 text-green-700 font-bold cursor-pointer group/link">
          <span class="hover:underline underline-offset-4">{{ card.detail }}</span>
          <span class="translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { InfoCard } from "@/types/homepage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
const props = defineProps<{ cards: InfoCard[] }>();
</script>
