//createCanvas is the function that creates the canvas object
const canvas = require("canvas");
const createCanvas = canvas.createCanvas;
const imgHash = require("imghash");

/**
 * canvasToPerceptualHash
 * @param {*} imageCanvas A canvas containing an image to be perceptually hashed
 * @returns a string containing a perceptual hash of the provided image
 */
 module.exports = async function canvasToPerceptualHash(imageCanvas) {
  return " "+(await imgHash.hash(imageCanvas.toBuffer(), 16));
}
