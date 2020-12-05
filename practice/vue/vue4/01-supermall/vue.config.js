module.exports = {
  // store,router一般都只在main.js被引用,所以可以不用配置
	configureWebpack:{
		resolve:{
			alias:{
				"assets":"@/assets",
				"common":"@/common",
				"components":"@/components",
				"network":"@/network",
				"views":"@/views"
			}
		}
	}
}
