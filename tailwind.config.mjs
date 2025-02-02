/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        "noto-sans-jp": ['"Noto Sans JP"', "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(65%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 25s linear infinite",
      },
    },
  },
  plugins: [
    daisyui,  // ✅ Changed `require("daisyui")` to `import daisyui from 'daisyui';`
    plugin(function ({ addUtilities }) { 
      addUtilities({
        ".text-shadow-sm": { textShadow: "1px 1px 2px rgba(0, 0, 0, 0.25)" },
        ".text-shadow": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" },
        ".text-shadow-lg": { textShadow: "3px 3px 6px rgba(0, 0, 0, 0.35)" },
      });
    }),
  ],
};
