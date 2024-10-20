const { default: daisyui } = require('daisyui');

module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["sunset"]
  }
};
