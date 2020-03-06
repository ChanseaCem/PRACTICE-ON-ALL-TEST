window.onload = function () {
    function test(name) {
        //：后面就是指定的类型
        return "hello " + name;
    }
    var str = "world";
    test(str);
    //类型不确定
    function test2(name) {
        //：后面就是指定的类型
        return name;
    }
    var str2 = 123;
    test2(345);
    //如果要兼容多种数据格式，用any不能确定返回值类型
    //泛型适用于所有类型，不会有any存在的问题 <T>   T泛型变量  T表示任何类型
    //不预先指定具体的类型   而是在使用的时候再指定类型的一种特性
    function test3(name) {
        //：后面就是指定的类型
        return name;
    }
    test3("345"); //传入类型
    test3(123); //可以定义多个类型
    test3(true); //类型推断  编译器会自动的确定T的类型
    //函数中的具体写法
    //函数表达式
    var fun = function (x) {
        return x;
    };
    fun("123");
    //ES6
    //let fun2 = (v) =>v;
    var fun2 = function (v) { return v; };
    fun2(123);
    function test4(name) {
        //：后面就是指定的类型
        console.log(name.length);
        return name;
    }
    test4(["x", "y", "z"]);
    test4([1, 2, 3]);
    function test5(name) {
        //：后面就是指定的类型
        console.log(name.length);
        return name;
    }
    test5("abc"); //OK
    //test5<number>(123);//error
    test5([1, 2, 3]); //OK
    //  判断传入的值是否在另一个字符串中，如果有返回true,否则返回false;
    function test6(a, b) {
        var i = a.search(b);
        return i == -1;
    }
    test6("abc", "b");
    //多个类型参数
    function test7(a, b) {
        console.log("abc");
    }
    test7(1, 123);
    //枚举 enum 是对JS标准数据类型的一个补充
    var arr = ["q", "w", "e"];
    arr[1];
    var obj = { name: "abc", id: 1 };
    obj.name;
    obj["id"];
    //枚举
    var Color;
    (function (Color) {
        Color[Color["green"] = 0] = "green";
        Color[Color["red"] = 1] = "red";
        Color[Color["orange"] = 2] = "orange";
    })(Color || (Color = {}));
    //enum Color {green,red,orange};
    var a1 = Color.red; //1    索引从0开始
    var a2 = Color[2]; //orange
    console.log(a1);
    console.log(a2);
    //索引手动赋值
    var Color2;
    (function (Color2) {
        Color2[Color2["green"] = 5] = "green";
        Color2[Color2["red"] = 6] = "red";
        Color2[Color2["orange"] = 7] = "orange";
    })(Color2 || (Color2 = {}));
    var a3 = Color2.red; //6   索引从5开始
    var a4 = Color2[7]; //orange
    console.log(a3);
    console.log(a4);
    var Color3;
    (function (Color3) {
        Color3[Color3["green"] = 5] = "green";
        Color3[Color3["red"] = 2] = "red";
        Color3[Color3["orange"] = 10] = "orange";
    })(Color3 || (Color3 = {}));
    var a5 = Color3.red; //2
    var a6 = Color3[10]; //orange
    console.log(a5);
    console.log(a6);
    //任意值  枚举项有二种类型  常数项和计算所得项
    var xyz = "xyz";
    var Color4;
    (function (Color4) {
        Color4[Color4["green"] = 5] = "green";
        Color4[Color4["red"] = xyz.length] = "red";
        Color4[Color4["orange"] = "o"] = "orange";
    })(Color4 || (Color4 = {}));
    var a7 = Color4.orange; //o
    console.log(a7);
    //元组
    //数组
    var arr10 = [1, 2, 3];
    //数组泛型
    var arr11 = ["a", "b"];
    //任意值
    var arr12 = ["a", 1, 2, true, null];
    //数组 是合并了相同类型的对象   元组 是合并了不同类型的对象
    var w = ["x", 10];
    function testt(name) {
        console.log(name);
        return name;
    }
    testt("asdf");
    testt(1111222333);
};
