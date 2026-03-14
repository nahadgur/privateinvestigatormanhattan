/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './data/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#EAEAF0',
          100: '#C8C8D9',
          200: '#9494B8',
          300: '#606090',
          400: '#3D3D66',
          500: '#1A1A2E',
          600: '#161628',
          700: '#111120',
          800: '#0C0C18',
          900: '#080810',
          950: '#040408',
        },
        accent: {
          50:  '#FDEDEC',
          100: '#FADBD8',
          200: '#F5B7B1',
          300: '#F1948A',
          400: '#EC7063',
          500: '#C0392B',
          600: '#A93226',
          700: '#922B21',
          800: '#7B241C',
          900: '#641E16',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
