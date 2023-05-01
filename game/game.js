var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var fishEmoji = "🐟"; // set the fish emoji

function preload() {
  mouseImg = loadImage('cathunt.png'); // load the mouse image
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  noCursor(); // hide the default mouse pointer
}

function draw() {
  background(220);
  levelOne();
  text(("Score: " + score), width/2, 40);
  image(mouseImg, mouseX, mouseY, 50, 50); // display the mouse image at the mouse position
}

function levelOne() {
  text("Level 1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 5) {
    fill(random(255));
  }
  line(ballx, bally, mouseX, mouseY);
  textSize(ballSize);
  text(fishEmoji, ballx-ballSize/4, bally+ballSize/4); // emoji centered at ball position
}
