const webpack = require('webpack');

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('dev') }),
  ],
};
