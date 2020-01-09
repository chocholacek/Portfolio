class obstacle {
	constructor(rx, ry, rw, rh, t) {
		this.rx = rx;
		this.ry = ry;
		this.rw = rw;
		this.rh = rh;
		this.clr = {
			r: random(0, 255),
			g: random(0, 255),
			b: random(0, 255),
		}
		this.t = t;
	}

	draw() {
		fill(this.clr.r, this.clr.g, this.clr.b);
		this.t(this.rx, this.ry, this.rw, this.rh);
	}
}