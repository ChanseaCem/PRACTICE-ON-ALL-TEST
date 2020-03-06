const path = require("path");

//可以使用横幅BannerPlugin
const webpack = require("webpack");

//借用index.html作为模板,复制到dist下的index.htmll里
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports ={
	entry:"./src/index.js",
	output:{
		path:path.resolve(__dirname,"../dist"),//在当前目录下拼接一个dist文件夹目录
		filename:"bundle.js"
	},
	module:{
		rules:[{
			test:/\.vue$/,
			use:["vue-loader"]
		},{
			test:/\.vue$/,
			use:["vue-loader"]
		}]
	},
	resolve:{
		alias:{
			"vue$":"vue/dist/vue.esm.js"
		}
	},
	devServer:{
		contentBase:"../dist",
		inline:true
	},
	plugins:[
		new webpack.BannerPlugin(`
	最终解释权归xxx所有
	作者:Chansea Cem
	Date:20200228
		`),
		new htmlWebpackPlugin({
			template:"index.html"
		})
	]
	
}