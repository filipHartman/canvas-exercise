export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

export class Vector {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.x = this.end.x - this.start.x;
    this.y = this.end.y - this.start.y;
  }

  value = () => Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  dotProduct = vector => vector.x * this.x + vector.y * this.y;
}
