const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
          // plugins: ['@babel/plugin-transform-runtime', '@babel/transform-async-to-generator'],
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    publicPath: '/dist/',
    compress: true,
    port: 9000
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
};