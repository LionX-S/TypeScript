// 通过typeof缩小类型范围
function printALl(Strs: string | string[] | null) {
  if(Strs && typeof Strs === 'object') {
    for (const s of Strs) {
      console.log(s);
    }
  } else if (typeof Strs === 'string') {

  } else {

  }
}