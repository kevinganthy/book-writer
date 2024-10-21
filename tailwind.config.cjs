const { default: daisyui } = require('daisyui');

module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        custom: {
          ...require("daisyui/src/theming/themes")["sunset"],
          "--rounded-box": ".5rem",
          "base-100": "#42423F",
          "primary": "#0DC9B3",
          "accent": "#9cc485",
          "neutral": "#f3f2e2",
          "base-content": "#E0E0E0",
        }
      }
    ]
  }
};
