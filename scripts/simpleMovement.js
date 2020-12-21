const canvasWidth = 500;
const canvasHeight = 400;

const canvas = document.getElementById("canvas");
canvas.width = canvasWidth;
canvas.height = canvasHeight;
const ctx = canvas.getContext("2d");
const bball = new Image();
bball.src = "assets/bball3.png";
let x = 0;
let y = 100;

const wzorNaWspolrzednaYRzutuUkosnego = (wspolrzednaX, cos, tg, predkosc) => {
  const g = 9.81;
  const mianownik = 2 * predkosc * predkosc * cos * cos;
  return wspolrzednaX * tg - (g * wspolrzednaX) / mianownik;
};

bball.onload = moveBall();

function moveBall() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(bball, x, y, 30, 30);
  x += 0.5;
  y += wzorNaWspolrzednaYRzutuUkosnego(x, -0.8, -0.3, 10);
  requestAnimationFrame(moveBall);
}
