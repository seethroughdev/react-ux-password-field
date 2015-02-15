var config = {
	target: "web",
  devtool: 'eval',
  // debug: true,
  entry: {
    demo: './demo/index'
  },
  output: {
      path: "./demo",
      filename: "[name].bundle.js"
  },
  resolve: {
      modulesDirectories: ['bower_components', 'node_modules'],
  },
  module: {
      loaders: [
        { test: /\.css/, loader: "style!css" },
        { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded' },
        { test: /\.js$/, loader: 'jsx?harmony', exclude: /node_modules/ },
        { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" }
      ]
  },
  externals: {
    'react': 'React'
  }
};

module.exports = config;
