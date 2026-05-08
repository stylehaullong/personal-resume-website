import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#050507",
          900: "#0A0A0F",
          800: "#101019",
          700: "#1A1A26",
          600: "#262635",
          500: "#3F3F4F",
          400: "#6B6B80",
          300: "#9696AA",
          200: "#C8C8D6",
          100: "#E8E8EE",
          50: "#F5F5F8",
        },
        accent: {
          DEFAULT: "#5B8CFF",
          bright: "#7BA3FF",
          deep: "#2D5BE3",
        },
        iris: "#A78BFA",
        mint: "#5EEAD4",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-grotesk)", "ui-sans-serif", "system-ui"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 11vw, 10rem)", { lineHeight: "0.92", letterSpacing: "-0.045em", fontWeight: "600" }],
        "display-lg": ["clamp(2.75rem, 7vw, 6rem)", { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "500" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "iris-mesh":
          "radial-gradient(60% 80% at 20% 10%, rgba(91,140,255,0.18) 0%, transparent 60%), radial-gradient(50% 70% at 90% 20%, rgba(167,139,250,0.16) 0%, transparent 60%), radial-gradient(70% 60% at 50% 100%, rgba(94,234,212,0.10) 0%, transparent 60%)",
      },
      boxShadow: {
        glass: "inset 0 1px 0 0 rgba(255,255,255,0.08), 0 1px 0 0 rgba(255,255,255,0.04), 0 30px 60px -20px rgba(0,0,0,0.6)",
        "glass-sm": "inset 0 1px 0 0 rgba(255,255,255,0.06), 0 10px 30px -12px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(91,140,255,0.4), 0 10px 40px -10px rgba(91,140,255,0.5)",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "shine": "shine 2.5s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shine: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
