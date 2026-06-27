/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        cream: "#F7F3EB",
        ink: "#1F1F1F",
        terracotta: "#C97A55",
        midnight: "#071019",
        warm: "#EFE5D6",
      },

      fontFamily: {
        serif: ["Cormorant Garamond"],
        sans: ["Inter"],
      },
    },
  },
  plugins: [],
};
