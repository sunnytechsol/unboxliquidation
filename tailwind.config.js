/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#FF6B00', // Orange
          light: '#FF8533',
          dark: '#CC5500',
        },
        secondary: {
          DEFAULT: '#00B4D8', // Blue
          light: '#00D1FF',
          dark: '#0098B8',
        },
        accent: {
          DEFAULT: '#111827', // Dark gray/black
          light: '#1F2937',
          dark: '#0A0F1A',
        }
      },
    },
  },
  plugins: [],
}