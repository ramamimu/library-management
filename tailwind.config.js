module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        sidebar: "350px",
        search: "400px",
      },
      backgroundColor: {
        packed: "#EEF6FF",
        // packed: "#f2f2f2", you can use this color if you like
      },
      colors: {
        primary: "#4F46E5",
      },
      fontFamily: {
        lexend: "'Lexend', sans-serif",
      },
    },
  },
  plugins: [],
};