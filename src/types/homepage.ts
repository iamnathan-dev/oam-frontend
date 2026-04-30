export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  accentBackground: string;
  accentColor: string;
}

export interface InfoCard {
  id: string;
  title: string;
  description: string;
  detail: string;
  background: string;
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface GalleryCard {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
}

export interface HomepageData {
  navItems: NavItem[];
  heroStats: StatItem[];
  featureItems: FeatureItem[];
  infoCards: InfoCard[];
  whyChooseItems: WhyChooseItem[];
  testimonials: Testimonial[];
  teacherProfiles: Teacher[];
  galleryCards: GalleryCard[];
  blogPosts: BlogPost[];
  heroImage: string;
  videoCover: string;
  highlightImage: string;
}
