import HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration } from 'webpack'
import { resolve } from 'path'

const config = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: resolve(__dirname, './dist'),
		filename: 'script.js'
	},
	resolve: {
			extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [{ test: /\.tsx?$/, loader: 'ts-loader' }],
	},
	devServer: {
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './public/index.html' })
	],
}

export default config
