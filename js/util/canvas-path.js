export default class CanvasPath {
    constructor(canvasId, x, y) {
        this.context = $("#" + canvasId)[0].getContext("2d");
        this.angle = 0;
        this.context.beginPath();
        this.moveTo(x, y);
    }

    moveTo(x, y) {
        this.context.moveTo(x, y);
        this.x = x;
        this.y = y;
    }

    rotateLeft(angle) {
        this.angle -= angle * Math.PI / 180;
    }

    rotateRight(angle) {
        this.angle += angle * Math.PI / 180;
    }

    forward(distance) {
        this.x = this.x + Math.cos(this.angle) * distance;
        this.y = this.y + Math.sin(this.angle) * distance;
        this.context.lineTo(this.x, this.y);
    }

    jump(distance) {
        this.x = this.x + Math.cos(this.angle) * distance;
        this.y = this.y + Math.sin(this.angle) * distance;
        this.context.moveTo(this.x, this.y);
    }

    draw() {
        this.context.stroke();
    }

    clear() {
        this.context.clearRect(0, 0, 2000, 2000);
    }

    currentState() {
        return {x: this.x, y: this.y, angle: this.angle};
    }

    restoreState(state) {
        this.moveTo(state.x, state.y);
        this.angle = state.angle;
    }
}