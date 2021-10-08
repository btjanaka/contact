// Configuration for tailwind.css.
//
// If you came here from config.js, see below for how to add custom colors.
const customWidths = {};
for (let i = 1; i < 60; ++i) {
  customWidths[`${i}/60`] = `${(i / 60) * 100}%`;
}

const gray100 = "#f3f4f7";
const primaryDefault = "#0071eb";
const primaryDark = "#0050a6";

module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.liquid",
    "./src/**/*.md",
    ".eleventy.js", // We generate some markup in the shortcodes listed here.
  ],
  content: ["src/**/*.html", "src/**/*.liquid", "src/**/*.md", "src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: primaryDefault,
              fontWeight: "normal",
              textDecoration: "none",
              "&:hover": {
                color: primaryDark,
                textDecoration: "underline",
              },
            },
            code: {
              backgroundColor: gray100,
              padding: "0.2rem",
              fontWeight: "normal",
              "&::before": {
                content: '"" !important',
              },
              "&::after": {
                content: '"" !important',
              },
            },
            pre: {
              borderRadius: 0,
            },
            h2: {
              fontWeight: 300,
            },
            h3: {
              fontWeight: 300,
            },
            h4: {
              fontWeight: 300,
            },
          },
        },
      },
      //
      // ADD CUSTOM COLORS HERE.
      //
      colors: {
        primary: {
          dark: primaryDark,
          DEFAULT: primaryDefault,
        },
        light: "rgba(0,0,0,0.54)",
        gray: {
          100: gray100,
        },
        twitter: "#2f9bf0",
        linkedin: "#0a66c2",
        scholar: "#4d90fe",
        pyribs: "#7e57c2",
        vgsa: "#ffcc00",
        website: "#e62020",
      },
      width: customWidths,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      display: ["group-hover", "group-focus"],
      fontWeight: ["hover", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
