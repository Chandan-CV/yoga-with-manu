/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        "dark-purple":"#7954A1",
        "light-purple":"#C55FFC",
        "ultra-light-purple":"#EFDCF9",
        "dark-green":"#323E42",
        
      },
      fontFamily:{
        "nunito": ["Nunito" , "sans-serif"],
      }
    }
  },
  plugins: []
};