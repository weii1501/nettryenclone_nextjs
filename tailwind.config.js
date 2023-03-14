/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.54)',
        'black-rgba-hover': 'rgba(0, 0, 0, 0.7)',
        'black-rgba-border': 'rgba(0, 0, 0, 0.2)',
        'white-rgba': 'rgba(255, 255, 255, 0.2)',
        'white-rgba-hover': 'rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}