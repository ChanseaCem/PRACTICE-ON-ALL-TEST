window.onload = function() {
    function test(name: string): string {
        //：后面就是指定的类型
        return "hello " + name;
    }
    let str: string = "world";
    test(str);
    //类型不确定
    function test2(name: any): any {
        //：后面就是指定的类型
        return name;
    }
    let str2: number = 123;
    test2(345);
    //如果要兼容多种数据格式，用any不能确定返回值类型
    //泛型适用于所有类型，不会有any存在的问题 <T>   T泛型变量  T表示任何类型
    //不预先指定具体的类型   而是在使用的时候再指定类型的一种特性
    function test3<T>(name: T): T {
        //：后面就是指定的类型
        return name;
    }
    test3<string>("345"); //传入类型
    test3<number | string>(123); //可以定义多个类型
    test3(true); //类型推断  编译器会自动的确定T的类型

    //函数中的具体写法
    //函数表达式
    let fun = function<T>(x: T): T {
        return x;
    };
    fun<string>("123");
    //ES6
    //let fun2 = (v) =>v;
    let fun2 = <U>(v: U): U => v;
    fun2<number>(123);

    function test4<T>(name: T[]): T[] {
        //：后面就是指定的类型
        console.log(name.length);
        return name;
    }
    test4<string>(["x", "y", "z"]);
    test4<number>([1, 2, 3]);

    //泛型的约束
    //泛型的约束必须符合接口的规范  用extends
    //例： 指定的类型一定要有length属性
    interface LengthNum {
        length: number;
    }

    function test5<T extends LengthNum>(name: T): T {
        //：后面就是指定的类型
        console.log(name.length);
        return name;
    }
    test5<string>("abc"); //OK
    //test5<number>(123);//error
    test5<number[]>([1, 2, 3]); //OK

    //  判断传入的值是否在另一个字符串中，如果有返回true,否则返回false;
    function test6(a: string, b: string): boolean {
        var i = a.search(b);
        return i == -1;
    }
    test6("abc", "b");

    //多个类型参数
    function test7<S, N>(a: S, b: N): void {
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
    enum Color {
        "green",
        "red",
        "orange"
    }
    //enum Color {green,red,orange};
    let a1 = Color.red; //1    索引从0开始
    let a2 = Color[2]; //orange
    console.log(a1);
    console.log(a2);

    //索引手动赋值
    enum Color2 {
        green = 5,
        red,
        orange
    }
    let a3 = Color2.red; //6   索引从5开始
    let a4 = Color2[7]; //orange
    console.log(a3);
    console.log(a4);

    enum Color3 {
        green = 5,
        red = 2,
        orange = 10
    }
    let a5 = Color3.red; //2
    let a6 = Color3[10]; //orange
    console.log(a5);
    console.log(a6);

    //任意值  枚举项有二种类型  常数项和计算所得项
    var xyz = "xyz";
    enum Color4 {
        green = 5,
        red = xyz.length,
        orange = <any>"o"
    }
    let a7 = Color4.orange; //o
    console.log(a7);

    //元组
    //数组
    var arr10: number[] = [1, 2, 3];
    //数组泛型
    var arr11: Array<string> = ["a", "b"];
    //任意值
    var arr12: Array<any> = ["a", 1, 2, true, null];
    //数组 是合并了相同类型的对象   元组 是合并了不同类型的对象
    var w: [string, number] = ["x", 10];

    function testt<T>(name: T): T {
        console.log(name);
        return name;
    }
    testt<string>("asdf");
    testt<number>(1111222333);
};
