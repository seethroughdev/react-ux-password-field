var path = require('path');

module.exports = {
  // the entry point of your library
  entry: ['webpack/hot/dev-server', './demo/src/index.js'],
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
      { test: /\.css/, loader: "style-loader!css-loader!autoprefixer-loader" },
      { test: /\.scss$/, loader: 'style-loader!css-loader!autoprefixer-loader!sass?outputStyle=expanded' },
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" }
    ]
  }
};

