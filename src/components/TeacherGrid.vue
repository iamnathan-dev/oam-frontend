<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    <Card
      v-for="teacher in teachers"
      :key="teacher.id"
      class="p-8 text-center border-2 border-white shadow-xl rounded-[3rem] bg-white/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
    >
      <CardHeader class="p-0 flex flex-col items-center">
        <div class="relative mb-6 overflow-hidden rounded-[2.5rem] shadow-lg group-hover:shadow-2xl transition-all duration-500">
          <Avatar class="w-48 h-48 rounded-none">
            <AvatarImage :src="teacher.avatar" :alt="teacher.name" class="object-cover transition-transform duration-700 group-hover:scale-110" />
            <AvatarFallback>{{ teacher.name.charAt(0) }}</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle class="m-0 mb-2 font-bold text-2xl tracking-tight text-[#0f2d21]">
          {{ teacher.name }}
        </CardTitle>
      </CardHeader>
      <CardContent class="p-0">
        <p class="m-0 text-muted-foreground font-semibold uppercase text-xs tracking-widest opacity-80">
          {{ teacher.role }}
        </p>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import type { Teacher } from "@/types/homepage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const props = defineProps<{ teachers: Teacher[] }>();
</script>
