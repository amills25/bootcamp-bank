/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // THIS IS HOW YOU ADD A CUSTOM STYLE INTO YOUR TAILWIND PROJECT
      // https://tailwindcss.com/docs/adding-custom-styles
      colors: {
        bank_green: "#3CB879",
      },
    },
  },
  plugins: [],
};
