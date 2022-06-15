const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
	mode: 'development',
	entry: {
		main: './src/index',
		token: './src/token',
	},
	target: 'web',
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 3002,
	},
	output: {
		publicPath: 'auto',
	},
	resolve: {
		alias: {
			'myToken': path.resolve(__dirname, 'src/token'),
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'app2',
			library: { type: 'var', name: 'app2' },
			filename: 'remoteEntry.js',
			exposes: {
				'./remoteOne': './src/index',
			},
			shared: {
				token: {
					singleton: true,
					eager: true,
				}
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
