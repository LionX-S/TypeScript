export default class Food {
  element: HTMLElement;

  constructor() {
    // 获取页面中food元素并赋值给element，感叹号是告诉编译器 这个element不可能获取不到
    this.element = document.getElementById('food')!;
    this.change();
  }

  // 获取食物x坐标方法
  get X() {
    return this.element.offsetLeft;
  }
  // 获取Y坐标
  get Y() {
    return this.element.offsetTop;
  }

  // 随机生成坐标
  change() {
    let left = Math.round(Math.random() * 29)  + 'rem';
    let top = Math.round(Math.random() * 29) + 'rem';
    this.element.style.left = left;
    this.element.style.top = top;
  }
}