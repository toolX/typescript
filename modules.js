"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Circle = __importStar(require("./math/circleModule"));
var rectangleModule_1 = __importDefault(require("./math/rectangleModule"));
console.log(Circle.PI);
console.log(Circle.calcCircumference(33));
console.log(rectangleModule_1.default(15, 17));
