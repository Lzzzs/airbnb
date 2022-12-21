const path = require('path');
const cracoLessPlugin = require('craco-less');

const resolve = (pathname) => path.resolve(__dirname, pathname);

module.exports = {
  plugins: [
    {
      plugin: cracoLessPlugin,
    },
  ],
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
    },
  },
};
