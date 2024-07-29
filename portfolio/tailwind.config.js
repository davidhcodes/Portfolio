/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      colors: {
        "react-native-blue": "#61dafb",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
