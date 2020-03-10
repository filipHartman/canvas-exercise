import { Point } from './point.js';

let canvas;
let ctx;
let radius = 40;
let x = (Math.random() * 2 * innerWidth) / 3;
let y =
  Math.random() * (innerHeight - radius - 0.5 * innerHeight) +
  0.5 * innerHeight;
let dx = (Math.random() - 0.5) * 20;
let dy = (Math.random() - 0.5) * 20;

const setupCanvas = () => {
  canvas = document.querySelector('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  if (canvas.getContext) {
    ctx = canvas.getContext('2d');
    // animate();
  }
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  update(ctx);
};

const update = context => {
  if (x + radius > innerWidth || x - radius < 0) {
    dx = -dx;
  }

  if (y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
};

document.onload = setupCanvas();

let startingPoint = new Point(0, 0);

let point = new Point(0, 0);

document.onmousedown = event => {
  startingPoint.x = event.clientX;
  startingPoint.y = event.clientY;
  console.log('start');
  document.onmousemove = onMouseMove;
};

document.onmouseup = () => {
  document.onmousemove = null;
  console.log('stop');
  let trzeci = {
    x: startingPoint.x,
    y: point.y
  };
  let vect1 = {
    x: point.x - startingPoint.x,
    y: point.y - startingPoint.y
  };

  let vect2 = {
    x: trzeci.x - point.x,
    y: trzeci.y - point.y
  };

  const iloczynSkalarny = vect1.x * vect2.x + vect1.y * vect2.y;
  const vect1Wart = Math.sqrt(Math.pow(vect1.x, 2) + Math.pow(vect1.y, 2));
  const vect2Wart = Math.sqrt(Math.pow(vect2.x, 2) + Math.pow(vect2.y, 2));
  const cosA = iloczynSkalarny / (vect1Wart * vect2Wart);
  const tanA = Math.sqrt(1 - Math.pow(cosA, 2)) / cosA;
  console.log('Wartosc');
  console.log(cosA);
  console.log(tanA);
};

const onMouseMove = event => {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  point.x = event.clientX;
  point.y = event.clientY;
  console.log('x ' + event.clientX);
  console.log('y ' + event.clientY);
  drawLine(event.clientX, event.clientY);
};

const drawLine = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(startingPoint.x, startingPoint.y);
  ctx.lineTo(x, y);
  ctx.stroke();
};
