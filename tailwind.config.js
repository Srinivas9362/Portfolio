// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'xl': '0 10px 20px rgba(0, 0, 0, 0.08)',
        '2xl': '0 15px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
