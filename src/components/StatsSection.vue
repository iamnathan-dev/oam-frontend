<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
    <Card
      v-for="item in stats"
      :key="item.id"
      class="p-6 text-center rounded-2xl border border-green-900/8 bg-[#f7fbf8] shadow-none"
    >
      <CardContent class="p-0">
        <span class="block text-4xl font-extrabold text-green-900">{{
          item.value
        }}</span>
        <span class="block text-muted mt-1 font-medium">{{ item.label }}</span>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { StatItem } from "@/types/homepage";
import { Card, CardContent } from "@/components/ui/card";

const props = defineProps<{ stats: StatItem[] }>();
</script>
