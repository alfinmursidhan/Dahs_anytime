/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#39644a',
        secondary: '#F3F3F3',
        accent: '#E8B87D',
        'text-primary': '#39644a',
        'text-secondary': '#F3F3F3'
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-the-seasons)', 'serif'],
        'the-seasons': ['var(--font-the-seasons)', 'serif'],
        'yeseva': ['var(--font-yeseva-one)', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      addUtilities(newUtilities);
    }
  ],
} 