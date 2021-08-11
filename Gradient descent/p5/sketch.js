
var dataset = [];

var a = 1;
var b = 0;


function setup() {
  createCanvas(400, 400);
  background(51);
}

function drawLine() {
  var x1 = 0;
  var y1 = (a * x1) + b;
  var x2 = 1;
  var y2 = (a * x2) + b;
  x1 = map(x1, 0, 1, 0, width);
  y1 = map(y1, 0, 1, height, 0);
  x2 = map(x2, 0, 1, 0, width);
  y2 = map(y2, 0, 1, height, 0);
  stroke(255, 0, 255);
  line(x1, y1, x2, y2);
}

function linearRegression() {

  const learning_rate = 0.01;
  let m = 0;
  let b = 0;

  for (let i = 0; i < dataset.length; i++){
    const x = dataset[i].x;
    const y = dataset[i].y;
    const error = y - (m*x + b);
    m = m + (error * x) * learning_rate;
    b = b + error * learning_rate;
    const x1 = 0;
    const y1 = (m * x1) + b;
    const x2 = 1;
    const y2 = (m * x2) + b;


  }

}

function mousePressed() {
  var x = map(mouseX, 0, width, 0, 1);
  var y = map(mouseY, 0, height, 1, 0);
  var point = createVector(x, y);
  dataset.push(point);
  linearRegression()

}

function draw() {
  background(51);
  for(var i = 0; i < dataset.length; i++) {
    var x = map(dataset[i].x, 0, 1, 0, width);
    var y = map(dataset[i].y, 0, 1, height, 0);
    fill(255);
    stroke(255);
    ellipse(x, y, 8, 8);
  }
  if(dataset.length > 1) {
    linearRegression();
    drawLine();
  }
}
