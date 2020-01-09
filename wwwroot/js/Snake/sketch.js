function runSnake() {
	var s;
	var f;
	var paused = false;
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
}
