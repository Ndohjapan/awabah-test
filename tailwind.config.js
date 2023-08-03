/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      inria: ['"Inria Sans"', "sans-serif", ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {
        awabah: {
          300: '#49B77F40',
          400: "#49B77F66",
          500: "#5bbe8c",
          600: '#49B77F',
        },
        "awabah-gray": {
          400: "#00000026"
        }
      }
    },
  },
  plugins: [],
}