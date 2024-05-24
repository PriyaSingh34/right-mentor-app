/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(233.93deg, rgba(105, 188, 86, 1) 4.91%, rgba(227, 181, 12, 1) 196.89%)',
          'black-gray-gradient': 'linear-gradient(233.93deg, rgba(0, 0, 0, 1) 0%, rgba(117, 117, 117, 1) 100%)',
        
      },
    },
  },
  plugins: [],
}

