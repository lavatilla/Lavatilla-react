/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0056b3',
        'primary-dark': '#004494',
        accent: '#ff9900',
        'accent-dark': '#cc7a00',
        'text-dark': '#1a1a1a',
        'text-light': '#555',
        'bg-light': '#f4f7f6',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
