export class Score {
	points: number;

	constructor() {
		this.points = 0;
	}

	getPoints(): number {
		return this.points;
	}

	addPoints(): void {
		this.points += 10;
	}
}
