/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2bb673",
        "primary-soft": "#daf7e6",
        secondary: "#3b8f7a",
        muted: "#6b7a7a",
        border: "#dfe9e3",
        accent: "#f8b430",
        dark: "#0f2d21",
        "dark-soft": "#11432f",
        "light-bg": "#eaf8f0",
        surface: "#ffffff",
        "surface-soft": "#f7fbf8",
      },
      boxShadow: {
        custom: "0 24px 60px rgba(15, 45, 33, 0.08)",
      },
      borderRadius: {
        lg: "24px",
        xl: "32px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
      backdropBlur: {
        md: "14px",
      },
      keyframes: {
        blink: {
          "0%, 80%, 100%": { transform: "scaleY(1)" },
          "85%, 95%": { transform: "scaleY(0.1)" },
        },
        lookAround: {
          "0%, 15%, 80%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-5px, 0)" }, // Left
          "45%": { transform: "translate(5px, 0)" }, // Right
          "65%": { transform: "translate(0, 5px)" }, // Down
        },
        dangle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(8deg)" },
          "50%": { transform: "rotate(-5deg)" },
          "75%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        blink: "blink 4s infinite",
        "look-around": "lookAround 4s infinite",
        dangle: "dangle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
