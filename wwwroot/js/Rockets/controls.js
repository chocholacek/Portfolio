class generation{
	constructor(rs, size) {
		this.rs = rs;
		this.size = size;
	}

	static random(size, span, max) {
		var l = [];
		for (var i = 0; i < size; ++i) {
			l.push(cell.random(span, max));
		}
		return new generation(l, size);
	}

	control() {
		for (var i = 0; i < this.size; ++i) {
			this.rs[i].step();
			this.rs[i].draw();
		}
	}

	breed() {
		var p = this.mating_pool();
		
		this.rs = [];
		for (var i = 0; i < this.size; ++i) {
			var genes = dna.mix(random(p), random(p));
			genes.mutate(0.01);
			this.rs[i] = (new cell(genes));
		}
	}

	mating_pool() {
		var pool = [];
		var max = 0;
			var fit = [];
			for (var i = 0; i < this.size; ++i) {
				fit.push(this.rs[i].fitness());
				if (fit[i] > max)
					max = fit[i];
			}

			for (var i = 0; i < this.size; ++i) {
				fit[i] /= max;
			}

			for (var i = 0; i < this.size; ++i) {
				for (var j = 0; j < fit[i] * 100; ++j)
					pool.push(this.rs[i].cls);
			}

			return pool;
	}
}