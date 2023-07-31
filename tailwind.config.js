/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindScrollbar from 'tailwind-scrollbar'
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [daisyui, tailwindScrollbar],
  theme: {
    extend: {}
  }
}
