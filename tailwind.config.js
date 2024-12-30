// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zuzzuu: {
          blue: "#29d7ff",
          purple: "#7083ff",
          pink: "#e000ff",
        },
      },
      backgroundImage: {
        "zuzzuu-gradient":
          "linear-gradient(113deg, #29d7ff 18.07%, #3cbfff 27.42%, #7083ff 46.12%, #c123ff 73.51%, #e000ff 83.53%)",
      },
    },
  },
  plugins: [],
};
