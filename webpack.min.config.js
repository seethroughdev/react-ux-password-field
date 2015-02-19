module.exports = {
    target: 'web',
    debug: true,
    devtool: "source-map",
    entry: {
        main: "./src/index"
    },
    output: {
        path: "./lib",
        filename: "react-ux-password-field.min.js"
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
    }
};

