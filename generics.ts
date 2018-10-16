function echo(data: any) {
  return data;
}

console.log(echo('Philip'));
console.log(echo(27));
console.log(echo({ name: 'Philip', age: 34 }));

// Generic function

function genericEcho<T>(data: T) {
  return data;
}

console.log(genericEcho('Philip').match('i'));
console.log(genericEcho<number>(27).toString());
console.log(genericEcho({ name: 'Philip', age: 34 }));

const testResults: Array<number> = [1.23, 5.09];
testResults.push(3.32);
testResults.push(5.81);
console.log(testResults);

function printAll<T>(args: T[]) {
  args.forEach((element) => console.log(element));
}

printAll(testResults);
printAll<string>(['Apple', 'Kiwi']);

// Generic Types
const newEcho: <T>(data: T) => T = genericEcho;
console.log(newEcho<string>('String'));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;

  constructor(value1: T, value2: U) {
    this.baseValue = value1;
    this.multiplyValue = value2;
  }

  calc(): number {
    return +this.baseValue * +this.multiplyValue;
  }
}
const simpleMath = new SimpleMath<string, number>('7', 10);
console.log(simpleMath);
console.log(simpleMath.calc());

const simpleMath1 = new SimpleMath<number, number>(5, 4);
console.log(simpleMath1);
console.log(simpleMath1.calc());

const simpleMath2 = new SimpleMath<string, string>('9', '3');
console.log(simpleMath2);
console.log(simpleMath2.calc());

class Map<T> {
  private map: {[key: string]: T} = {};

  setItem(key: string, value: T) {
    this.map[key] = value;
  }

  getItem(key: string) {
    return this.map[key];
  }

  clear() {
    this.map = {};
  }

  print() {
    for (let key in this.map) {
      console.log(key, this.map[key]);
    }
  }
}

const numberMap = new Map<number>();
numberMap.setItem('cards', 4);
numberMap.setItem('solutions', 22);
console.log(numberMap);
numberMap.print();
console.log(numberMap.getItem('solutions'));
numberMap.clear();
console.log(numberMap);

const stringMap = new Map<string>();
stringMap.setItem('cards', '4');
stringMap.setItem('solutions', '22');
console.log(stringMap);
stringMap.print();
console.log(stringMap.getItem('solutions'));
stringMap.clear();
console.log(stringMap);
