/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // ← 这行最重要
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}