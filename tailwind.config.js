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
    keyframes: {
      'rotate' : {
        '0%' : { transform: 'rotate(0deg)' },
        '25%' : { transform: 'rotate(30deg)' },
        '50%' : { transform: 'rotate(0deg)' },
        '75%' : { transform: 'rotate(-30deg)' },
        '100%' : { transform: 'rotate(0deg)' },
      },
    },
    animation: {
      'rotate' : 'rotate 1s linear infinite',
    }
  },
  plugins: [],
}