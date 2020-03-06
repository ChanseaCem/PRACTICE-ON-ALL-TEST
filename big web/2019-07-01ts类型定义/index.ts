window.onload = function() {
	function test(name: string): string { //：后面就是指定的类型
		return 'hello ' + name
	};
	let str: string = 'worldddddd';
	document.querySelector("#h1").innerHTML = test(str);
	let num: number = 123; //数值
	let flag: boolean = true; //布尔类型
	let str2: string = `hello ${num}`;
	let u: undefined = undefined;
	let nu: null = null;

	//任意值（任意类型） any
	let a: any = 'hello';
	a = 10;
	//变量在声明时未指定类型，默认识别为任意类型
	var a2;
	a2 = '123';
	a2 = 10;

	//联合类型   表示取值可以为多种类型中的一种
	let a3: string | number;
	a3 = 'hello';
	a3 = 10;
	// function test2(name : string|number) {  //：后面就是指定的类型
	//   return name.length;     //返回的必须是联合类型都公有的属性或方法
	// };
	function test2(name: string | number[]) { //：后面就是指定的类型
		return name.length; //返回的必须是联合类型都公有的属性或方法
	};
	test2('[1,2,3]');
	//数组类型定义   [类型+方括号] 来表示数组   最简单的定义方式
	let arr: number[] = [1, 2, 3];
	let arr2: string[] = ['1', '2', 'a'];
	let arr3: any[] = [1, '2', '3', true];
	let arr4: any[] = [arr, arr2, arr3];
	console.log(arr4)

	//对象的类型  -- 接口   它是对行为的抽象   一个规范
	//接口是对象的形状态进行描述
	//首字母大写
	//定义接口
	interface Person {
		name: string; //名字：类型
		age: number;
	}
	let jack: Person = { //定义的对象   约束了jack的形状必须和接口Person一致
		name: 'jack',
		age: 18,
	}
	//定义的变量必须与接口的属性一致   多或少都会报错
	// let tom:Person = {   
	//   name:'tom',
	// }
	// let tom:Person = {   
	//   name:'tom',
	//   age:20,
	//   abc:'123'   
	// }
	//如果不完全匹配一个形状，如何操作？
	//可选属性
	interface Person2 {
		name: string; //必填
		age ? : number; //可选属性   选填
	}
	let tom: Person2 = {
		name: 'tom',
		//abc:123     //仍然不能添加未定义的属性
	}
	//任意属性
	//注意：一旦定义了任意属性  必填和可选属性都必须是它的子属性
	interface Person3 {
		name: string; //必填
		age ? : number; //可选属性   选填
		[propName: string]: any; //任意属性    [propName:string]:any;  [key:key类型]:value类型
	}
	let tom3: Person3 = {
		'name': 'tom',
		'age': 123,
		'sex': '男'
	}

	//函数    TS对于函数的约束
	//函数声明
	// function fun2(x,y) {   //输入与输出都进行类型约束
	//   return x+y;
	// }
	function fun2(x: number, y: string): string { //输入与输出都进行类型约束
		return x + y;
	}
	// function fun2(x:number,y:string) : void {   //void无返回值
	//   if(true){}
	// }
	fun2(100, '1') //1001
	//函数表达式
	// let fun3 = function(x,y){
	//   return x+y;
	// }
	let fun3 = function(x: number, y: string): string {
		return x + y;
	}
	//默认值
	function fun4(x: number, y: string = '10'): string { //输入与输出都进行类型约束
		return x + y;
	}
	console.log(fun4(1, '5'))

	//可选参数
	function fun5(x: number, y ? : string): string { //输入与输出都进行类型约束
		return x + y;
	}

	function fun6(x: number, y ? : string): any { //可选参数后面不允许出现必选参数
		if(y) {
			return x + y;
		} else {
			return x;
		}
	}
	//fun6(2)   //传的参数是可有可无
	fun6(2, '4');

	//类型别名   type
	type s = string;
	let str5: s = 'abc';

	function test5(name: s): s { //：后面就是指定的类型
		return 'hello ' + name
	};
	test5(str5);
	//针对联合类型
	type xx = string | number[];

	function test6(name: xx) { //：后面就是指定的类型
		return name.length; //返回的必须是联合类型都公有的属性或方法
	};
	test6([1, 2, 3])
}