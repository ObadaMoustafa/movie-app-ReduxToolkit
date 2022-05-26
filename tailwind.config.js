module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },

    extend: {
      colors: {
        primary: "#0f171e",
        secondary: "#1a242f",
        "font-primary": "white",
        "font-secondary": "#79b8f3",
      },
    },
  },
  plugins: [],
};
