

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


/*
* The Dataset : Years of experience / Salary
* x: years of exp
* y: salary in 1000$
*/

const dataset = [
  {x: 2, y: 15},
  {x: 3, y: 28},
  {x: 5, y: 42},
  {x: 13, y: 64},
  {x: 8, y: 50},
  {x: 16, y: 90},
  {x: 11, y: 58},
  {x: 1, y: 8},
  {x: 9, y: 54},
];

init();


//------------

function init() {
  drawAxes();
  for (let i = 0; i < dataset.length; i++) {
    drawDataPoint(dataset[i]);
  }
  drawLinearRegression()
}

function drawLinearRegression() {

  /**
  * y = ax + b
  */

  let xsum = 0;
  let ysum = 0;
  let xmean;
  let ymean;
  let a = 0;
  let b = 0;
  let num = 0;
  let den = 0;

  for (let i = 0; i < dataset.length; i++) {
    xsum += dataset[i].x;
    ysum += dataset[i].y;
  }

  xmean = xsum / dataset.length;
  ymean = ysum / dataset.length;

  for (let i = 0; i < dataset.length; i++) {
    const x = dataset[i].x;
    const y = dataset[i].y;
    num += (x - xmean) * (y - ymean);
    den += (x - xmean) * (x - xmean);
  }

  a = num / den;
  b = ymean - a * xmean;



  const x1 = 0;
  const y1 = (a * x1) + b;
  const x2 = canvas.width;
  const y2 = (a * x2) + b;


  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = "rgba(0, 0, 255, .3)";
  ctx.stroke();

  // if x = 12
  console.log((a * 2) + b)

}
function drawDataPoint(point) {
    ctx.fillStyle = "#ff2626";
    ctx.beginPath();
    const pointSize = 1;
    ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
}

function drawAxes(){
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(canvas.width, 0);
  ctx.stroke();
  ctx.stroke();
  ctx.stroke();
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, canvas.height );
  ctx.stroke();
  ctx.stroke();
  ctx.stroke();
  ctx.stroke();

}
