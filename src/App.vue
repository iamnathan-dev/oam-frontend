<template>
  <div id="app">
    <AppHeader :nav-items="homepage.navItems" />

    <main>
      <HeroSection :stats="homepage.heroStats" :image="homepage.heroImage" />
      <AboutSection :video-cover="homepage.videoCover" />
      <ProgramsSection :items="homepage.featureItems" />
      
      <!-- Restored Screenshot Sections -->
      <TestimonialsWrapper :testimonials="homepage.testimonials" />
      <TeachersSection :teachers="homepage.teacherProfiles" />
      <BlogSection :posts="homepage.blogPosts" />
      <EnrollmentCTA />
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { homepageData as homepage } from "@/data/homepage";
import AppHeader from "@/components/AppHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProgramsSection from "@/components/ProgramsSection.vue";
import TestimonialsWrapper from "@/components/TestimonialsWrapper.vue";
import TeachersSection from "@/components/TeachersSection.vue";
import BlogSection from "@/components/BlogSection.vue";
import EnrollmentCTA from "@/components/EnrollmentCTA.vue";
import FooterSection from "@/components/FooterSection.vue";
</script>
