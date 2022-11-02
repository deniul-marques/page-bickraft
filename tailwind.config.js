/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      content: {
            'lista': 'url("/public/dist/assets/img/icones/lista.svg")',
          },
    },
  },
  plugins: [],
}
