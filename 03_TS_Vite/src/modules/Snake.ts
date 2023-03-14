export default class Snake {
  snake: HTMLElement;
  snakeHead: HTMLElement;
  // 包括蛇头
  snakeBody: HTMLCollectionOf<HTMLElement>;
  constructor() {
    this.snake = document.getElementById('snake')!;
    this.snakeHead = document.querySelector('#snake > div')!;
    this.snakeBody = this.snake.getElementsByTagName('div');
  }

  // 获取蛇头坐标
  get X() {
    return this.snakeHead.offsetLeft;
  }
  get Y() {
    return this.snakeHead.offsetTop;
  }

  // 设置蛇头坐标
  set X(value: number) {
    if (this.X / 16 === value) {
      return;
    }
    if (value < 0 || value > 29) {
      throw new Error('蛇撞墙')
    }
    this.moveBody();
    this.snakeHead.style.left = `${value}rem`;
  }

  set Y(value: number) {
    if (this.Y / 16 === value) {
      return;
    }
    if (value < 0 || value > 29) {
      throw new Error('蛇撞墙')
    }
    this.moveBody();
    this.snakeHead.style.top = `${value}rem`;
  }

  // 添加身体
  addSnakeBody() {
    this.snake.insertAdjacentHTML('beforeend', "<div></div>");
  }

  // 移动身体
  moveBody() {
    for (let i = this.snakeBody.length - 1; i > 0; i--) {
      // 从后往前设置坐标 获取前一个body的坐标
      let x = this.snakeBody[i - 1].offsetLeft;
      let y = this.snakeBody[i - 1].offsetTop;

      // 将获取的坐标给后一个body
      this.snakeBody[i].style.left = `${x / 16}rem`;
      this.snakeBody[i].style.top = `${y / 16}rem`;
    }
  }
}