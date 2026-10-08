import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

/* ================================================
   All brand colors use CSS variables (RGB channels)
   defined in globals.css. This means bg-stone,
   text-charred, etc. automatically adapt in dark
   mode — NO dark: prefix needed for these colors.
   
   The <alpha-value> placeholder lets Tailwind
   opacity modifiers work: bg-stone/50, text-iron/60.
   ================================================ */

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Brand — auto-adapt via CSS variables */
        flame: {
          DEFAULT: "rgb(var(--color-flame) / <alpha-value>)",
          button:  "rgb(var(--color-flame-button) / <alpha-value>)",
          hover:   "rgb(var(--color-flame-hover) / <alpha-value>)",
          "dark-link": "#E8633F",  /* static: links on dark bg */
        },
        ember:   "rgb(var(--color-ember) / <alpha-value>)",
        charred: "rgb(var(--color-charred) / <alpha-value>)",
        stone:   "rgb(var(--color-stone) / <alpha-value>)",
        cloud:   "rgb(var(--color-cloud) / <alpha-value>)",
        iron:    "rgb(var(--color-iron) / <alpha-value>)",
        slate:   "rgb(var(--color-slate) / <alpha-value>)",
        border:  "rgb(var(--color-border) / <alpha-value>)",
        success: "rgb(var(--color-success) / <alpha-value>)",
        error:   "rgb(var(--color-error) / <alpha-value>)",
        warning: "rgb(var(--color-warning) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
        body: ["var(--font-source-sans)", "'Segoe UI'", "system-ui", "sans-serif"],
        utility: ["var(--font-jetbrains)", "'Courier New'", "monospace"],
      },
      borderRadius: {
        sm: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 12px rgba(0,0,0,0.08)",
        lg: "0 12px 32px rgba(0,0,0,0.10)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;
