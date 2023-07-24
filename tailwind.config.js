/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
        padding:"20px",
        margin: "0 auto",
        center: true
    },
    extend: {
      colors: {
        primary: '#F53838',
        dark: '#0B132A',
        text : '#4F5665'
      }
    },
  },
  plugins: [],
}

