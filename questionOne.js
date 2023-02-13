function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill("hotpink");
  stroke("white");
  drawRow(0);
  drawRow(80);
  drawRow(160);
  drawRow(240);
  drawRow(320);
  
   fill("gold") /*special tile color*/
  //row 1
  rect(160, 0, 80, 80);
  //row 2
  rect(80, 80, 80, 80);
  rect(240, 80, 80, 80);
  //row 3
  rect(80, 160, 80, 80);
  rect(160, 160, 80, 80);
  rect(240, 160, 80, 80);
  //row 4
  rect(80, 240, 80, 80);
  rect(240, 240, 80, 80);
  //row 5
  rect(80, 320, 80, 80);
  rect(240, 320, 80, 80);
}

function drawRow(yVal){
  rect(0, yVal, 80);
  rect(80, yVal, 80);
  rect(160, yVal, 80);
  rect(240, yVal, 80);
  rect(320, yVal, 80);
}

