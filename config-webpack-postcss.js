const setupPostcss = config => {
  require('react-app-rewire-postcss')(config, {
    plugins: () => {
      let plugins = [
        require('postcss-import'),
        require('postcss-extend'),
        require('tailwindcss'),
        require('autoprefixer')
      ];
      return plugins;
    }
  });
  return config;
};

module.exports = {
  setupPostcss
};
