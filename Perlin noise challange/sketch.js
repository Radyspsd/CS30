// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let circleSize;
let circleTime = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  diameter();
}

function diameter(){
  circleTime += 0.01;
  circleSize = noise(circleTime);
  circleSize = map(circleSize,0,1,10,100);
  fill(220);
  strokeWeight(5);
  circle(200,200,circleSize);
  circleTime;

}
