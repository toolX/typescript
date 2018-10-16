function logged(constructorFn: Function) {
  console.log(constructorFn);
}

@logged
class Animal {
  constructor() {
    console.log('This is a constructor');
  }
}

function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logged
@printable
class Card {
  name = 'My card';
}

const newCard = new Card();
(<any>newCard).print();


// Method Decorators
function editable(value: boolean) {
  return function(target: any, propName: string, descriptor: PropertyDescriptor): any {
    console.log(`target: ${target}`);
    console.log(`propName: ${propName}`);
    descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  return function(target: any, propName: string): any {
    console.log(`target: ${target}`);
    console.log(`propName: ${propName}`);
    const newDescriptor: PropertyDescriptor = {
      writable: value
    }

    return newDescriptor;
  }
}

class Game {
  @overwritable(true)
  gameName: string;

  constructor(name: string) {
    this.gameName = name;
  }

  @editable(true)
  calcBudget() {
    console.log(1000);
  }
}

const game = new Game('Sonic');
game.calcBudget();
game.calcBudget = function() {
  console.log(2000);
}
game.calcBudget();

function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(`target: ${target}`);
  console.log(`methodName: ${methodName}`);
  console.log(`paramIndex: ${paramIndex}`);
}

class Course {
  coursName: string;

  constructor(name: string) {
    this.coursName = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    console.log(`mode: ${mode}`);

    printAll ? console.log(10) : console.log(1);
  }
}

const course = new Course('JS');
course.printStudentNumbers('strict', false);
