"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.type = 'private';
        this.age = 30;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType('private');
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person('Max', 'madMax');
person.printAge();
var ToolX = /** @class */ (function (_super) {
    __extends(ToolX, _super);
    function ToolX(userName) {
        var _this = _super.call(this, 'Philip', userName) || this;
        _this.age = 18;
        return _this;
    }
    return ToolX;
}(Person));
var newPerson = new ToolX('toolX');
console.log(newPerson);
newPerson.printAge();
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'apple';
console.log(plant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(10));
var Project = /** @class */ (function () {
    function Project() {
        this.name = 'Default';
        this.budget = 0;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.name = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
console.log(newProject.changeName('SPA'));
console.log(newProject);
var Data = /** @class */ (function () {
    function Data(name) {
        this.name = name;
    }
    Data.getInstance = function () {
        if (!Data.instance) {
            Data.instance = new Data('Unique data');
        }
        return Data.instance;
    };
    return Data;
}());
var right = Data.getInstance();
console.log(right.name);
