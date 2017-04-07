image = null,
canvas = null,
ctx = null;

// Starts everything on window load
window.addEventListener("load", function () {
    canvas = document.getElementById("cvs"); // Our canvas tag
    ctx = canvas.getContext("2d"); // Use this to draw stuff

    // Load the image
    image = new Image();
    image.onload = function () {
        placeImage(); // Put original image on canvas
        grayscale(); // Run our filter
    };
    // Place custom image here
    // If you get tainted canvas errors, it's because
    // both your image and site have to be on the same domain
    image.src = "img/waterfall.jpg";

});

function placeImage() {
    canvas.height = image.height;
    canvas.width = image.width;
    ctx.drawImage(image, 0, 0);
}

// Makes an image black and white
function grayscale() {
    runOnEachPixel(
        function(pixel) {
            
        }
    );
}

function invert() {
    runOnEachPixel(
        function(pixel) {
            
        }
    );
}

// red' = (red * .393) + (green * .769) + (blue * .189)
// green' = (red * .349) + (green * .686) + (blue * .168)
// red' = (red * .272) + (green * .534) + (blue * .131)
function sepia() {
    runOnEachPixel(
        function(pixel) {
            
        }
    );
}

function dither() {
    runOnEachPixel(
        function(pixel) {
            
        }
    );
}

function edgeDetect() {
    runOnEachPixel(
        function(pixel) {

        }
    );
}

function vignette() {
    runOnEachPixel(
        function(pixel) {
            
        }
    );
}

// Loops through each pixel in an image and runs your filter per-pixel
function runOnEachPixel(func) {
    // Gets the image data in the form of an array
    // Where the array elements are ordered:
    // [red, green, blue, alpha, ...]
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var rawData = imgData.data;

    for (var i = 0; i < rawData.length; i += 4) {
        var pixel = {
            red: rawData[i],
            green: rawData[i + 1],
            blue: rawData[i + 2],
            alpha: rawData[i + 3]
        };

        // Runs your code
        func(pixel);

        rawData[i] = pixel.red;
        rawData[i + 1] = pixel.green;
        rawData[i + 2] = pixel.blue;
        rawData[i + 3] = pixel.alpha;
    }

    ctx.putImageData(imgData, 0, 0);
}