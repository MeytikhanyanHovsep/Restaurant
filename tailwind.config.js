/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      lg: { max: "1400px" },
      md: { max: "1000px" },
      sm: { max: "750px" },
      xs: { max: "550px" },
    }
  },
  plugins: [],
}
