<template>
  <footer class="bg-white relative pt-20 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 pb-32 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand Column -->
        <div class="flex flex-col gap-6">
          <div class="flex items-center gap-2">
            <div class="w-12 h-12 bg-[#2bb673] rounded-lg flex items-center justify-center">
              <img src="@/assets/svg/logo.svg" alt="Logo" class="w-8 h-8 invert" />
            </div>
            <div class="flex flex-col leading-none">
              <span class="text-2xl font-black text-[#0f2d21] uppercase tracking-tighter">Kids</span>
              <span class="text-[10px] font-bold text-[#2bb673] uppercase tracking-widest">Modern School</span>
            </div>
          </div>
          <p class="text-gray-500 text-sm leading-relaxed max-w-xs">
            Join thousands of travelers experiencing stress-free trips with Awesome! Where will your next adventure take you?
          </p>
          <div class="flex items-center gap-4 text-gray-400">
            <a href="#" class="hover:text-[#2bb673] transition-colors"><Facebook class="w-5 h-5" /></a>
            <a href="#" class="hover:text-[#2bb673] transition-colors"><Instagram class="w-5 h-5" /></a>
            <a href="#" class="hover:text-[#2bb673] transition-colors"><Linkedin class="w-5 h-5" /></a>
            <a href="#" class="hover:text-[#2bb673] transition-colors"><Send class="w-5 h-5" /></a>
          </div>
        </div>

        <!-- Quick Action -->
        <div class="flex flex-col gap-6">
          <h4 class="text-lg font-bold text-[#0f2d21]">Quick Action</h4>
          <ul class="flex flex-col gap-3">
            <li v-for="item in ['Home', 'About us', 'Pricing', 'Blog', 'Blog Details']" :key="item">
              <a href="#" class="text-gray-500 hover:text-[#2bb673] text-sm transition-colors">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Product -->
        <div class="flex flex-col gap-6">
          <h4 class="text-lg font-bold text-[#0f2d21]">Product</h4>
          <ul class="flex flex-col gap-3">
            <li v-for="item in ['Features', 'Careers', 'How it works', 'Contact']" :key="item">
              <a href="#" class="text-gray-500 hover:text-[#2bb673] text-sm transition-colors">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="flex flex-col gap-6">
          <h4 class="text-lg font-bold text-[#0f2d21]">Newsletter</h4>
          <p class="text-gray-500 text-sm leading-relaxed">
            Join thousands of travelers experiencing stress-free trips with
          </p>
          <div class="relative flex items-center max-w-sm">
            <input
              type="email"
              placeholder="Email address"
              class="w-full h-14 pl-6 pr-32 bg-white border border-gray-200 rounded-full text-sm focus:outline-none focus:border-[#2bb673]"
            />
            <button class="absolute right-1 top-1 bottom-1 px-6 bg-[#2bb673] text-white rounded-full text-sm font-bold hover:bg-[#24a365] transition-colors">
              Subscribe →
            </button>
          </div>
        </div>
      </div>

      <!-- Copyright Bar -->
      <div class="mt-20 pt-8 border-t border-gray-100 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-400">
        <p>© 2025 Sproit. All rights reserved.</p>
        <div class="flex items-center gap-8">
          <a href="#" class="hover:text-[#2bb673]">Privacy Policy</a>
          <a href="#" class="hover:text-[#2bb673]">Terms of Service</a>
        </div>
      </div>
    </div>

    <!-- Grassy Bottom Border -->
    <div class="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden">
      <img src="@/assets/svg/footer-base.svg" alt="Grass Pattern" class="w-full h-auto object-cover min-h-[120px]" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Facebook, Instagram, Linkedin, Send } from 'lucide-vue-next';
</script>

<style scoped>
footer {
  font-family: 'Poppins', sans-serif;
}
</style>
