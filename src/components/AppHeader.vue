<template>
  <header class="bg-linear-to-r from-[#00cbb0] to-[#a6e12e] py-1.5">
    <div class="flex flex-row items-center justify-between max-w-380 mx-auto">
      <div class="flex flex-row gap-x-6 items-center">
        <div
          v-for="info in contactInfo"
          :key="info.label"
          class="flex items-center"
        >
          <div class="flex items-center gap-x-1">
            <component
              :is="info.icon"
              stroke-width="1.5"
              :size="info.iconSize"
              class="text-white"
            />
            <div class="text-xs text-white">{{ info.label }}:</div>
          </div>
          <div class="ml-1 text-xs text-white">{{ info.value }}</div>
        </div>
      </div>

      <div class="flex flex-row gap-x-4 items-center">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.href"
          class="text-white transition-colors"
        >
          <Icon :icon="social.icon" width="16" height="16" />
        </a>
      </div>
    </div>
  </header>
  <header class="sticky top-0 z-20 bg-white/98 backdrop-blur-md">
    <div
      class="max-w-380 mx-auto flex flex-row items-center justify-between gap-4 pt-3 pb-2 relative z-10"
    >
      <a
        href="#home"
        class="inline-flex items-baseline gap-1 text-lg font-bold text-dark-soft"
      >
        <img
          src="@/assets/svg/logo.svg"
          alt="Kids World Logo"
          class="h-12 w-auto"
        />
      </a>
      <nav class="flex gap-10 flex-wrap">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="item.href"
          :class="[
            'text-base font-medium duration-300 ease-in hover:text-green-500',
            currentPath === item.href ? 'text-green-500' : 'text-black',
          ]"
        >
          {{ item.label }}
        </a>
      </nav>
      <Button
        as="a"
        href="/enroll"
        class="whitespace-nowrap transition-all duration-150 ease-in! rounded-2xl px-8 py-6 text-sm font-semibold text-white bg-linear-to-r from-[#00cbb0] to-[#a6e12e] shadow-[-3px_3.5px_0px_0px_rgba(0,0,0,1)] border-none hover:shadow-none hover:-translate-x-px hover:-translate-y-px"
      >
        Apply Now
      </Button>
    </div>
    <!-- Wave Base -->
    <img
      src="@/assets/svg/wave-base.svg"
      class="absolute bottom-[45px] left-0 w-full h-auto pointer-events-none translate-y-full drop-shadow-[0_4px_0px_rgba(0,0,0,0.04)]"
      alt=""
    />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { NavItem } from "@/types/homepage";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "@lucide/vue";
import { Icon } from "@iconify/vue";

const props = defineProps<{ navItems: NavItem[] }>();

const contactInfo = [
  { label: "Email", value: "example@email.com", icon: Mail, iconSize: 17 },
  { label: "Contact Now", value: "+91-0000000000", icon: Phone, iconSize: 15 },
];

const socialLinks = [
  { name: "Facebook", icon: "ri:facebook-fill", href: "#" },
  { name: "Twitter", icon: "ri:twitter-x-fill", href: "#" },
  { name: "Instagram", icon: "ri:instagram-line", href: "#" },
  { name: "Linkedin", icon: "ri:linkedin-box-fill", href: "#" },
  { name: "Youtube", icon: "ri:youtube-fill", href: "#" },
];

const currentPath = ref(window.location.pathname);

const updatePath = () => {
  currentPath.value = window.location.pathname;
};

onMounted(() => {
  window.addEventListener("popstate", updatePath);
});

onUnmounted(() => {
  window.removeEventListener("popstate", updatePath);
});
</script>
