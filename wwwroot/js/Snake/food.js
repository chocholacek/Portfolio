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