 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'overcame': ['OvercameDemo', 'sans-serif'],
      },
    },
  },
  plugins: [],
  "include": ["src/custom.d.ts"]
}