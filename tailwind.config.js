/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          50: '#f5f3ff',
        },
        indigo: {
          100: '#e0e7ff',
          800: '#3730a3',
          900: '#312e81',
        },
      },
    },
  },
  plugins: [],
}