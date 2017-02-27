const HtmlPlugin = require('html-webpack-plugin')

module.exports = {

	// Tell webpack to start bundling the app at app/index.js.
	entry: './app',

	// Output the app to the dist directory.
	output: {
		filename: 'app.js',
		path: 'dist',
	},

	// Emit the source maps so the code can be debugged in the browser.
	devtool: 'source-map',

	// Tell webpack to run the code through Babel
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},

	plugins: [
		new HtmlPlugin({
			template: 'app/index.html'
		})
	]
}