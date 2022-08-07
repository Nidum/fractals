import {drawLine, drawSnowflake} from "./fractal/koch.js";
import CanvasPath from "./util/canvas-path.js";

$(document).ready(
    () => {
        $("#koch-line-iterations-input").change(() => {
            const canvasPath = new CanvasPath("koch-line-canvas", 230, 350);
            canvasPath.clear();
            const iterations = parseInt($("#koch-line-iterations-input").val(), 10);
            drawLine(canvasPath, parseInt(iterations, 10), 250);

        });
        $("#koch-line-iterations-input").trigger("change");

        $("#koch-snowflake-iterations-input").change(() => {
            const canvasPath = new CanvasPath("koch-snowflake-canvas", 390, 140);
            canvasPath.clear();
            const iterations = $("#koch-snowflake-iterations-input").val();
            drawSnowflake(canvasPath, parseInt(iterations, 10), 150);
        });
        $("#koch-snowflake-iterations-input").trigger("change");
    }
);