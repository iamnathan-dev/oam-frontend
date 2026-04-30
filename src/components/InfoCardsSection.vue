<template>
  <section class="pb-20" id="why">
    <div class="max-w-380 mx-auto p-[50px] px-[100px] rounded-xl bg-gray-50">
      <!-- Header -->
      <div class="flex-col flex items-center justify-center">
        <h2 class="text-5xl md:text-5xl text-center font-bold text-[#0f2d21] leading-tight">
          A free flowing child that is not spoon <br />
          fed is a boon to society
        </h2>
        <div class="mt-5">
          <WavySeparator />
        </div>
      </div>

      <!-- Bento Grid -->
      <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Left Column -->
        <div class="flex flex-col gap-4">
          <InfoBox v-bind="learningGroups.infant" />
          <InfoBox v-bind="learningGroups.toddler" />
        </div>

        <!-- Right Column -->
        <div class="flex flex-col gap-4">
          <InfoBox v-bind="learningGroups.childrenHouse" />

          <!-- Sub-grid (Elementary) -->
          <div class="grid grid-cols-2 gap-4">
            <InfoBox v-bind="learningGroups.lowerElem" />
            <InfoBox v-bind="learningGroups.upperElem" />
          </div>

          <InfoBox v-bind="learningGroups.afterSchool" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h, defineComponent } from 'vue';
import { 
  Baby, 
  Footprints, 
  Home, 
  BookOpen, 
  GraduationCap, 
  Clock 
} from "lucide-vue-next";
import WavySeparator from "./WavySeparator.vue";

// Reusable InfoBox Component (DRY)
const InfoBox = defineComponent({
  props: {
    title: String,
    description: String,
    bg: String,
    height: String,
    isDelicious: Boolean,
    icon: Object,
    isVertical: Boolean,
    href: { type: String, default: '#' },
  },
  setup(props) {
    return () => h(
      'a',
      {
        href: props.href,
        class: [
          props.bg,
          props.height || 'min-h-[300px]',
          'rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden group transition-all duration-500 ease-out cursor-pointer',
          'hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.08)]'
        ]
      },
      [
        // Decorative Blobs (Background) - Solid but soft shapes with slow floating animation
        h('div', { class: 'absolute top-[-10%] right-[-10%] w-48 h-48 bg-white/30 rounded-full transition-transform duration-1000 group-hover:scale-110 group-hover:-translate-x-4 animate-float-1' }),
        h('div', { class: 'absolute bottom-[10%] left-[-15%] w-56 h-56 bg-white/20 rounded-full transition-transform duration-1000 group-hover:scale-125 group-hover:translate-x-6 animate-float-2' }),
        h('div', { class: 'absolute top-[20%] left-[40%] w-24 h-24 bg-white/10 rounded-full transition-transform duration-1000 group-hover:scale-150 animate-float-3' }),
        h('div', { class: 'absolute bottom-[-10%] right-[20%] w-32 h-32 bg-white/15 rounded-full transition-transform duration-1000 group-hover:-translate-y-8 animate-float-4' }),
        
        // Subtle Pattern Overlay
        h('div', { class: 'absolute inset-0 opacity-[0.05] pointer-events-none' }, [
          h('svg', { width: '100%', height: '100%', xmlns: 'http://www.w3.org/2000/svg' }, [
            h('pattern', { id: 'dots', x: '0', y: '0', width: '20', height: '20', patternUnits: 'userSpaceOnUse' }, [
              h('circle', { cx: '2', cy: '2', r: '1', fill: 'white' })
            ]),
            h('rect', { width: '100%', height: '100%', fill: 'url(#dots)' })
          ])
        ]),

        // Content Container
        h('div', { class: 'relative z-10 transition-transform duration-500 group-hover:translate-x-1' }, [
          h('div', { class: 'mb-4 inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest' }, 'Learning Group'),
          
          h('div', { 
            class: [
              'flex mb-6 gap-4',
              props.isVertical ? 'flex-col items-start' : 'flex-row items-center'
            ] 
          }, [
            props.icon ? h(props.icon as any, { 
              class: 'w-12 h-12 text-white transition-transform group-hover:scale-110 duration-500',
              strokeWidth: 1.5
            }) : null,
            h('h3', { 
              class: [
                'text-white leading-tight',
                props.isDelicious ? 'font-delicious text-5xl uppercase text-shadow-hard' : 'text-3xl font-bold'
              ]
            }, props.title)
          ]),
          
          h('p', { 
            class: 'text-lg text-white/90 leading-relaxed transition-all duration-500 group-hover:text-white max-w-sm'
          }, props.description)
        ])
      ]
    );
  }
});

// Learning Groups Data
const learningGroups = {
  infant: {
    title: "Infant Community",
    description: "Starting from age 2 - 12 months",
    bg: "bg-[#92D4F5]",
    height: "h-[620px]",
    isDelicious: true,
    icon: Baby
  },
  toddler: {
    title: "Toddler Community",
    description: "Starting from age 12 - 36 months",
    bg: "bg-[#6a30c5]",
    icon: Footprints
  },
  childrenHouse: {
    title: "Children House",
    description: "Nursery 1 and 2",
    bg: "bg-[#e91e63]",
    icon: Home
  },
  afterSchool: {
    title: "After School Care",
    description: "1 - 10 years old",
    bg: "bg-[#ff6b35]",
    icon: Clock
  },
  lowerElem: {
    title: "Lower Elementary",
    description: "Grade 1 - 3",
    bg: "bg-[#ffc107]",
    icon: BookOpen,
    isVertical: true
  },
  upperElem: {
    title: "Upper Elementary",
    description: "Grade 4 - 6",
    bg: "bg-[#4caf50]",
    icon: GraduationCap,
    isVertical: true
  }
};
</script>

<style>
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(15px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
}

.animate-float-1 { animation: float 12s ease-in-out infinite; }
.animate-float-2 { animation: float 18s ease-in-out infinite; animation-delay: -2s; }
.animate-float-3 { animation: float 15s ease-in-out infinite; animation-delay: -5s; }
.animate-float-4 { animation: float 22s ease-in-out infinite; animation-delay: -8s; }
</style>
