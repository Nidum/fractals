export default class JuliaSet {

    constructor(canvasSize, iterations, canvasCtx, complex, palette) {
        // Only squared
        this.canvasSize = canvasSize;
        this.iterations = iterations;
        this.canvasCtx = canvasCtx;
        this.complex = complex;
        this.palette = palette;
    }

    draw() {
        const P = this.canvasSize / 2 - 1;
        const scale = P / 2;

        for (let x = -P; x <= P; x++) {
            for (let y = -P; y <= P; y++) {
                const a = x / scale;
                const b = y / scale;
                let z = math.complex(a, b);

                let n = 0;
                let success = true;
                for (let i = 0; i < this.iterations; i++) {
                    z = z.pow(2).add(this.complex);
                    if (z.abs() > 2) {
                        success = false;
                        break;
                    } else {
                        n++;
                        if (n === 9) n = 0;
                        this.canvasCtx.fillStyle = this.palette[n + 1];
                        this.canvasCtx.fillRect(x + P, y + P, 1, 1);
                    }
                }
                if (success) {
                    this.canvasCtx.fillStyle = "black";
                    this.canvasCtx.fillRect(x + P, y + P, 1, 1);
                }
            }
        }

    }
}
