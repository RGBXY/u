/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green_prim: "#18C8BA",
        green_second: "#0C625B",
        slate_prim: "#D4D4D4",
        bg_prim: "#E8EFE7",
      },
      fontFamily: {
        amita: "Amita",
        cookie: "Cookie",
        script: "Dancing Script",
        kurale: "Kurale",
        lexend: "Lexend",
        quin: "Quintessential",
      },
    },
  },
  plugins: [],
};
