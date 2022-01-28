//createCanvas is the function that creates the canvas object
import canvas from "canvas";
const createCanvas = canvas.createCanvas;
import imgHash from "imghash";

/**
 * canvasToPerceptualHash
 * @param {*} imageCanvas A canvas containing an image to be perceptually hashed
 * @returns a string containing a perceptual hash of the provided image
 */
export default function canvasToPerceptuaHash(imageCanvas) {
  return " "+imgHash.hash(imageCanvas.toBuffer(), 16);
}
