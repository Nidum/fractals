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

        $("#dragon-curve-iterations-input").change(() => {
            const canvasPath = new CanvasPath("dragon-curve-canvas", 550, 350);
            canvasPath.clear();
            const iterations = parseInt($("#dragon-curve-iterations-input").val(), 10);

            const angle = 90;
            const length = 200 / (iterations * 4);
            const initiator = "FX";
            const rules = new Map();
            rules.set("FX", "FX+FY+");
            rules.set("FY", "-FX-FY");

            const lSystem = new LSystem(angle, length, initiator, rules, canvasPath);
            lSystem.walk(iterations);
        });
        $("#dragon-curve-iterations-input").trigger("change");

        $("#sierpinski-triangle-iterations-input").change(() => {
            const canvasPath = new CanvasPath("sierpinski-triangle-canvas", 400, 500);
            canvasPath.clear();
            const iterations = parseInt($("#sierpinski-triangle-iterations-input").val(), 10);

            const angle = 120;
            const length = 250 / (Math.pow(2, iterations));
            const initiator = "FXF--FF--FF";
            const rules = new Map();
            rules.set("F", "FF");
            rules.set("X", "--FXF++FXF++FXF--");

            const lSystem = new LSystem(angle, length, initiator, rules, canvasPath);
            lSystem.walk(iterations);
        });
        $("#sierpinski-triangle-iterations-input").trigger("change");

        $("#sierpinski-carpet-iterations-input").change(() => {
            const iterations = parseInt($("#sierpinski-carpet-iterations-input").val(), 10);
            const canvasPath = new CanvasPath("sierpinski-carpet-canvas", 400, 500);
            canvasPath.clear();

            const angle = 90;
            const length = 150 / (Math.pow(3, iterations));
            const initiator = "+FRFRF-FYFRF-FYFRF-FYFRF-";
            const rules = new Map();
            rules.set("F", "FFF");
            rules.set("S", "SSS");
            rules.set("R", "-FRFRF-FYFRF-SYSRS-SYSRS");
            rules.set("Y", "-FRFRF-SYSRS-SYSRS-SYSRS");

            const lSystem = new LSystem(angle, length, initiator, rules, canvasPath);
            lSystem.walk(iterations);
        });
        $("#sierpinski-carpet-iterations-input").trigger("change");

        $("#gilbert-curve-iterations-input").change(() => {
            const iterations = parseInt($("#gilbert-curve-iterations-input").val(), 10);
            const canvasPath = new CanvasPath("gilbert-curve-canvas", 400, 25);
            canvasPath.clear();

            const angle = 90;
            const length = 500 / (Math.pow(2, iterations));
            const initiator = "X";
            const rules = new Map();

            rules.set("X", "-YF+XFX+FY-");
            rules.set("Y", "+XF-YFY-FX+");

            const lSystem = new LSystem(angle, length, initiator, rules, canvasPath);
            lSystem.walk(iterations);
        });
        $("#gilbert-curve-iterations-input").trigger("change");

        $("#fractal-canopy-iterations-input").change(() => {
            const iterations = parseInt($("#fractal-canopy-iterations-input").val(), 10);
            const canvasPath = new CanvasPath("fractal-canopy-canvas", 650, 300 + 950 / (4 * iterations));
            canvasPath.clear();

            const angle = 22.5;
            const length = 950 / (4 * iterations);
            const initiator = "++++F";
            const rules = new Map();

            rules.set("F", "F[+F][-F]");

            const lSystem = new LSystem(angle, length, initiator, rules, canvasPath);
            lSystem.walk(iterations);
        });
        $("#fractal-canopy-iterations-input").trigger("change");
    }
);