var path    = require('path');
var webpack = require('webpack');
var banner  = require('./src/js/banner');

module.exports = {
  entry: './src/index.js',
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components']
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-ux-password-field.min.js',
    libraryTarget: 'umd',
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

