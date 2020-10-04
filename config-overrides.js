const { setupPostcss } = require('./config-webpack-postcss');
module.exports = {
  webpack: config => {
    return setupPostcss(config);
  }
};
