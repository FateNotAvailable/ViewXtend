const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    filename: 'ViewXtend.user.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader', // You can use Babel for transpilation
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
    ]
  },
};