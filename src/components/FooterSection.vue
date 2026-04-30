<template>
  <footer class="bg-white relative pt-12 md:pt-16 lg:pt-20 overflow-hidden">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 md:pb-32 relative z-10"
    >
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
      >
        <!-- Brand Column -->
        <div class="flex flex-col gap-5 sm:gap-6 sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-2">
            <div
              class="w-10 h-10 sm:w-12 sm:h-12 bg-[#2bb673] rounded-lg flex items-center justify-center"
            >
              <img
                src="@/assets/svg/logo.svg"
                alt="Logo"
                class="w-7 h-7 sm:w-8 sm:h-8 invert"
              />
            </div>
            <div class="flex flex-col leading-none">
              <span
                class="text-xl sm:text-2xl font-black text-[#0f2d21] uppercase tracking-tighter"
              >Kids</span>
              <span
                class="text-[10px] font-bold text-[#2bb673] uppercase tracking-widest"
              >Modern School</span>
            </div>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed max-w-md">
            Join thousands of travelers experiencing stress-free trips with
            Awesome! Where will your next adventure take you?
          </p>
          <div class="flex items-center gap-4 text-gray-400">
            <a href="#" aria-label="Facebook" class="hover:text-[#2bb673] transition-colors">
              <Facebook class="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" class="hover:text-[#2bb673] transition-colors">
              <Instagram class="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" class="hover:text-[#2bb673] transition-colors">
              <Linkedin class="w-5 h-5" />
            </a>
            <a href="#" aria-label="Send" class="hover:text-[#2bb673] transition-colors">
              <Send class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Action -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <h4 class="text-base sm:text-lg font-bold text-[#0f2d21]">
            Quick Action
          </h4>
          <ul class="flex flex-col gap-3">
            <li
              v-for="item in ['Home', 'About us', 'Pricing', 'Blog', 'Blog Details']"
              :key="item"
            >
              <a
                href="#"
                class="text-gray-500 hover:text-[#2bb673] text-sm transition-colors"
              >{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Product -->
        <div class="flex flex-col gap-4 sm:gap-6">
          <h4 class="text-base sm:text-lg font-bold text-[#0f2d21]">Product</h4>
          <ul class="flex flex-col gap-3">
            <li
              v-for="item in ['Features', 'Careers', 'How it works', 'Contact']"
              :key="item"
            >
              <a
                href="#"
                class="text-gray-500 hover:text-[#2bb673] text-sm transition-colors"
              >{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col gap-4 sm:gap-6 sm:col-span-2 lg:col-span-1">
          <h4 class="text-base sm:text-lg font-bold text-[#0f2d21]">
            Newsletter
          </h4>
          <p class="text-gray-500 text-sm leading-relaxed">
            Join thousands of travelers experiencing stress-free trips with
          </p>
          <form
            class="relative flex items-center w-full max-w-md"
            @submit.prevent
          >
            <input
              type="email"
              placeholder="Email address"
              class="w-full h-12 sm:h-14 pl-5 sm:pl-6 pr-28 sm:pr-32 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#2bb673]"
            />
            <button
              type="submit"
              class="absolute right-1 top-1 bottom-1 px-4 sm:px-6 bg-[#2bb673] text-white rounded-full text-xs sm:text-sm font-bold hover:bg-[#24a365] transition-colors"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div
        class="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400 text-center"
      >
        <p>© 2025 Sproit. All rights reserved.</p>
        <div class="flex items-center gap-6 sm:gap-8">
          <a href="#" class="hover:text-[#2bb673]">Privacy Policy</a>
          <a href="#" class="hover:text-[#2bb673]">Terms of Service</a>
        </div>
      </div>
    </div>

    <!-- Grassy Bottom Border -->
    <div
      class="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-32 pointer-events-none overflow-hidden bg-linear-to-t from-[#daf7e6] to-transparent"
    />
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Instagram, Linkedin, Send } from "lucide-vue-next";
</script>

<style scoped>
footer {
  font-family: "Poppins", sans-serif;
}
</style>
