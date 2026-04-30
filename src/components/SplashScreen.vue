<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden"
    >
      <div class="relative z-10 flex flex-col items-center text-center px-4">
        <div class="relative w-32 h-32 md:w-48 md:h-48 mb-8">
          <img
            src="@/assets/svg/logo.svg"
            alt="Logo"
            class="w-full h-full object-contain animate-bounce"
          />
        </div>
        <h1 class="text-3xl md:text-5xl font-bold text-[#0f2d21] mb-4">
          Oaks & Acorns
        </h1>
        <p class="text-muted-foreground text-sm md:text-base font-medium">
          Play. Learn. Shine.
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const emit = defineEmits(['finish']);
const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = false;
    emit('finish');
  }, 2000);
});
</script>

<style scoped>
.fade-leave-active { transition: opacity 0.5s ease; }
.fade-leave-to { opacity: 0; }
</style>
