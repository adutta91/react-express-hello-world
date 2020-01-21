const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['actions', 'app', 'components', 'reducers', 'styles', 'node_modules']
  }
};