/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Custom-cyan":" hsl(180, 66%, 49%)",
        "Custom-dark-violet":"hsl(257, 27%, 26%)",
        "Custom-red":"hsl(0, 87%, 67%)",
        "Custom-gray":"hsl(0, 0%, 75%)",
        "Custom-Grayish-Violet":"hsl(257, 7%, 63%)",
        "Custom-Very-Dark-Blue":"hsl(255, 11%, 22%)",
        "Custom-Very-Dark-Violet":" hsl(260, 8%, 14%)"
      }
    },
  },
  plugins: [],
}