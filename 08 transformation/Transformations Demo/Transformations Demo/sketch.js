// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {  //coordinate system reverts
  background(255);
  drawBasicGrid(220);


  //transformation one: TRANSLATION
  // push();  
  // translate(150,50); //apply to the coordinate system
  // drawBasicGrid(150);
  // rectangleRed(0,0);
  // pop(); ///revert back to the original system
  // rectangleBlue(0,0);

  // push()  - makes a new copy of coordinate s 
  // pop() - removes the current coordinate s




  //transformation two: SCALE
  // rectangleRed(40,0);

  // let scaleAmount = map(mouseX,0, width, 1,10);
  // // 1 - no change   <1 - smaller   >1 - larger
  // // for transformations: the order matter
  // translate(140,140);
  // scale(scaleAmount);
  // drawBasicGrid(100);
  // rectMode(CENTER);
  // rectangleBlue(100,100);



  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
 //radians() → convert degrees to radians
  //in setup: use angleMode(DEGREES)
  //rotational center is always the origin.
  //if you want to rotate an objet around its center, place
  //its center on the origin.
  push();
  angleMode(DEGREES)
  rotate(45);  //var that counts up once per frame
  translate(200,0);
  rotate(frameCount);
  //drawBasicGrid(100);
  face(0,0);
  pop();
  //Combinations of Transformations

  rectangleBlue(300,300);

}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x,y);
  ellipseMode(CENTER);
  fill(200,200,0);
  stroke(0);
  ellipse(0,0,80,80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25,0,10,10);
  ellipse(25,0,10,10);
  strokeWeight(5);
  line(-30,-10,30,-10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5,0,5,0);
  line(0,5,0,-5);
  strokeWeight(1);
}