var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var loadersByExtension = require("./loadersByExtension");

module.exports = function() {

  var entry = {
    main: "./src/index"
  };

  var loaders = {
    'scss': 'style!css!sass?outputStyle=expanded',
    'css': 'style!css',
    'jsx': 'jsx?harmony',
    'js': 'jsx?harmony',
    'png|jpg|jpeg|gif|svg': 'url?limit=100000'
  };

  var externals = [
    {
      'React': 'react'
    }
  ];

  var modulesDirectories = ["web_modules", "node_modules"];

  var extensions = ['', '.js', '.jsx', '.png', '.svg', '.css', '.scss'];

  var root = path.join(__dirname, "app");

  var output = {
    path: path.join(__dirname, 'lib'),
    filename: 'react-ux-password-field.js',
    sourceMapFilename: '[file].map',
    libraryTarget: 'commonjs2'
  };

  var excludeFromStats = [
    /node_modules[\\\/]react(-router)?[\\\/]/,
    /node_modules[\\\/]items-store[\\\/]/
  ];

  return {
    entry: entry,
    output: output,
    target: "web",
    module: {
      loaders: loadersByExtension(loaders)
    },
    devtool: "source-map",
    debug: 'true',
    resolveLoader: {
      root: path.join(__dirname, "node_modules")
    },
    externals: externals,
    resolve: {
      root: root,
      modulesDirectories: modulesDirectories,
      extensions: extensions
    },
    devServer: {
      stats: {
        exclude: excludeFromStats
      }
    }
  }

};
