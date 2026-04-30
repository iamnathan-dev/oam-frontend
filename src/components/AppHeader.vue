<template>
  <!-- Top contact / social bar: condenses on tablet, hides on phone -->
  <div class="hidden sm:block bg-linear-to-r from-[#00cbb0] to-[#a6e12e] py-1.5">
    <div
      class="max-w-7xl mx-auto px-4 lg:px-8 flex flex-row items-center justify-between gap-4"
    >
      <div class="flex flex-row gap-x-3 md:gap-x-6 items-center min-w-0">
        <div
          v-for="info in contactInfo"
          :key="info.label"
          class="flex items-center min-w-0"
          :class="info.label === 'Contact Now' ? 'hidden md:flex' : ''"
        >
          <div class="flex items-center gap-x-1">
            <component
              :is="info.icon"
              stroke-width="1.5"
              :size="info.iconSize"
              class="text-white shrink-0"
            />
            <div class="text-[11px] md:text-xs text-white whitespace-nowrap">
              {{ info.label }}:
            </div>
          </div>
          <div class="ml-1 text-[11px] md:text-xs text-white truncate">
            {{ info.value }}
          </div>
        </div>
      </div>

      <div class="flex flex-row gap-x-3 md:gap-x-4 items-center shrink-0">
        <a
          v-for="social in socialLinks"
          :key="social.name"
          :href="social.href"
          class="text-white transition-colors"
          :aria-label="social.name"
        >
          <Icon :icon="social.icon" width="16" height="16" />
        </a>
      </div>
    </div>
  </div>

  <header class="sticky top-0 z-20 bg-white/98 backdrop-blur-md">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between gap-4 pt-3 pb-2 relative z-10"
    >
      <a
        href="#home"
        class="inline-flex items-baseline gap-1 text-lg font-bold text-dark-soft shrink-0"
      >
        <img
          src="@/assets/svg/logo.svg"
          alt="Kids World Logo"
          class="h-9 sm:h-10 lg:h-12 w-auto"
        />
      </a>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex gap-8 xl:gap-10 flex-wrap">
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

      <!-- Desktop CTA -->
      <Button
        as="a"
        href="/enroll"
        class="hidden lg:inline-flex whitespace-nowrap transition-all duration-150 ease-in! rounded-2xl px-6 xl:px-8 py-5 xl:py-6 text-sm font-semibold text-white bg-linear-to-r from-[#00cbb0] to-[#a6e12e] shadow-[-3px_3.5px_0px_0px_rgba(0,0,0,1)] border-none hover:shadow-none hover:-translate-x-px hover:-translate-y-px"
      >
        Apply Now
      </Button>

      <!-- Mobile actions -->
      <div class="flex items-center gap-2 lg:hidden">
        <Button
          as="a"
          href="/enroll"
          class="hidden sm:inline-flex whitespace-nowrap rounded-xl px-4 py-3 text-xs font-semibold text-white bg-linear-to-r from-[#00cbb0] to-[#a6e12e] shadow-[-2px_2.5px_0px_0px_rgba(0,0,0,1)] border-none"
        >
          Apply Now
        </Button>
        <Sheet v-model:open="mobileOpen">
          <SheetTrigger as-child>
            <button
              class="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-black/10 text-black"
              aria-label="Open menu"
            >
              <Menu :size="22" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" class="w-[82%] max-w-sm p-0">
            <SheetHeader class="px-6 pt-6 pb-2 border-b border-black/5">
              <SheetTitle class="flex items-center gap-2 text-left">
                <img src="@/assets/svg/logo.svg" alt="" class="h-8 w-auto" />
              </SheetTitle>
            </SheetHeader>
            <nav class="flex flex-col px-2 py-4">
              <a
                v-for="item in navItems"
                :key="item.id"
                :href="item.href"
                @click="mobileOpen = false"
                :class="[
                  'block px-4 py-3 rounded-lg text-base font-medium transition-colors',
                  currentPath === item.href
                    ? 'text-green-600 bg-green-50'
                    : 'text-black hover:bg-gray-50',
                ]"
              >
                {{ item.label }}
              </a>
            </nav>
            <div class="px-6 pb-8">
              <Button
                as="a"
                href="/enroll"
                @click="mobileOpen = false"
                class="w-full justify-center rounded-2xl px-6 py-5 text-sm font-semibold text-white bg-linear-to-r from-[#00cbb0] to-[#a6e12e] shadow-[-3px_3.5px_0px_0px_rgba(0,0,0,1)] border-none"
              >
                Apply Now
              </Button>
              <div class="mt-6 flex flex-col gap-2 text-xs text-gray-500">
                <div class="flex items-center gap-2">
                  <Mail :size="14" />
                  <span>example@email.com</span>
                </div>
                <div class="flex items-center gap-2">
                  <Phone :size="14" />
                  <span>+91-0000000000</span>
                </div>
              </div>
              <div class="mt-4 flex items-center gap-3 text-gray-400">
                <a
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.href"
                  :aria-label="social.name"
                  class="hover:text-green-600 transition-colors"
                >
                  <Icon :icon="social.icon" width="18" height="18" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
    <!-- Wave Base -->
    <img
      src="@/assets/svg/wave-base.svg"
      class="absolute bottom-[45px] left-0 w-full h-auto pointer-events-none translate-y-full drop-shadow-[0_4px_0px_rgba(0,0,0,0.04)] hidden md:block"
      alt=""
    />
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { NavItem } from "@/types/homepage";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Mail, Phone, Menu } from "@lucide/vue";
import { Icon } from "@iconify/vue";

defineProps<{ navItems: NavItem[] }>();

const mobileOpen = ref(false);

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

const currentPath = ref(typeof window !== "undefined" ? window.location.pathname : "/");

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
