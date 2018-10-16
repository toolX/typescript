"use strict";
function greetPerson(person) {
    console.log("Hello " + person.firstName);
}
function changeFirstName(person, name) {
    person.firstName = name;
}
var man = {
    firstName: 'Andrew',
    greet: function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    }
};
var woman = {
    firstName: 'Helga',
    hobbies: ['sports', 'cooking'],
    greet: function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    }
};
greetPerson(man);
greetPerson({ firstName: 'Bill', age: 66, greet: function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    } });
greetPerson(woman);
changeFirstName(woman, 'Anna');
greetPerson(woman);
woman.greet('Ivanova');
var PersonClass = /** @class */ (function () {
    function PersonClass() {
        this.firstName = '';
    }
    PersonClass.prototype.greet = function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    };
    return PersonClass;
}());
var myPerson = new PersonClass();
myPerson.firstName = 'Philip';
greetPerson(myPerson);
myPerson.greet('Shamsiev');
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(5, 7));
var oldGuy = {
    age: 34,
    firstName: 'Philip',
    greet: function (lastName) {
        console.log("Hello, " + this.firstName + " " + lastName);
    }
};
oldGuy.greet('Shamsiev');
