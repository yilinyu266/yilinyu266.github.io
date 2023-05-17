function setup() {
createCanvas(600, 600);
noStroke();
background(92, 168, 250);{
for (var y = 0; y <= height; y += 40) {
for (var x = 0; x <= width; x += 40) {
fill(255, 140);
ellipse(x, y, 40, 40);
}
}
}
}

function draw() {
  //back haiir
  fill(75,68,68);
rect(143, 150, 310, 255, 20);

//head neck
fill(253,213,175);
rect(265, 370, 50, 100);
ellipse(300, 270, 250, 300);


//cloth
fill(17,60, 168);
rect(135, 470, 310, 255);

//right hair 1
fill(75, 68, 68);
arc(410, 190, 100, 240, QUARTER_PI, PI+QUARTER_PI);
triangle(290, 145, 330, 200, 390, 165);
//left hair 1
arc(200, 190, 150, 210, QUARTER_PI+PI+HALF_PI, QUARTER_PI+HALF_PI);
triangle(230, 155, 295, 200, 330, 145);
//top hair
arc(300, 170, 310, 200, radians(155), radians(30));


// eye whites
  fill(250, 247, 242);
  ellipse(250, 268, 50, 50);
  ellipse(350, 268, 50, 50);
  // irises
  fill(48, 43, 38);
  ellipse(250, 270, 40, 40);
  ellipse(350, 270, 40, 40);
  // pupil
  fill(0);
  ellipse(250, 265, 10, 10);
  ellipse(350, 265, 10, 10);
  // eye highlight
  fill(255, 255, 255);
  ellipse(242, 265, 10, 10);
  ellipse(342, 265, 10, 10);
  //mouth
 fill(191, 23, 23);
  triangle(200, 355, 240, 380, 330, 375);
   // Glasses
  strokeWeight(3);
stroke(81);
  noFill();
  ellipse(250, 270, 80, 60);
  ellipse(350, 270, 80, 60);
  
  
}
