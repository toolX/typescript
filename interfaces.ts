interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greetPerson(person: NamedPerson): void {
  console.log(`Hello ${person.firstName}`);
}

function changeFirstName(person: NamedPerson, name: string): void {
  person.firstName = name;
}

const man = {
  firstName: 'Andrew',
  greet(lastName: string): void {
    console.log(`Hello, ${this.firstName} ${lastName}`)
  }
};

const woman: NamedPerson = {
  firstName: 'Helga',
  hobbies: ['sports', 'cooking'],
  greet(lastName: string): void {
    console.log(`Hello, ${this.firstName} ${lastName}`)
  }
}

greetPerson(man);
greetPerson({ firstName: 'Bill', age: 66, greet(lastName: string): void {
  console.log(`Hello, ${this.firstName} ${lastName}`)
} });
greetPerson(woman);
changeFirstName(woman, 'Anna');
greetPerson(woman);
woman.greet('Ivanova');

class PersonClass implements NamedPerson {
  firstName: string = '';
  greet(lastName: string) {
    console.log(`Hello, ${this.firstName} ${lastName}`);
  }
}

const myPerson = new PersonClass();
myPerson.firstName = 'Philip';
greetPerson(myPerson);
myPerson.greet('Shamsiev');

interface DoubleFunction {
  (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleFunction;
myDoubleFunction = function(value1: number, value2: number): number {
  return (value1 + value2) * 2;
}

console.log(myDoubleFunction(5, 7));

interface OldPerson extends NamedPerson {
  age: number;
}

const oldGuy: OldPerson = {
  age: 34,
  firstName: 'Philip',
  greet(lastName: string) {
    console.log(`Hello, ${this.firstName} ${lastName}`);
  }
}

oldGuy.greet('Shamsiev');
