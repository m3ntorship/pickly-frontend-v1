const { setupPostcss } = require('../config-webpack-postcss');

module.exports = {
  webpackFinal: config => {
    return setupPostcss(config);
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ]
};
