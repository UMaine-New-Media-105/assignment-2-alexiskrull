function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  noStroke();
  fill("blue");
  
  //arrow pointing right
  beginShape();
  vertex(100, 100);
  vertex(150, 80);
  vertex(100, 60);
  vertex(100, 70);
  vertex(50, 70);
  vertex(50, 90);
  vertex(100, 90);
  
  endShape(CLOSE);
}
