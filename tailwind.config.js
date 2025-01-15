// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        blue: "var(--color-blue)", // Custom Blue (#29d7ff)
        purple: "var(--color-purple)", // Custom Purple (#7083ff)
        pink: "var(--color-pink)", // Custom Pink (#e000ff)
        very_pale_blue: "var(--color-very-pale-blue)", // Custom Very Pale Blue (#f3fbff)
        blue_light: "var(--color-blue-light)", // Light Blue
        turquoise: "var(--color-turquoise)", // Turquoise Blue
        indigo: "var(--color-indigo)", // Indigo
        primary: "var(--primary)", // Primary Gradient or Color
        secondary: "var(--secondary)", // Secondary Gradient or Color
        light_grayish_cyan: "var(--color-light-grayish-cyan)", // Light Grayish Cyan
      },
      backgroundImage: {
        "zuzzuu-gradient":
          "linear-gradient(113deg, #29d7ff 18.07%, #3cbfff 27.42%, #7083ff 46.12%, #c123ff 73.51%, #e000ff 83.53%)",
      },
    },
  },
  plugins: [],
};
