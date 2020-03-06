import {say,name as rname ,height,sum1,Person} from './es6daochu.js'

// 导入所有东西
import * as aaa from './es6daochu.js'
console.log(aaa)

var name = "小红"
var flag = false;

function sum(num1,num2){
	return num1 + num2 
}
if(flag){
	console.log(sum(1,12),name)
}
say()
console.log(rname,height)
console.log(sum1(4,5))
var p = new Person()
p.run()

// 导入default默认的那个
import addr from './es6daochu.js'
console.log(addr)
