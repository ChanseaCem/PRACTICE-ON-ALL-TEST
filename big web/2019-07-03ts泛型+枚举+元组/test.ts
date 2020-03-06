
  //多个类型参数
  function test7<S,N>(a:S,b:N):void {
    console.log(a);
  }
//   test7('abc',123);
  test7(1,2);
  interface F1{
    length:number
  }

  function f<A extends F1,B,C>(a:A,b:B,c:C):void{
    console.log(c)
  }
  f("12",2,43)