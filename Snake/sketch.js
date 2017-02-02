
var snake;
var scl = 20;
var food;
var lastKey;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  spawnFood();
}

function draw() {
  background(50);

  if (snake.checkFood(food)) {
    spawnFood();
  }
  snake.checkHitbox();
  snake.updatePosition();

  snake.drawSnake();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW && lastKey != DOWN_ARROW) {
    snake.move(0, -1);
    lastKey = UP_ARROW;
  } else if (keyCode === DOWN_ARROW && lastKey != UP_ARROW) {
    snake.move(0, 1);
    lastKey = DOWN_ARROW;
  } else if (keyCode === RIGHT_ARROW && lastKey != LEFT_ARROW) {
    snake.move(1, 0);
    lastKey = RIGHT_ARROW;
  } else if (keyCode === LEFT_ARROW && lastKey != RIGHT_ARROW) {
    snake.move(-1, 0);
    lastKey = LEFT_ARROW;
  }
}

function spawnFood() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  snake.total++;
}
