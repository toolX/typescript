"use strict";
function echo(data) {
    return data;
}
console.log(echo('Philip'));
console.log(echo(27));
console.log(echo({ name: 'Philip', age: 34 }));
// Generic function
function genericEcho(data) {
    return data;
}
console.log(genericEcho('Philip').match('i'));
console.log(genericEcho(27).toString());
console.log(genericEcho({ name: 'Philip', age: 34 }));
var testResults = [1.23, 5.09];
testResults.push(3.32);
testResults.push(5.81);
console.log(testResults);
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(testResults);
printAll(['Apple', 'Kiwi']);
// Generic Types
var newEcho = genericEcho;
console.log(newEcho('String'));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath(value1, value2) {
        this.baseValue = value1;
        this.multiplyValue = value2;
    }
    SimpleMath.prototype.calc = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath('7', 10);
console.log(simpleMath);
console.log(simpleMath.calc());
var simpleMath1 = new SimpleMath(5, 4);
console.log(simpleMath1);
console.log(simpleMath1.calc());
var simpleMath2 = new SimpleMath('9', '3');
console.log(simpleMath2);
console.log(simpleMath2.calc());
var Map = /** @class */ (function () {
    function Map() {
        this.map = {};
    }
    Map.prototype.setItem = function (key, value) {
        this.map[key] = value;
    };
    Map.prototype.getItem = function (key) {
        return this.map[key];
    };
    Map.prototype.clear = function () {
        this.map = {};
    };
    Map.prototype.print = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return Map;
}());
var numberMap = new Map();
numberMap.setItem('cards', 4);
numberMap.setItem('solutions', 22);
console.log(numberMap);
numberMap.print();
console.log(numberMap.getItem('solutions'));
numberMap.clear();
console.log(numberMap);
var stringMap = new Map();
stringMap.setItem('cards', '4');
stringMap.setItem('solutions', '22');
console.log(stringMap);
stringMap.print();
console.log(stringMap.getItem('solutions'));
stringMap.clear();
console.log(stringMap);
