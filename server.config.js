var config = {
    entry: "./source/main.js",
	cache: true,
	debug: true,
	devtool: "inline-source-map",
    resolve: {
        modulesDirectories: ['bower_components', 'node_modules'],
    },
    module: {
        loaders: [
            { test: /\.css/, loader: "style-loader!css-loader" },
	        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
			{ test: /\.js$/, loader: "jsx-loader" },
            { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
            { test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif" },
            { test: /\.jpg/, loader: "file-loader" }
        ]
    }
};

module.exports = config;
