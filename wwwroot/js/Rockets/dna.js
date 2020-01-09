class dna {
  constructor(arr, max) {
    this.arr = arr;
    this.max = max
  }

  static random(span, max) {
    var l = [];
    for (var i = 0; i < span; ++i) {
      l[i] = p5.Vector.random2D();
      l[i].setMag(max);
    }
    return new dna(l, max);
  }

  mutate(chance) {
    for (var i = 0; i < this.arr.length; ++i) {
      if (random(1) < chance) {
        this.arr[i] = p5.Vector.random2D();
        this.arr[i].setMag(this.max);
      }
    }
    return this;
  }

  static mix(a, b) {
    var n = [];
    for (var i = 0; i < a.arr.length; i++) {
      if (random(1) > 0.5) {
        n[i] = a.arr[i];
      }
      else {
        n[i] = b.arr[i];
      }
    }
    return new dna(n, random(a.max, b.max)).mutate(0.05);
  }
}