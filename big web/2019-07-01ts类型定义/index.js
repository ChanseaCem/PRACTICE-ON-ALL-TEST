window.onload = function () {
    function test(name) {
        return 'hello ' + name;
    }
    ;
    var str = 'worldddddd';
    document.querySelector("#h1").innerHTML = test(str);
    var num = 123; //数值
    var flag = true; //布尔类型
    var str2 = "hello " + num;
    var u = undefined;
    var nu = null;
    //任意值（任意类型） any
    var a = 'hello';
    a = 10;
    //变量在声明时未指定类型，默认识别为任意类型
    var a2;
    a2 = '123';
    a2 = 10;
    //联合类型   表示取值可以为多种类型中的一种
    var a3;
    a3 = 'hello';
    a3 = 10;
    // function test2(name : string|number) {  //：后面就是指定的类型
    //   return name.length;     //返回的必须是联合类型都公有的属性或方法
    // };
    function test2(name) {
        return name.length; //返回的必须是联合类型都公有的属性或方法
    }
    ;
    test2('[1,2,3]');
    //数组类型定义   [类型+方括号] 来表示数组   最简单的定义方式
    var arr = [1, 2, 3];
    var arr2 = ['1', '2', 'a'];
    var arr3 = [1, '2', '3', true];
    var arr4 = [arr, arr2, arr3];
    console.log(arr4);
    var jack = {
        name: 'jack',
        age: 18
    };
    var tom = {
        name: 'tom'
    };
    var tom3 = {
        'name': 'tom',
        'age': 123,
        'sex': '男'
    };
    //函数    TS对于函数的约束
    //函数声明
    // function fun2(x,y) {   //输入与输出都进行类型约束
    //   return x+y;
    // }
    function fun2(x, y) {
        return x + y;
    }
    // function fun2(x:number,y:string) : void {   //void无返回值
    //   if(true){}
    // }
    fun2(100, '1'); //1001
    //函数表达式
    // let fun3 = function(x,y){
    //   return x+y;
    // }
    var fun3 = function (x, y) {
        return x + y;
    };
    //默认值
    function fun4(x, y) {
        if (y === void 0) { y = '10'; }
        return x + y;
    }
    console.log(fun4(1, '5'));
    //可选参数
    function fun5(x, y) {
        return x + y;
    }
    function fun6(x, y) {
        if (y) {
            return x + y;
        }
        else {
            return x;
        }
    }
    //fun6(2)   //传的参数是可有可无
    fun6(2, '4');
    var str5 = 'abc';
    function test5(name) {
        return 'hello ' + name;
    }
    ;
    test5(str5);
    function test6(name) {
        return name.length; //返回的必须是联合类型都公有的属性或方法
    }
    ;
    test6([1, 2, 3]);
};
