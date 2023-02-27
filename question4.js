//Countries: Azerbaijan & Kuwait

function setup() {
  //works with any canvas that has a 3:2 ratio
  createCanvas(600, 400);
  // createCanvas(300, 200);
  // createCanvas(150, 100);
}

function draw() {
  stripeHeight = height / 3;
  points = 8;

  //middle third, red from both flags
  background("red");
  //top third, green from both flags (slightly different, so I tried for an avg)
  noStroke();
  fill("hsl(130, 50%, 45%)");
  rect(0, 0, width, stripeHeight);

  //bottom third, blue from Azerbaijan
  fill("hsl(190, 100%, 40%)");
  rect(0, stripeHeight * 2, width, stripeHeight);

  //left black shape, from Kuwait
  fill("black");
  beginShape();
  vertex(0, 0);
  vertex(width / 4, stripeHeight);
  vertex(width / 4, stripeHeight * 2);
  vertex(0, height);
  endShape();

  //crescent shape + star from Azerbaijan
  crescentStar();
}

function crescentStar(){
  //crescent shape outer
  fill("white");
  ellipse(width / 8.5, height / 2, stripeHeight);

  //crescent shape inner
  fill("black");
  ellipse(width / 7.5, height / 2, stripeHeight / 1.1);

  //star shape
  fill("white");
  angleMode(DEGREES);
  push();
  translate(width / 4, height / 2);
  for (i = 0; i < 8; i++) {
    //makes 8 points
    triangle(0, height / 10, -height / 20, 0, height / 20, 0);
    rotate(360 / 8);
  }
  pop();
}
