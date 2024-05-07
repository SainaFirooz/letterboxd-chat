/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        letterboxd: "#2C3440",
        footerLink: "#99AAAF",
        headerColor: "#1e242b",
        form: "#14181C",
        hoverColor: "#fff",
        mainBG: "#1e242b",
      },
    },
  },
  plugins: [require("daisyui")],
};
