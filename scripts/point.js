export class Punkt {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Wektor {
  constructor(punktPoczatkowy, punktKoncowy) {
    this.punktPoczatkowy = punktPoczatkowy;
    this.punktKoncowy = punktKoncowy;
    this.x = this.punktKoncowy.x - this.punktPoczatkowy.x;
    this.y = this.punktKoncowy.y - this.punktPoczatkowy.y;
  }

  wartosc = () => Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  iloczynSkalarny = (wektor) => wektor.x * this.x + wektor.y * this.y;
}
