"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
var Animal = /** @class */ (function () {
    function Animal() {
        console.log('This is a constructor');
    }
    Animal = __decorate([
        logged
    ], Animal);
    return Animal;
}());
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Card = /** @class */ (function () {
    function Card() {
        this.name = 'My card';
    }
    Card = __decorate([
        logged,
        printable
    ], Card);
    return Card;
}());
var newCard = new Card();
newCard.print();
// Method Decorators
function editable(value) {
    return function (target, propName, descriptor) {
        console.log("target: " + target);
        console.log("propName: " + propName);
        descriptor.writable = value;
    };
}
function overwritable(value) {
    return function (target, propName) {
        console.log("target: " + target);
        console.log("propName: " + propName);
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Game = /** @class */ (function () {
    function Game(name) {
        this.gameName = name;
    }
    Game.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwritable(true)
    ], Game.prototype, "gameName", void 0);
    __decorate([
        editable(true)
    ], Game.prototype, "calcBudget", null);
    return Game;
}());
var game = new Game('Sonic');
game.calcBudget();
game.calcBudget = function () {
    console.log(2000);
};
game.calcBudget();
function printInfo(target, methodName, paramIndex) {
    console.log("target: " + target);
    console.log("methodName: " + methodName);
    console.log("paramIndex: " + paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.coursName = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        console.log("mode: " + mode);
        printAll ? console.log(10) : console.log(1);
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course('JS');
course.printStudentNumbers('strict', false);
