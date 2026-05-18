/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        dark: '#0f0f0f',
      },
      boxShadow: {
        luxury: '0 12px 32px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}

