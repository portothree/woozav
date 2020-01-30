const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const paths = {
	client: path.resolve(__dirname, "./src"),
	build: path.resolve(__dirname, "./dist"),
	static: path.resolve(__dirname, "./public")
};

module.exports = {
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	},
	entry: ["regenerator-runtime/runtime", `${paths.client}/index.js`],
	output: {
		path: paths.build,
		filename: "bundle.js"
	},

	plugins: [
		new webpack.EnvironmentPlugin({
			APP_URL: "http://localhost:3000"
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: `${paths.static}/index.html`
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css",
			chunkFilename: "[id].[hash].css"
		})
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: "css-loader",
						options: { sourceMap: true }
					},
					{
						loader: "sass-loader",
						options: { sourceMap: true }
					}
				]
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
				loader: "file-loader",
				options: {
					name: "[path][name].[ext]",
					context: "src"
				}
			},

			{
				test: /\.(woff(2)?|eot|ttf|otf|)$/,
				loader: "url-loader",
				options: {
					limit: 8192,
					name: "[path][name].[ext]",
					context: "src"
				}
			}
		]
	},

	devServer: {
		historyApiFallback: true,
		port: 3000,
		open: true,
		hot: true
	}
};
