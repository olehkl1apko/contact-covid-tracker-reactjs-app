/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "426px",
        medium: "769px",
        large: "1025px",
      },
    },
  },
  plugins: [],
};
