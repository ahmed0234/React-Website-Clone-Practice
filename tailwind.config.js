/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '475px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 1024px) { ... }

      'md': '768px',
      // => @media (min-width: 1280px) { ... }
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

