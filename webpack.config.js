const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react'],
        },
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/dist/',
    compress: true,
    port: 9000,
    proxy: {
      '/messages': 'http://localhost:3000',
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
};