<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-20">
    <div v-for="(item, index) in items" :key="item.id" class="relative group">
      <!-- Peeking Monster (CSS Character) -->
      <div
        class="absolute -top-10 left-1/2 -translate-x-1/2 w-[50%] h-[180px] z-0 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:-top-24 pointer-events-none"
      >
        <!-- Organic Blob Shape (Different for each card) -->
        <div
          class="w-full h-full relative shadow-xl transition-colors duration-500"
          :class="[
            shapes[index % shapes.length],
            themes[index % themes.length].bg,
          ]"
        >
          <!-- Eyes -->
          <div
            class="absolute top-1/6 left-1/2 -translate-x-1/2 flex gap-4 mt-6 z-20"
          >
            <div
              class="w-6 h-6 bg-white rounded-full relative flex items-center justify-center animate-blink"
              :style="{ animationDelay: index * 0.5 + 's' }"
            >
              <div
                class="w-3 h-3 bg-black rounded-full animate-look-around"
                :style="{ animationDelay: index * 0.5 + 's' }"
              ></div>
            </div>
            <div
              class="w-6 h-6 bg-white rounded-full relative flex items-center justify-center animate-blink"
              :style="{ animationDelay: index * 0.5 + 's' }"
            >
              <div
                class="w-3 h-3 bg-black rounded-full animate-look-around"
                :style="{ animationDelay: index * 0.5 + 's' }"
              ></div>
            </div>
          </div>
          <!-- Mouth (Wide Smile with Teeth) -->
          <div
            class="absolute top-[40%] left-1/2 -translate-x-1/2 w-12 h-6 bg-black/80 rounded-b-full overflow-hidden flex flex-col items-center z-10"
          >
            <!-- Teeth -->
            <div class="w-full h-1/3 bg-white border-b border-gray-100"></div>
          </div>
        </div>
      </div>

      <Card
        class="relative p-7 min-h-[342px] w-[295px] border flex flex-col transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none overflow-visible ring-0 z-10"
        :class="[
          themes[index % themes.length].shadow,
          themes[index % themes.length].hoverBg,
          themes[index % themes.length].border,
          'bg-white',
        ]"
      >
        <CardHeader class="p-0 flex flex-col items-start">
          <!-- Illustration Area -->
          <div class="relative w-24 h-24 mb-4 flex items-center justify-center">
            <!-- Cartoon Boy -->
            <img
              src="@/assets/svg/boy.svg"
              alt="Cartoon Boy"
              class="relative z-10 w-auto h-[94%] object-contain group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500"
            />
          </div>

          <CardTitle
            class="text-xl font-bold text-black leading-tight group-hover:text-white transition-colors duration-300"
          >
            {{ item.title }}
          </CardTitle>
        </CardHeader>

        <CardContent class="p-0 text-left">
          <p
            class="m-0 text-gray-400 text-sm leading-relaxed mb-5 group-hover:text-white/90 transition-colors duration-300"
          >
            Aean auctoetnliir pis terios. ante ipsummis fauulet utrice posere
            cubtsed leo pharetu nec augue. dui bibendum ornare elementum.
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FeatureItem } from "@/types/homepage";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const props = defineProps<{ items: FeatureItem[] }>();

const shapes = [
  "rounded-[100%_100%_10%_10%/100%_100%_0%_0%]", // Triangle-ish
  "rounded-[20px]", // Square-ish
  "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]", // Organic 1
  "rounded-[30%_70%_70%_30%/50%_50%_50%_50%]", // Organic 2
];

const themes = [
  {
    bg: "bg-[#22c55e]",
    shadow: "shadow-[10px_10px_0px_0px_#22c55e]",
    hoverBg: "hover:bg-[#22c55e]",
    border: "border-[#22c55e]/20",
  },
  {
    bg: "bg-[#f97316]",
    shadow: "shadow-[10px_10px_0px_0px_#f97316]",
    hoverBg: "hover:bg-[#f97316]",
    border: "border-[#f97316]/20",
  },
  {
    bg: "bg-[#16a34a]",
    shadow: "shadow-[10px_10px_0px_0px_#16a34a]",
    hoverBg: "hover:bg-[#16a34a]",
    border: "border-[#16a34a]/20",
  },
  {
    bg: "bg-[#ffb800]",
    shadow: "shadow-[10px_10px_0px_0px_#ffb800]",
    hoverBg: "hover:bg-[#ffb800]",
    border: "border-[#ffb800]/20",
  },
];
</script>
