class Person {
  name: string;
  private type: string = 'private';
  protected age: number = 30;

  constructor (name: string, public userName: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType('private');
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person('Max', 'madMax');
person.printAge();

class ToolX extends Person {
  constructor(userName: string) {
    super('Philip', userName);
    this.age = 18;
  }
}

const newPerson = new ToolX('toolX');
console.log(newPerson);
newPerson.printAge();

class Plant {
  private _species: string = 'Default';

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = 'Default';
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = 'apple';
console.log(plant.species);

class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(10));

abstract class Project {
  name: string = 'Default';
  budget: number = 0;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget *2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.name = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
console.log(newProject.changeName('SPA'))
console.log(newProject);

class Data {
  private static instance: Data;

  private constructor (public readonly name: string) {}

  static getInstance() {
    if (!Data.instance) {
      Data.instance = new Data('Unique data');
    } 

    return Data.instance;
  }
}

let right = Data.getInstance();
console.log(right.name);
