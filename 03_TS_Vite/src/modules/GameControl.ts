import Food from './Food';
import Snake from './Snake';
import ScorePanel from './ScorePanel';
export default class GameControl {
  food: Food;
  snake: Snake;
  scorePanel: ScorePanel;
  // 移动方向
  direction: number;
  // 判断游戏是否结束
  isLive = true;

  constructor() {
    this.food = new Food();
    this.snake = new Snake();
    this.scorePanel = new ScorePanel(10,5);
    this.direction = 39;
    this.startPlay();
  }

  // 初始化游戏 开始游戏
  startPlay() {
    document.addEventListener('keydown', this.moveSnake.bind(this));
    this.run();
  }

  // 改变移动方向
  moveSnake(event: KeyboardEvent) {
    this.direction = event.keyCode;
  }

  // 蛇移动的方法
  run() {
    let x = this.snake.X / 16;
    let y = this.snake.Y / 16;

    switch (this.direction) {
      case 37:
        x -= 1;
        break;
      case 38:
        y -= 1;
        break;
      case 39:
        x += 1;
        break;
      case 40:
        y += 1;
        break;
      default:
        break;
    }

    this.isEat();
    try {
      this.snake.X = x;
      this.snake.Y = y;
    } catch (error) {
      this.isLive = false;
    }

    // 调用移动，并且根据level等级提高移动速度
    this.isLive && setTimeout(() => {
      this.run();
    }, 300 - (this.scorePanel.level - 1) * 30);
  }

  // 定义方法检查是否吃到食物
  isEat() {
    // 蛇的坐标
    let snakeX = this.snake.X;
    let snakeY = this.snake.Y;
    // 食物坐标
    let foodX = this.food.X;
    let foodY = this.food.Y;

    // 如果坐标相同，则说明吃到
    if(snakeX === foodX && snakeY === foodY) {
      this.food.change();
      this.scorePanel.addScore();
      this.snake.addSnakeBody();
    }
  }
}