var path              = require('path');
var autoprefixer      = require('autoprefixer-core');
var csswring          = require('csswring');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // the entry point of your library
  entry: './demo/src/index.js',
  // where 3rd-party modules can reside
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  output: {
    // where to put standalone build file
    path: path.join(__dirname, 'demo'),
    // the name of the standalone build file
    filename: 'demo.bundle.js'
  },
  externals: {
    'react': 'React'
  },
  module: {
    loaders: [
      { test: /\.css/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader?outputStyle=expanded') },
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" }
    ]
  },
  postcss: [autoprefixer({ browsers: ['> 1%'] }), csswring],
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ]
};
