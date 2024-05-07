/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: '"Dancing Script", cursive',
        roboto: '"Roboto", sans-serif',
        abee: '"ABeeZee", sans-serif',
      },
      colors: {
        komola: "#EA580C",
        kala: "#0B0B0B",
        lightOrange: "#FAD7C4",
        cardOrange: "#FDEDE8",
        borderOrange: "#FAD0BC",
        cardText: "#71717A",
      },
      maxWidth:{
        container:'1327px'
      }
    },
  },
  plugins: [],
};
