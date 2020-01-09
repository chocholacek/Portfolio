var gens;
var span = 400;
var count = 0;
var maxforce = 0.2;
var obstacles = [];
var targets = [];
var gen = 0;

function setup() {
  createCanvas(1600, 800);
  gens = generation.random(500, span, maxforce);
  obstacles.push(new obstacle(0, 350, width / 2, 50, rect));
  obstacles.push(new obstacle(width / 2 + 100, 0, 20, 400, rect));
  obstacles.push(new obstacle(width / 4, height / 4 - 50 , 25, 125, rect));
  targets.push(new obstacle(width / 8, 200, 50, 50, ellipse));
}



function draw() {
  background(0);

  for (let o of obstacles)
  	o.draw();
  for (let t of targets)
    t.draw();

  gens.step();

  if (++count == span) {
  	gens.breed();
    count = 0;
    ++gen;
  }
}