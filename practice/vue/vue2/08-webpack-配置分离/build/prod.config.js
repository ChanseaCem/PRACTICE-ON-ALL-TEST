//压缩文件bundle.js(查看这个文件)
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin")

const baseconfig = require("./base.config.js")
const webpackMerge = require("webpack-merge")

module.exports = webpackMerge(baseconfig,{
	// plugins:[
	// 	new UglifyjsWebpackPlugin()
	// ]
})