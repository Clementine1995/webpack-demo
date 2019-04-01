const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('precss'),
    require('autoprefixer'),
    postcssPresetEnv({
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
    })
  ]
}