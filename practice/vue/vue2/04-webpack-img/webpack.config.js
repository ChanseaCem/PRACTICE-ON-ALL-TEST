const path = require("path");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
		publicPath: "dist/"//静态资源路径前面加上publicPath的值
	},
	module: {
		rules: [{
				test: /\.css$/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					}
				]
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader" // 将 JS 字符串生成为 style 节点
				}, {
					loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
				}, {
					loader: "sass-loader" // 将 Sass 编译成 CSS
				}]
			},
			{
				test: /\.(png|jpg|gif|jpeg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						// 大于limit的话要安装file-loader
						// 小于limit的话它会自动编译成base64并作为图片的路径
						limit: 8192,
						// 大于limit的图片会被编译到dist文件夹下,所以这里表示在dist下创建一个img文件夹,后面是图片的自定义名字
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			}
		]
	}
}
