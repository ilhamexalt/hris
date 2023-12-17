/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./src/assets/bg.png')",
      },
      colors: {
        body: "#232B2B",
        sidebarBg: "#171769",
        bodyBg: "#fff",
        button: "#50B8E7",
      },
    },
  },
  plugins: [],
};
