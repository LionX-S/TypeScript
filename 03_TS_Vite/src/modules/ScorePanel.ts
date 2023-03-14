export default class ScorePanel {
  score: number = 0;
  level: number = 1;
  // 最大等级
  maxLevel: number;
  // 设置多少分数升级
  levelScore: number;
  scoreElement: HTMLElement;
  levelELement: HTMLElement;
  constructor(maxLevel: number = 10, levelScore:number = 20) {
    this.scoreElement = document.getElementById('scoreNum')!;
    this.levelELement = document.getElementById('level')!;
    this.maxLevel = maxLevel;
    this.levelScore = levelScore;
  }

  // 加分function
  addScore() {
    this.scoreElement.innerHTML = `${++this.score}`;
    // 分数到达一定时升级
    if(this.score % this.levelScore === 0) {
      this.addLevel();
    }
  }

  // level提升
  addLevel() {
    // 设置最高等级
    if (this.level < this.maxLevel) {
      this.levelELement.innerHTML = `${++this.level}`;
    }
  }
}