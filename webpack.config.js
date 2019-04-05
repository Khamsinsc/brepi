var path = require('path');

module.exports = {
  /*   entry: './src/index.js', */
  output: {
    /*  path: path.resolve(__dirname, 'dist'),
     filename: 'index_bundle.js', */
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: __dirname + '/dist',
    historyApiFallback: true,
  },
};