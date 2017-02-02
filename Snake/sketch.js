
var snake;
var scl = 30;
var food;
var lastKey;
var gamePaused = true;

var message1 = "Leertaste drücken um";
var message2 = "Spiel zu starten/pausieren";

function setup() {
  createCanvas(600, 600);

  textSize(25);

  snake = new Snake();
  frameRate(10);
  spawnFood();
}

function draw() {
  background(50);
  fill(255);
  text(snake.total, 555, 25);

  if(!gamePaused){

    if (snake.checkFood(food)) {
      spawnFood();
    }
    snake.checkHitbox();
    snake.updatePosition();

    snake.drawSnake();
    fill(255, 0, 100);
    rect(food.x, food.y, scl, scl);
  } else {
    fill(255);
    rect(140, 190, 320, 220);
    fill(200,200,200);
    rect(150, 200, 300, 200);
    fill(0);
    text(message1,180,290);
    text(message2,155,330);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    if (gamePaused) {
      gamePaused = false;
    } else {
      gamePaused = true;
    }
  } else if (keyCode === UP_ARROW && lastKey != DOWN_ARROW) {
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
