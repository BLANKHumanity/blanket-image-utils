import blanketImageUtils from "../src/index.js";

module.exports = function test() {

    const imageCanvas = "IMAGINE THIS IS A CANVAS IMAGE";

    let resizedImage = blanketImageUtils.resizeCanvas(imageCanvas, 256, 256);
    let perceptualHash = await blanketImageUtils.canvasToPerceptualHash(resizedImage);

    if (perceptualHash)
        return true; // Lol this isn't a real test sorry
    return false;
}