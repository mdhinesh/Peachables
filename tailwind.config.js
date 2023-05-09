/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      'primary': '#FFF7E7',
      'card': '#F6C598',
      'card-hardness': '#EEEEEE',
      'card-time': '#E4A8A8',
      'quiz': '#EB8944',
      'choice': '#F6C598',
      'white': '#FFFFFF',
      'inputborder': '#D4D4D4',
      'colorcodeone':'#E9A67B',
      'buttoncolor': '#7C4FFB',
      'colorcodetwo':'#F4D1B5',
      'colorcodethree':'#C29576',
      'colorcodefour':'#F1BDAF',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      fontFamily: {
        sans: ['ABeeZee', 'sans-serif'],
      },
    },
    screens: {
      'mobile': '300px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '950px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },

  },
  plugins: [],
}

