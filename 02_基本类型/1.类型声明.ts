let a: number;
a = 10;
a = 20;
// a = '12'; 错误 不能将string型给number型

let c: boolean = true;
let d = 12;
// c = 12;
// d = ''

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

let result = sum(12, 1);

// 自动判断返回值
function sum1(num1: number) {
  if (num1 > 10) {
    return true;
  } else {
    return "123";
  }
}

// unknown 就是安全的any，不会对其他值的类型判断造成干扰
let e: unknown;
e = "123";
let f: string;
// 断言
f = e as string;
f = <string>e;

let g: (a: number, b: number) => number;
g = function (num1, num2) {
  return num1 + num2
}

// 枚举 值为1或0
enum Gender {
  male,
  female
}
let person: { name: string, age: number, gender: Gender };
person = { name: 'jack', age: 18, gender: Gender.female }

// 如果在声名时不指定类型，TS会做类型推断，推断成为any
let something;
something = '123';
something = 7;

// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person {
  name: string;
  // age: number;
  [propName: string]: string;
}

// 定义数组
let hobbies: string[] = ['guitar', 'code'];
// 数组的一些方法的参数也会根据数组在定义时约定的类型进行限制：
// hobbies.push(12)
// 泛型定义
let eat: Array<string> = ['apple'];
// 接口定义
interface NumberArray {
  [index:number]: number
}
let numberArray:NumberArray = [1,2,3]

// 函数表达式类型声名
let number: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
}
// 也可以用接口定义函数
interface SearchFunc {
  (source:string, subString: string): boolean
}
let mySearch: SearchFunc;
mySearch = function(source:string, subString: string) {
  return false
}

// 断言
// 将父类断言为更具体的子类
class ApiError extends Error {
  code:number = 0;
}

class HttpError extends Error {
  apiCode:number = 200;
}

function isApiError(error: Error):boolean{
  if(typeof (error as ApiError).code === 'number') {
    return true
  }
  return false
}

// 断言为any
// window.foo = 1;
(window as any).foo = 1;

// 元祖
let tom:[string, number] = ['tom', 20];

// 泛型
function createArray<T>(length:number,value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value
  }
  return result
}
createArray<string>(2,'x');