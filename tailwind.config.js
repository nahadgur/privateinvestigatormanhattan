/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Design-system tokens from applied design
        primary: '#B93729',
        ink: '#1A1A1A',
        paper: '#FFFFFF',
        'gray-light': '#F4F4F4',
        'gray-mid': '#E0E0E0',
        'gray-dark': '#666666',

        // Brand scale kept as alias so legacy brand-* classes still resolve.
        brand: {
          50: '#FDF1EF',
          100: '#F9DDD8',
          200: '#F2B9AF',
          300: '#E88F80',
          400: '#DD6350',
          500: '#B93729',
          600: '#B93729',
          700: '#972B20',
          800: '#7F261E',
          900: '#1A1A1A',
        },

        // Kept for legacy accent-* references
        accent: {
          50: '#FDF1EF',
          100: '#F9DDD8',
          200: '#F2B9AF',
          300: '#E88F80',
          400: '#DD6350',
          500: '#CA4837',
          600: '#B93729',
          700: '#972B20',
          800: '#7F261E',
          900: '#6A231C',
        },
      },
      fontFamily: {
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)',
        card: '0 1px 3px rgba(0,0,0,0.05)',
      },
      borderRadius: {
        tile: '4px',
        chip: '2px',
      },
      keyframes: {
        'backdrop-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'backdrop-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.96) translateY(8px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'modal-out': {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.96) translateY(8px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'backdrop-in': 'backdrop-in 250ms ease-out forwards',
        'backdrop-out': 'backdrop-out 250ms ease-in forwards',
        'modal-in': 'modal-in 300ms cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'modal-out': 'modal-out 250ms ease-in forwards',
        'fade-in': 'fade-in 400ms ease-out forwards',
      },
    },
  },
  plugins: [],
};
