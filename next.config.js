const path = require("path");
const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass')
module.exports = withSass({
  cssModules: true
});
module.exports = withTypescript();
module.exports = {
    future: {
      webpack5: true,
    },
};

module.exports = {

  webpack: function (config) {

    config.resolve.alias = {
      '@src': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
    };

    return config;
  }
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}