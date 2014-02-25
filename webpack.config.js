var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");

module.exports = {
    target: "web",
    debug: true,
    devtool: "source-map",
    entry: {
        main: "./source/main"
    },
    output: {
        path: "./lib",
        filename: "[name].bundle.js"
    },
    resolve: {
        modulesDirectories: ['bower_components', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.css/, loader: "style-loader!css-loader" },
	        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
			{ test: /\.js$/, loader: "jsx-loader" }
        ]
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};

