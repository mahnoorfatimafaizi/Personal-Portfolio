import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customTurquoise: '#06d6a0', 
        customPastelPurple: '#eccaff',
        customEarthyOrange: '#e76f51', 
        customAmber: '#d4a373',
        customWhite: '#ffffff',
        customLightCream: '#faedcd',

      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #4d194d, #3e1f47, #312244, #272640, #212f45, #1b3a4b, #144552, #0b525b, #065a60, #006466)',
      },
      animation: {
        squeeze: 'squeeze s 4ease-in-out infinite',
        'fade-in-up': 'fade-in-up 4s ease-out',
      },
      keyframes: {
        squeeze: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.95)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;


