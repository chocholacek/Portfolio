var s;
var f;
var paused = true;
var score = 0;
var scl = 10;

function setup() {
	frameRate(13);
  createCanvas(600, 400);
  s = new Snake(0, 0);
  f = new Food();
}

function keyPressed() {
	if (key == ' ') {
		paused = !paused;
	} else {
		switch (keyCode) {
		case UP_ARROW:
			s.direction(0, -1);
			break;
		case DOWN_ARROW:
			s.direction(0, 1);
			break;
		case LEFT_ARROW:
			s.direction(-1, 0);
			break;
		case RIGHT_ARROW:
			s.direction(1, 0);
			break;
		}
	}
}

function draw() {
	background(0);
	fill(255);
	textSize(12);
	var msg = "score: " + score;
	text(msg, width - 50, 0, width, 15);
	f.draw();
  s.draw();
	if (paused) {
		fill(255);
		msg = "paused";
		var size = 32;
		var xoff = (width - size * msg.length) / 2;
		var yoff = (height - size) / 2;
		

		textSize(size * 2);
  	text(msg, xoff, yoff, width - xoff, height - yoff);
  } else {
  	s.step();
  }
}

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
			paused = true;
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

class Food {
	constructor() {
		this.randomize();
	}

	randomize() {
		this.x = Math.floor(random(width / scl)) * scl;
		this.y = Math.floor(random(height / scl)) * scl;
	}

	eaten() {
		if (this.x === s.x && this.y === s.y) {
			this.randomize();
			return true;
		}
		return false;
	} 

	draw() {
		fill(255, 0, 0);
		rect(this.x, this.y, scl, scl);
	}
} 