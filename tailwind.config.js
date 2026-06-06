/** @type {import('tailwindcss').Config} */
// BCSA design system. Colors map to CSS variables defined in src/index.css so the
// single accent (and any token) can be swapped in ONE place. Treat BCSA like a
// luxury editorial brand: neutral ivory base, charcoal ink, ONE warm accent.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bcsa-bg)", // warm ivory page background
        surface: "var(--bcsa-surface)", // slightly raised panels / cards
        ink: "var(--bcsa-ink)", // primary near-black charcoal text
        muted: "var(--bcsa-muted)", // warm grey secondary text
        hairline: "var(--bcsa-hairline)", // very light warm grey borders
        accent: "var(--bcsa-accent)", // single warm ochre/gold accent
        "accent-soft": "var(--bcsa-accent-soft)", // lighter accent for hover/highlight
      },
      fontFamily: {
        // High-contrast display serif for headings; clean grotesk sans for body/UI.
        display: ['"Playfair Display"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      // Deliberate, generous modular type scale.
      fontSize: {
        "display-xl": ["clamp(3rem, 9vw, 8rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5.5rem)", { lineHeight: "1.0", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.2", letterSpacing: "0.22em" }],
      },
      maxWidth: {
        content: "78rem", // consistent content container width
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        // Calm, expensive-feeling easing used across motion.
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "200% center" },
          "100%": { backgroundPosition: "-200% center" },
        },
      },
      animation: {
        // Subtle gold shimmer reserved for the Cover/Closing BCSA mark.
        shimmer: "shimmer 6s linear infinite",
      },
    },
  },
  plugins: [],
};
