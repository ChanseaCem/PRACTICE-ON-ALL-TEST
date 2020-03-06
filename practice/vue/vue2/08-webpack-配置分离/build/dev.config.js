const baseconfig = require("./base.config.js")
const webpackMerge = require("webpack-merge")

module.exports =webpackMerge(baseconfig,{
	devServer:{
		contentBase:"../dist",
		inline:true
	}
	
})