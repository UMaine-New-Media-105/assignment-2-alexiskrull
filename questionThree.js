function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  drawArrow(0, 70, 5.7);
}

function drawArrow(x, y, size){
  push();
  translate(x, y);
  scale(size);
  noStroke();
  fill("blue");
  //arrow pointing right
  beginShape();
  vertex(30, 40); //bottom point 
  vertex(70, 20); //pointy point
  vertex(30, 0); //top point
  vertex(30, 10); //top attachment to rect
  vertex(0, 10); //top left rect
  vertex(0, 30); // bottom left rect
  vertex(30, 30); //bottom attachment to rect
  endShape(CLOSE);
  pop();
}
