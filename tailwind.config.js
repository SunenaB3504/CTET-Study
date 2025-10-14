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
        // Professional blue shades for educators
        primary: '#2563eb', // Blue-600
        'primary-dark': '#1e40af', // Blue-700
        'primary-light': '#3b82f6', // Blue-500
        'primary-lighter': '#60a5fa', // Blue-400
        
        // Gray scale for professional look
        secondary: '#64748b', // Slate-500
        'secondary-dark': '#475569', // Slate-600
        'secondary-light': '#94a3b8', // Slate-400
        
        // Backgrounds
        light: '#f8fafc', // Slate-50
        'bg-primary': '#f1f5f9', // Slate-100
        'bg-secondary': '#e2e8f0', // Slate-200
        
        // Accents
        success: '#10b981', // Emerald-500
        danger: '#ef4444', // Red-500
        warning: '#f59e0b', // Amber-500
        info: '#0ea5e9', // Sky-500
        
        // Text colors
        'text-primary': '#0f172a', // Slate-900
        'text-secondary': '#475569', // Slate-600
        'text-muted': '#94a3b8', // Slate-400
      },
    },
  },
  plugins: [],
}