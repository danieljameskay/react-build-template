module.exports = {

	// Tell webpack to start bundling the app at ./src/index.js.
	entry: './src/index.js',

	// Output the app to the dist directory.
	output: {
		path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
	},

	// Emit the source maps so the code can be debugged in the browser.
	devtool: 'source-map',

	// Tell webpack to run the code through Babel
	module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	}
};
