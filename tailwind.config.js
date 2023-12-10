/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {    colors: {
      'primary': {
        "100": "#7E9BF2",
        "200": "#6387F2"
      },
      'secondary': {
        '100': '#4F46E5',
        '200': '##262DA6'
      },
      'danger': '#F55B7D',
      'alert': '#F5A559',
      "neutral": {
        "100": "#252837",
        "200": "#1E202C",
        "300": "#16161D"
      },
    },},
  },
  plugins: [],
}

