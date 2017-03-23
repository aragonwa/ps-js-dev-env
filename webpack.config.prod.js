import path from 'path';
import webpack from 'webpack';

export default {
  debug: true, //enables debugging info
  devtool: 'source-map',
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index') //entry point of app
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'), //short for distribution
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Eliminate duplicate pkgs when generating bundle
    new webpack.optimize.UglifyJsPlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
