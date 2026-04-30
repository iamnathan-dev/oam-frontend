<template>
  <span>{{ displayValue }}{{ suffix }}</span>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";

const props = defineProps<{
  value: string;
  duration?: number;
}>();

const displayValue = ref(0);
const suffix = ref("");
let targetValue = 0;

const parseValue = () => {
  const match = props.value.match(/(\d+)(.*)/);
  if (match) {
    targetValue = parseInt(match[1], 10);
    suffix.value = match[2];
  } else {
    targetValue = 0;
    suffix.value = props.value;
  }
};

const animate = () => {
  const start = 0;
  const end = targetValue;
  const duration = props.duration || 2000;
  const startTime = performance.now();

  const update = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease out expo for a smooth finish
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    displayValue.value = Math.floor(start + (end - start) * easeProgress);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      displayValue.value = end;
    }
  };

  requestAnimationFrame(update);
};

onMounted(() => {
  parseValue();
  animate();
});

watch(() => props.value, () => {
  parseValue();
  animate();
});
</script>
