const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    host: 'bizcenter.tiplocal.studio',
    port: 9001,
    https: {
        key: '../tiptip-sso-poc/tiplocal.studio+1-key.pem',
        cert: '../tiptip-sso-poc/tiplocal.studio+1.pem'
    },
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true
  },
};