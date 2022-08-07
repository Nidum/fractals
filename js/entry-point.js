import CanvasPath from "./util/canvas-path.js";
import LSystem from "./fractal/l-system.js";

$(document).ready(
    () => {
        $("#koch-line-iterations-input").change(() => {
            const canvasPath = new CanvasPath("koch-line-canvas", 180, 350);
            canvasPath.clear();
            const iterations = parseInt($("#koch-line-iterations-input").val(), 10);

            const angle = 60;
            const length = 900 / Math.pow(3, iterations);
            const initiator = "F";
            const rules = new Map();
            rules.set("F", "F+F--F+F");

            const lSystem = new LSystem(angle, length, initiator, rules, canvasPath);
            lSystem.walk(iterations);

        });
        $("#koch-line-iterations-input").trigger("change");

        $("#koch-snowflake-iterations-input").change(() => {
            const canvasPath = new CanvasPath("koch-snowflake-canvas", 390, 150);
            canvasPath.clear();

            const iterations = parseInt($("#koch-snowflake-iterations-input").val(), 10);
            const angle = 60;
            const length = 400 / Math.pow(3, iterations);
            const initiator = "F--F--F";
            const rules = new Map();
            rules.set("F", "F+F--F+F");

            const lSystem = new LSystem(angle, length, initiator, rules, canvasPath);
            lSystem.walk(iterations);
        });
        $("#koch-snowflake-iterations-input").trigger("change");
    }
);