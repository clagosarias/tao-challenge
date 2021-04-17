const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
mode: 'development',
  entry: [
    'core-js/stable',
    '@webcomponents/webcomponentsjs',
    './public/scripts/app.js',
    './public/scripts/components/user-element/user-element.js',
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname + '/public', 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
        exclude: /node_modules/
      }
    ]
  }
};