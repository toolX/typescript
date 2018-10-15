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
