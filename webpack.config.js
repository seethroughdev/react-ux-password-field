var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
  target: "web",
    debug: true,
    devtool: "source-map",
    entry: {
        "react-password-field": "./src/index",
        demo: "./demo/index"
    },
    output: {
        path: "./lib",
        filename: "[name].min.js"
    },
    resolve: {
        modulesDirectories: ['bower_components', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.css/, loader: "style!css" },
            { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded' },
	        { test: /\.js$/, loader: "jsx?harmony" },
            { test: /\.png/, loader: "url?limit=100000&mimetype=image/png" }
        ]
    },
    externals: {
      'react': 'React'
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};

