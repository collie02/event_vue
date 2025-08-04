/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cos-blue': '#1976D2',
        'cos-green': '#4CAF50',
        'cos-amber': '#FFC107',
        'cos-grey-bg': '#F5F5F5',
        'cos-grey-light': '#EEE',
        'cos-grey-card': '#F6F6F6',
      }
    }
  },
  plugins: []
}
