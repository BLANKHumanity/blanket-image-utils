//createCanvas is the function that creates the canvas object
const canvas = require("canvas");
const createCanvas = canvas.createCanvas;
const {Image} = require("canvas");

/**
 * resizeCanvas
 * @param {*} imageCanvas - source image stored in a canvas 
 * @param {*} width desired width
 * @param {*} height desired height
 * @returns A canvas holding an image at the specific dimensions
 */
 module.exports = function resizeCanvas(imageCanvas, width, height) {
    
    let image = new Image(); // Have to create intermediary image, weird hack to make drawImage treats imageCanvas correctly 
    image.src = imageCanvas.toDataURL();

    let scaledCanvas = createCanvas(width, height);
    let scaledContext = scaledCanvas.getContext("2d");
    scaledContext.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height, 0, 0, width, height);

    return scaledCanvas;
}
