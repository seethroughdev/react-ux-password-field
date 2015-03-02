var path    = require('path');
var webpack = require('webpack');
var banner  = require('./src/js/banner');

module.exports = {
  // the entry point of your library
  entry: './src/index.js',
  // where 3rd-party modules can reside
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  output: {
    // where to put standalone build file
    path: path.join(__dirname, 'lib'),
    // the name of the standalone build file
    filename: 'react-ux-password-field.js',
    // the standalone build should be wrapped in UMD for interop
    libraryTarget: 'umd',
    // the name of your library in global scope
    library: 'react-ux-password-field'
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" }
    ]
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
};

