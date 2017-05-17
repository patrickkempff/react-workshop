var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    '01': './oefeningen/01/index.js',
    '02': './oefeningen/02/index.js',
    '03': './oefeningen/03/index.js',
    '04': './oefeningen/04/index.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/build/'
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, include: /oefeningen/, exclude: /node_modules/,  use: {loader: 'babel-loader', options: {cacheDirectory: true} } },
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin('shared')
  ]

};
