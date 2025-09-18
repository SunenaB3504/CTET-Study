/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF',
        'primary-dark': '#0056b3',
        secondary: '#6c757d',
        light: '#f8f9fa',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
      },
    },
  },
  plugins: [],
}