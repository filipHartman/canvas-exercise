import { Punkt, Wektor } from "./point.js";

export class MouseEventHandler {
  constructor(ctx) {
    this.ctx = ctx;
    this.startingPoint = new Punkt(0, 0);
    this.point = new Punkt(0, 0);
    document.onmousedown = this.mouseDownEvent;
    document.onmouseup = this.mouseUpEvent;
    this.bball = new Image(10, 10);
    this.bball.src = "../assets/bball3.png";
  }

  mouseDownEvent = (event) => {
    this.startingPoint.x = event.clientX;
    this.startingPoint.y = event.clientY;
    document.onmousemove = this.mouseMoveEvent;
  };

  mouseMoveEvent = (event) => {
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);
    this.point.x = event.clientX;
    this.point.y = event.clientY;
    console.log("x " + event.clientX);
    console.log("y " + event.clientY);
    this.drawLine(event.clientX, event.clientY);
  };

  mouseUpEvent = () => {
    document.onmousemove = null;

    this.ctx.drawImage(this.bball, this.point.x, this.point.y, 30, 30);
    let punktPomocniczy = {
      x: this.startingPoint.x,
      y: this.point.y,
    };

    let calkowityWektor = new Wektor(this.startingPoint, this.point);
    let wektorPionowy = new Wektor(this.point, punktPomocniczy);

    const iloczynSkalarny = calkowityWektor.iloczynSkalarny(wektorPionowy);

    const wartoscWektoraCalkowitego = calkowityWektor.wartosc();
    const wartoscWektoraPionowego = wektorPionowy.wartosc();

    const cosA =
      iloczynSkalarny / (wartoscWektoraCalkowitego * wartoscWektoraPionowego);
    const tanA = Math.sqrt(1 - Math.pow(cosA, 2)) / cosA;
    console.log("Wartosc");
    console.log(cosA);
    console.log(tanA);
  };

  drawLine = (x, y) => {
    this.ctx.beginPath();
    this.ctx.moveTo(this.startingPoint.x, this.startingPoint.y);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  };
}

const wzorNaWspolrzednaYRzutuUkosnego = (wspolrzednaX, cos, tg, predkosc) => {
  const g = 9.81;
  const mianownik = 2 * predkosc * predkosc * cos * cos;
  return wspolrzednaX * tg - (g * wspolrzednaX) / mianownik;
};
