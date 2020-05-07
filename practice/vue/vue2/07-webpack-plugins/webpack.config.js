const path = require("path")
const webpack = require("webpack")

//借用index.html作为模板,复制到dist下的index.htmll,里bundle.js 是保存在内存中 ，优点就是速度快， 那咱们也想让 html 也放到内存中， 就要用到HtmlWebpackPlugin插件
const HtmlWebpackPlugin = require("html-webpack-plugin")

//压缩文件bundle.js(查看这个文件)
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),//在当前目录下拼接一个dist文件夹目录
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.vue$/,
			use: ['vue-loader']
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['es2015']
				}
			}
		}, {
			test: /\.css$/,
			use: [{
					loader: "style-loader"
				},
				{
					loader: "css-loader"
				}
			]
		}]
	},
	resolve: {
		alias: {
			"vue$": "vue/dist/vue.esm.js"
		}
	},
	plugins: [
		new webpack.BannerPlugin("最终解释权归XXX所有"),
		new HtmlWebpackPlugin({
			template: "index.html"
		}),
		// new UglifyjsWebpackPlugin()
	],
	devServer:{
		contentBase:"./dist",//服务的文件夹
		inline:true//是否实时监听
	}
}
