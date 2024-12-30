// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "zuzzuu-purple": "#6c21b0",
        "zuzzuu-turquoise": "#2ad8ff",
      },
      gradientColorStops: {
        "zuzzuu-gradient": [
          "#29d7ff",
          "#3cbfff",
          "#7083ff",
          "#c123ff",
          "#e000ff",
        ],
      },
    },
  },
  plugins: [],
};
