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
