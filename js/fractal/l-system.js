export default class LSystem {
    constructor(angle, length, initiator, rules, canvasPath) {
        this.angle = angle;
        this.length = length;
        this.initiator = initiator;
        this.rules = rules;
        this.canvasPath = canvasPath;
    }

    walk(iterations){
        const path = this.generatePath(iterations);
        for (let command of path) {
            switch (command){
                case "F": this.canvasPath.forward(this.length); break;
                case "+": this.canvasPath.rotateLeft(this.angle); break;
                case "-": this.canvasPath.rotateRight(this.angle); break;
                case "S": this.canvasPath.jump(this.length); break;
            }
        }
        this.canvasPath.draw();
    }

    generatePath(iterations) {
        let result = this.initiator;
        for (let i = 0; i < iterations; i++) {
            for (let key of this.rules.keys()) {
                result = result.replaceAll(key, this.rules.get(key).toLowerCase());
            }
            result = result.toUpperCase();
        }
        return result;
    }
}