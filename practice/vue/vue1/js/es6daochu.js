var name = "小明"
var flag = true;

function sum(num1,num2){
	return num1 + num2 
}

function say(num1,num2){
	console.log("hello,i am xiaoming")
}

if(flag){
	console.log(sum(1,12),name)
}

// 导出方式1
export {
	say,name
}

// 导出方式2
export let height = 1999

// 导出函数/类
export function sum1(num1,num2){
	return num1 + num2 
}

export class Person{
	run(){
		console.log("run")
	}
}

// 导出方式3
// export default 只能有一个,这个导出后,导入的那个就可以自定义命名
// 否则只能用大括号接受导入
// 如要导出height(这代码在导入的js): import {height} from "..."
let address = "福建省"
export default address