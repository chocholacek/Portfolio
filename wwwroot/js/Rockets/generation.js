class generation{
	constructor(cs, size) {
		this.cs = cs;
		this.size = size;
	}

	static random(size, span, max) {
		var l = [];
		for (var i = 0; i < size; ++i) {
			l.push(cell.random(span, max));
		}
		return new generation(l, size);
	}

	step() {
		for (let c of this.cs) {
			c.step();
			c.draw();
		}
	}

	breed() {
		var p = this.mating_pool();
		this.cs = [];
		for (var i = 0; i < this.size; ++i) {
			this.cs.push((new cell(dna.mix(random(p), random(p)))));
		}
	}

	mating_pool() {
		var pool = [];
		var max = 0;
		var fit = [];
		for (var i = 0; i < this.size; ++i) {
			fit.push(this.cs[i].fitness());
			if (fit[i] > max)
				max = fit[i];
		}

		for (var i = 0; i < this.size; ++i) {
			fit[i] /= max;
		}

		for (var i = 0; i < this.size; ++i) {
			for (var j = 0; j < fit[i] * 100; ++j)
				pool.push(this.cs[i].dna);
		}

		return pool;
	}
}