import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        lg: "1200px",
      },
    },
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        text: "var(--text)",
        background: "var(--bg)",
        foreground: "var(--text)",
        border: "var(--border)",
        input: "var(--border)",
        ring: "var(--primary)",
        muted: {
          DEFAULT: "var(--surface)",
          foreground: "var(--muted-text)",
        },
        card: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text)",
        },
        popover: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--bg)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--bg)",
        },
        secondary: {
          DEFAULT: "var(--surface)",
          foreground: "var(--text)",
        },
        destructive: {
          DEFAULT: "#f87171",
          foreground: "var(--bg)",
        },
      },
      textColor: {
        muted: "var(--muted-text)",
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      borderRadius: {
        lg: "var(--radius-card)",
        md: "calc(var(--radius-card) - 4px)",
        sm: "calc(var(--radius-card) - 8px)",
        card: "var(--radius-card)",
        button: "var(--radius-button)",
        pill: "var(--radius-pill)",
      },
      transitionTimingFunction: {
        fluid: "var(--ease)",
      },
      transitionDuration: {
        enter: "var(--dur-enter)",
        hover: "var(--dur-hover)",
        complex: "var(--dur-complex)",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;

export default config;
