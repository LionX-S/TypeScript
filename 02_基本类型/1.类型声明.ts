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
f = <string> e;

let g: (a:number,b:number) => number;
g = function(num1,num2) {
  return num1+num2
}

// 枚举 值为1或0
enum Gender {
  male,
  female
}
let person:{name:string,age:number,gender:Gender};
person = {name:'jack',age:18,gender:Gender.female}