/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'light' : '0 0 4px 4px rgba(0, 0, 0, 0.05)',
        'dark' : '0 0 4px 4px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}