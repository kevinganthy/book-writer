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
        }
      }
    ]
  }
};
