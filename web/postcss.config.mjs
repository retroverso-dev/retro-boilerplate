export default {
  plugins: {
    "postcss-preset-env": {
      stage: 1,
      // explizit auf deinen alten Browser zielen
      browsers: "Chrome 103",
      features: {
        // neue rgb()/hsl() Syntax + alpha → rgba() etc.
        "color-functional-notation": true,
        // oklab/oklch → sRGB-Fallbacks
        "oklab-function": true,
      },
      // optional: preserve: true, dann bleibt das moderne CSS zusätzlich stehen
      preserve: true,
    },
    "@csstools/postcss-oklab-function": {
      preserve: true, // oklch bleibt stehen, Fallback wird davor gesetzt
    },
  },
};
