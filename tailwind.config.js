/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(56, 189, 248, 0.18)',
        violet: '0 0 36px rgba(139, 92, 246, 0.22)',
      },
    },
  },
  plugins: [],
}
