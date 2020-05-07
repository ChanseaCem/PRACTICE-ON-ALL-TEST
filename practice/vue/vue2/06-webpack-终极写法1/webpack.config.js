const path = require("path")
const webpack = require("webpack")

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "dist/"
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		},
		{
			test: /\.vue$/,
			use: ['vue-loader']
		}]
	},
	resolve: {
		//这个是用来在引用时候省略后缀名称
		extensions: [".js", ".css", ".vue"],
		// VUE构建的时候会生成两个版本,runtime-only和rumtime-compiler
		// only:代码不可以有任何的template
		// compiler:代码可以有任何的template,因为compiler可以编译template
		alias: {
			"vue$":"vue/dist/vue.esm.js"//这个包括runtime-compiler
		}
	},
	plugins:[
		new webpack.BannerPlugin("最终版权归XXX所有")
	]
}
