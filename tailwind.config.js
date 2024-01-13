/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/admin/**/*.component.html",
    "./src/app/pages/admin/**/*.component.css",
    "./src/app/pages/admin/**/*.component.ts",
    "./src/app/components/admin/**/*.component.html",
    "./src/app/components/admin/**/*.component.css",
    "./src/app/components/admin/**/*.component.ts",
    "./src/styles.css",
    "./src/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

