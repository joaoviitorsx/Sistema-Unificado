/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C2185B",
        background: "#FAFBFC",
        surface: "#FFFFFF",
        textPrimary: "#333333",
        textSecondary: "#777777",
      },
    },
  },
  plugins: [],
};
