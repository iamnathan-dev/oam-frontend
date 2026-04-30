<template>
  <div class="mb-8 space-y-4">
    <h2 class="m-0 text-2xl md:text-3xl font-bold">{{ title }}</h2>
    <p class="m-0 text-muted max-w-[36rem]">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  subtitle: string;
}>();
</script>
