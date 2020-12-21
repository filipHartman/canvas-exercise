import { MouseEventHandler } from "./mouseEvents.js";
const canvasHeight = 500;
const canvasWidth = 500;

let canvas;
let ctx;
let radius = 40;
let x = (Math.random() * 2 * canvasWidth) / 3;
let y =
  Math.random() * (canvasHeight - radius - 0.5 * canvasHeight) +
  0.5 * canvasHeight;
let dx = (Math.random() - 0.5) * 20;
let dy = (Math.random() - 0.5) * 20;

const setupCanvas = () => {
  canvas = document.querySelector("canvas");
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  if (canvas.getContext) {
    ctx = canvas.getContext("2d");

    const eventHandler = new MouseEventHandler(ctx);
  }
};

document.onload = setupCanvas();
