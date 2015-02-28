var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-ux-password-field.js',
    sourceMapFilename: '[file].map',
    library: 'Roni',
    libraryTarget: 'umd'
  },
  externals: {
    'React': 'react'
  },
  module: {
    loaders: [
        { test: /\.css/, loader: ExtractTextPlugin.extract("style", "css") },
        { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass?outputStyle=expanded') },
        { test: /\.js$/, loader: 'jsx?harmony', exclude: /node_modules/ },
        { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" }
      ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};
