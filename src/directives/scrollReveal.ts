import type { Directive } from "vue";

interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  distance?: number;
  origin?: "bottom" | "left" | "right" | "top";
  once?: boolean;
  stagger?: number;
}

interface RevealElement extends HTMLElement {
  _scrollRevealObserver?: IntersectionObserver;
}

export const vScrollReveal: Directive<RevealElement, ScrollRevealOptions> = {
  mounted(el, binding) {
    // Default options
    const defaults: Required<ScrollRevealOptions> = {
      threshold: 0.15,
      delay: 0,
      duration: 700,
      distance: 30,
      origin: "bottom",
      once: true,
      stagger: 0,
    };

    const options = { ...defaults, ...binding.value };

    const translateMap = {
      bottom: `translateY(${options.distance}px)`,
      top: `translateY(-${options.distance}px)`,
      left: `translateX(-${options.distance}px)`,
      right: `translateX(${options.distance}px)`,
    };

    const initialTransform = translateMap[options.origin];

    // Set initial hidden state
    el.style.opacity = "0";
    el.style.transition = `opacity ${options.duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${options.duration}ms cubic-bezier(0.16, 1, 0.3, 1)`;
    el.style.transform = initialTransform;

    // Handle staggered children
    if (options.stagger > 0) {
      const children = Array.from(el.children) as HTMLElement[];
      children.forEach((child, i) => {
        child.style.opacity = "0";
        child.style.transform = initialTransform;
        child.style.transition = `opacity ${options.duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${options.delay + i * options.stagger}ms, transform ${options.duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${options.delay + i * options.stagger}ms`;
      });
      // Parent should be visible immediately so children can animate
      el.style.opacity = "1";
      el.style.transform = "none";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (options.stagger > 0) {
                const children = Array.from(el.children) as HTMLElement[];
                children.forEach((child) => {
                  child.style.opacity = "1";
                  child.style.transform = "none";
                });
              } else {
                el.style.opacity = "1";
                el.style.transform = "none";
              }
            }, options.delay);

            if (options.once) {
              observer.unobserve(el);
            }
          } else if (!options.once) {
            if (options.stagger > 0) {
              const children = Array.from(el.children) as HTMLElement[];
              children.forEach((child) => {
                child.style.opacity = "0";
                child.style.transform = initialTransform;
              });
            } else {
              el.style.opacity = "0";
              el.style.transform = initialTransform;
            }
          }
        });
      },
      { threshold: options.threshold },
    );

    observer.observe(el);

    // Store observer for cleanup
    el._scrollRevealObserver = observer;
  },

  unmounted(el) {
    if (el._scrollRevealObserver) {
      el._scrollRevealObserver.disconnect();
      delete el._scrollRevealObserver;
    }
  },
};
