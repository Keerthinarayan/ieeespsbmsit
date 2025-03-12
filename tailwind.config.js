/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'San Francisco', 'Helvetica Neue', 'sans-serif'],
      },
      colors: {
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          border: '#2E2E2E',
        },
        gold: '#FFD700',
      },
      dropShadow: {
        'glow': '0 0 10px rgba(23, 72, 153, 0.5)',
      },
    },
  },
  plugins: [],
};