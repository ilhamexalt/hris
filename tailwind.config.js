/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      body: ['"Poppins"', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        login: "url('./src/assets/bg.png')",
      },
      colors: {
        body: "#232B2B", //hitam //font
        sidebarBg: "#171769", //biru //ga dipake
        bodyBg: "#FAFAFA", //putih tulang //background
        rightBg: "#F5F5F7", //putih keabu abuan //background
        button: "#50B8E7",
      },
    },
  },
  plugins: [require("daisyui")],
};
