export function drawLine(canvasPath, iterations, startLength) {
    drawKochLine(canvasPath, startLength, iterations);
    canvasPath.draw();
}

export function drawSnowflake(canvasPath, iterations, startLength) {
    drawKochSnowflake(canvasPath, startLength, iterations);
    canvasPath.draw();
}

function drawKochLine(canvasPath, length, iteration) {
    if (iteration !== 1) {
        const l3 = length / 3;
        drawKochLine(canvasPath, l3, iteration - 1);
        canvasPath.rotateLeft(60);
        drawKochLine(canvasPath, l3, iteration - 1);
        canvasPath.rotateRight(120);
        drawKochLine(canvasPath, l3, iteration - 1);
        canvasPath.rotateLeft(60);
        drawKochLine(canvasPath, l3, iteration - 1);
    } else {
        drawKochSegment(canvasPath, length);
    }
}

function drawKochSnowflake(canvasPath, length, iteration) {
    drawKochLine(canvasPath, length, iteration);
    canvasPath.rotateRight(120);
    drawKochLine(canvasPath, length, iteration);
    canvasPath.rotateRight(120);
    drawKochLine(canvasPath, length, iteration);
}

function drawKochSegment(canvasPath, length){
    canvasPath.forward(length);
    canvasPath.rotateLeft(60);
    canvasPath.forward(length);
    canvasPath.rotateRight(120);
    canvasPath.forward(length);
    canvasPath.rotateLeft(60);
    canvasPath.forward(length);
}