"use strict";
var myMath;
(function (myMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calcCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = myMath.Circle || (myMath.Circle = {}));
})(myMath || (myMath = {}));
