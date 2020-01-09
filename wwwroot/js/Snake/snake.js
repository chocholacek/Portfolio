class Snake {
	constructor() {
		this.initial();
	}

	initial() {
		this.x = Math.floor(width / 2);
		this.y = Math.floor(height / 2);
		this.xv = 1;
		this.yv = 0;
		this.tail = [];
	}

	draw() {
		fill(255);
		stroke(0);
		rect(this.x, this.y, scl, scl);
		for (var i = 0; i < this.tail.length; ++i) {
			var act = this.tail[i];
			rect(act.x, act.y, scl, scl);
		}
	}

	step() {
		this.tail.push({x: this.x, y: this.y});
		this.x = (this.x + this.xv * scl + width) % width;
		this.y = (this.y + this.yv * scl + height) % height;
		if (!this.collides()) {
			if (!f.eaten()) 
				this.tail = this.tail.slice(1);
			else
				++score;
		} else {
			score = 0;
			this.initial();
		}
	}

	direction(x, y) {
		if (this.xv != -x && this.yv != -y) {
			this.xv = x;
			this.yv = y;
		}
	}

	collides() {
		for (var i = 0; i < this.tail.length; ++i) {
			if (this.x === this.tail[i].x && this.y === this.tail[i].y)
				return true;
		}
		return false;
	}
}