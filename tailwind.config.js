/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: { fontFamily: { sans: ['DM Sans', 'sans-serif'], display: ['Manrope', 'sans-serif'] }, colors: { vital: { 50:'#f0f6f1', 100:'#dcebe0', 500:'#4b8d6c', 700:'#27664c', 900:'#123d30' } }, boxShadow: { soft:'0 18px 55px rgba(27,67,48,.09)' } } },
  plugins: [],
}