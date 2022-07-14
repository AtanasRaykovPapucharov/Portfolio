import { GameWidth, GameHeight, GameObjectSize, Speed, Hidden, Btn, CurrentPoints } from './utils/constants';
import { IGameObject } from './interfaces/IGameObject';
import { Point } from './models/point';
import { Snake } from './models/snake';
import { Food } from './models/food';
import { Score } from './models/score';

export class Game {
	snake: Snake;
	food: IGameObject;
	speed: number;
	score: Score;
	points: number;
	renderer: any;
	isStopped: boolean;

	constructor(renderer: any, snake: Snake) {
		this.snake = snake;
		this.score = new Score();
		this.points = this.score.getPoints();
		this.renderer = renderer;
		this.isStopped = false;
		this.speed = Speed;
	}

	getRandomNumberBetween(min: number, max: number): number {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	getRandomFood(): IGameObject {
		const pX = Math.floor((Math.random() * (GameWidth - 2 * GameObjectSize) / GameObjectSize))
			* GameObjectSize + GameObjectSize;
		const pY = Math.floor((Math.random() * (GameHeight - 2 * GameObjectSize) / GameObjectSize))
			* GameObjectSize + GameObjectSize;

		const foodPos = new Point(pX, pY);
		return new Food(foodPos, foodPos, '');
	}

	init(): void {
		this.renderer.initCanvas();

		this.food = this.getRandomFood();
		this.renderer.drawFood(this.food);

		this.snake.init();
		this.renderer.drawSnake(this.snake);
		document.getElementById(CurrentPoints).innerHTML = this.points.toString();

	}

	getFood(): boolean {
		const head = this.snake.snakeParts[0];
		if (head.position.x == this.food.position.x &&
			head.position.y == this.food.position.y) {
			return true;
		}
		return false;
	}

	newFrame(): void {
		if (!this.isStopped) {
			this.renderer.clear();
			this.renderer.initCanvas();
			this.renderer.drawFood(this.food);
			this.renderer.drawSnake(this.snake);
			this.snake.moveSnake(this.snake);

			if (this.snake.touchItself(this.snake)) {
				this.renderer.clear();
				this.renderer.initCanvas();
				this.renderer.gameOver();
				this.isStopped = true;
				document.getElementById(Btn).classList.remove(Hidden);
			}

			if (this.getFood()) {
				this.snake.eat();
				this.food = this.getRandomFood();
				this.score.addPoints();
				this.points = this.score.getPoints();
				document.getElementById(CurrentPoints).innerHTML = this.points.toString();
			}
		}
	}

	loop(): void {
		setInterval(() => {
			this.newFrame();
		}, this.speed);
	}

	start(): void {
		document.getElementById(Btn).classList.add(Hidden);
		this.init();
		this.loop();
	}
}
