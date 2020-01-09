var cellsize = 5;
class cell {
	constructor(cls) {
		this.pos = createVector(width / 2, height);
		this.vel = createVector();
		this.acc = createVector();
		this.crash = false;
		this.hit = false;
		this.dna = cls;
	}

	static random(span, max) {
		return new cell(dna.random(span, max));
	}

	fitness() {
		var fit = 0;
		for (let t of targets) {
    	var d = map(dist(this.pos.x, this.pos.y, t.rx, t.ry), 0, width, width, 0);
    	if (d > fit)
    		fit = d;
		}

    if (this.hit) {
      fit *= 100;
    }
    if (this.crash) {
      fit /= 10;
    }
    return fit;
	}

	crashes() {
		if (this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0) {
      this.crash = true;
    }
    for (let o of obstacles) {
    	if (this.pos.x > o.rx && this.pos.x < o.rx + o.rw && this.pos.y > o.ry && this.pos.y < o.ry + o.rh) {
	      this.crash = true;
	      break;
	    }
    }
	}

	hits() {
		for (let t of targets)
			if (dist(this.pos.x, this.pos.y, t.rx, t.ry) < t.rw / 2) {
      	this.hit = true;
      	break;
    	}
	}

	step() {
		this.hits();
    this.crashes();

    if (!this.hit && !this.crash) {
    	this.acc.add(this.dna.arr[count]);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }

	}

	draw() {
		fill(255);
		ellipse(this.pos.x, this.pos.y, cellsize, cellsize);
	}
}