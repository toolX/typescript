class Car {
  public name: string;
  public acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log("Toooooooooot!");
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

class baseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends baseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

let rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
  return this.width * this.length;
};
console.log(rectangle.calcSize());
