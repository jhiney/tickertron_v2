// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 10px rgba(0, 255, 0, 0.2), 0 0 20px rgba(0, 255, 0, 0.1)',
      },
    },
  },
  plugins: [],
}