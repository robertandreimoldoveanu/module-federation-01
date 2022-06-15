const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

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
		port: 3001,
	},
	resolve: {
		alias: {
			'myToken': path.resolve(__dirname, 'src/token'),
		},
	},
	output: {
		publicPath: 'auto',
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'app1',
			remotes: {
				app2: 'app2@http://localhost:3002/remoteEntry.js',
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
