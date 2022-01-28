//createCanvas is the function that creates the canvas object
import canvas from "canvas";
const createCanvas = canvas.createCanvas;

/**
 * resizeCanvas
 * @param {*} imageCanvas - source image stored in a canvas 
 * @param {*} width desired width
 * @param {*} height desired height
 * @returns A canvas holding an image at the specific dimensions
 */
export default function resizeCanvas(imageCanvas, width, height) {
  let scaledCanvas = createCanvas(width, height);
  let scaledContext = scaledCanvas.getContext("2d");
  scaledContext.drawImage(imageCanvas, 0, 0, 580, 580, 0, 0, 256, 256);

  return scaledCanvas;
}
