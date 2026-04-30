<template>
  <section class="py-20" id="blog">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <!-- Tag -->
      <div class="inline-block px-4 py-1.5 bg-[#f0f9f4] border border-[#2bb673]/20 rounded-full text-[10px] font-bold text-[#2bb673] uppercase tracking-widest mb-4">
        Blogs & Articles
      </div>
      
      <!-- Heading -->
      <h2 class="text-3xl md:text-4xl font-bold text-[#0f2d21] leading-tight mb-4">
        Learning, Growing & <br /> Smiling Together
      </h2>
      
      <!-- Wavy Separator -->
      <div class="flex justify-center mb-16">
        <img src="@/assets/svg/wave-base.svg" alt="" class="w-32 h-auto opacity-50" />
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="post in posts"
          :key="post.id"
          class="bg-white border-2 border-[#f0f7f3] rounded-[2rem] overflow-hidden p-3 flex flex-col items-center group hover:border-[#2bb673]/30 transition-all duration-300"
        >
          <div class="w-full aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-6">
            <img
              :src="post.imageUrl"
              :alt="post.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div class="px-3 pb-6 flex flex-col flex-grow text-left">
            <h3 class="text-lg font-bold text-[#0f2d21] leading-tight mb-6">
              {{ post.title }}
            </h3>
            <div class="mt-auto">
              <a
                :href="post.link"
                class="inline-flex items-center gap-2 text-xs font-bold text-[#2bb673] hover:opacity-70 transition-opacity border-b-2 border-transparent hover:border-[#2bb673] pb-1"
              >
                Read More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { BlogPost } from '@/types/homepage';

defineProps<{
  posts: BlogPost[];
}>();
</script>
