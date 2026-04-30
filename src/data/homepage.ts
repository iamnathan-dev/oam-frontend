import type {
  BlogPost,
  FeatureItem,
  GalleryCard,
  HomepageData,
  InfoCard,
  NavItem,
  StatItem,
  Teacher,
  Testimonial,
  WhyChooseItem,
} from "@/types/homepage";

const assetA =
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80";
const assetB =
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80";
const assetC =
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80";

export const navItems: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about-us" },
  { id: "blogs", label: "Blogs", href: "/blogs" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export const heroStats: StatItem[] = [
  { id: "students", value: "500+", label: "Happy Students" },
  { id: "courses", value: "25+", label: "Learning Programs" },
  { id: "teachers", value: "450+", label: "Expert Teachers" },
];

export const featureItems: FeatureItem[] = [
  {
    id: "confidence",
    title: "Building Confidence",
    description:
      "Creative lessons help every child gain courage, curiosity, and a growth mindset.",
    icon: "🌟",
    accentBackground: "#edf4ff",
    accentColor: "#2d54e6",
  },
  {
    id: "creative",
    title: "Creative Exploration",
    description:
      "Hands-on play, storytelling, and art unlock new ways to explore ideas together.",
    icon: "🎨",
    accentBackground: "#fff5ed",
    accentColor: "#d97a2c",
  },
  {
    id: "sports",
    title: "Sports Activities",
    description:
      "Movement-rich schedules make fitness fun while growing teamwork and focus.",
    icon: "⚽",
    accentBackground: "#edf9f2",
    accentColor: "#14926a",
  },
  {
    id: "interactive",
    title: "Interactive Learning",
    description:
      "A balanced mix of reading, science, and play turns lessons into adventures.",
    icon: "🧩",
    accentBackground: "#f6fbf1",
    accentColor: "#4b8e53",
  },
];

export const infoCards: InfoCard[] = [
  {
    id: "easy-flow",
    title: "A free flowing child is not spoon fed to society",
    description:
      "We cultivate confidence by encouraging children to ask questions and discover answers on their own schedule.",
    detail: "Explore a modern curriculum that respects every learner’s pace.",
    background: "linear-gradient(135deg, #e9f8f2 0%, #ffffff 100%)",
  },
  {
    id: "creative-ways",
    title: "Creative ways of study",
    description:
      "Our classrooms are designed for imagination, safe exploration, and joyful discovery.",
    detail: "From story time to science labs, every activity is purposeful.",
    background: "linear-gradient(135deg, #fff5ef 0%, #ffffff 100%)",
  },
  {
    id: "future-ready",
    title: "Inspiring young minds for a brighter future",
    description:
      "Students practice critical thinking, collaboration, and communication every day.",
    detail: "Real-world projects help learners build skills that matter.",
    background: "linear-gradient(135deg, #e9f2ff 0%, #ffffff 100%)",
  },
  {
    id: "confidence",
    title: "Education that builds confidence",
    description:
      "We focus on self-belief, kindness, and positive progress to build lifelong confidence.",
    detail: "Teachers become coaches who support goals, not just grades.",
    background: "linear-gradient(135deg, #f3f1ff 0%, #ffffff 100%)",
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "skills",
    title: "Self-paced methodology",
    description:
      "Children learn at a pace that works for their temperament, not a clock. We encourage exploration and mastery of concepts without the pressure of rigid timelines, allowing true understanding to flourish.",
    icon: "🪄",
  },
  {
    id: "nature",
    title: "Safe classroom environments",
    description:
      "Bright, welcoming spaces help kids feel calm, focused, and confident. Our thoughtfully designed classrooms integrate natural light and flexible seating to support diverse learning styles and foster a sense of belonging.",
    icon: "🏡",
  },
  {
    id: "support",
    title: "Expert care and coaching",
    description:
      "Each child is supported by teachers trained in social-emotional learning. We prioritize emotional intelligence alongside academics, ensuring every student receives personalized guidance to reach their full potential.",
    icon: "💡",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "review-1",
    quote:
      "“My child has become more confident and active since joining this school. The teachers genuinely care about each student.”",
    author: "Courtney Dean",
    role: "Parent",
  },
];

export const teacherProfiles: Teacher[] = [
  {
    id: "teacher-1",
    name: "Michael Bloomberg",
    role: "Classroom Instructor",
    avatar: assetA,
  },
  {
    id: "teacher-2",
    name: "Sonalini Shaw",
    role: "Art Specialist",
    avatar: assetB,
  },
  {
    id: "teacher-3",
    name: "Caroline Martin",
    role: "Sports Mentor",
    avatar: assetC,
  },
  {
    id: "teacher-4",
    name: "Brandon Price",
    role: "Reading Coach",
    avatar: assetA,
  },
  {
    id: "teacher-5",
    name: "Emma Wallace",
    role: "Music Teacher",
    avatar: assetB,
  },
  {
    id: "teacher-6",
    name: "James Cooper",
    role: "STEAM Mentor",
    avatar: assetC,
  },
];

export const galleryCards: GalleryCard[] = [
  {
    id: "gallery-1",
    title: "A learning environment built for joy",
    description:
      "Colorful classrooms and playful spaces make growth easy and fun.",
    imageUrl: assetA,
  },
  {
    id: "gallery-2",
    title: "Student-led discovery activities",
    description:
      "Children take the lead while teachers guide each moment with care.",
    imageUrl: assetB,
  },
  {
    id: "gallery-3",
    title: "Supportive growth in every class",
    description: "Our team helps each child thrive socially and academically.",
    imageUrl: assetC,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    title: "Helping kids build healthy reading habits at home",
    imageUrl: assetA,
    link: "#",
  },
  {
    id: "post-2",
    title: "Why play-based learning shapes early curiosity",
    imageUrl: assetB,
    link: "#",
  },
  {
    id: "post-3",
    title: "Five ways to nurture creativity in young children",
    imageUrl: assetC,
    link: "#",
  },
  {
    id: "post-4",
    title: "Building emotional confidence through small daily rituals",
    imageUrl: assetA,
    link: "#",
  },
];

export const homepageData: HomepageData = {
  navItems,
  heroStats,
  featureItems,
  infoCards,
  whyChooseItems,
  testimonials,
  teacherProfiles,
  galleryCards,
  blogPosts,
  heroImage: assetB,
  videoCover: assetC,
  highlightImage: assetA,
};
