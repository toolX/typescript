"use strict";
var myMath;
(function (myMath) {
    function calculateRectangle(width, height) {
        return width * height;
    }
    myMath.calculateRectangle = calculateRectangle;
})(myMath || (myMath = {}));
