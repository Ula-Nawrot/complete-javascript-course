'use strict';

//Challenge 1

// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed
// };

// Car.prototype.accelerate = function () {
//     const accelerate = this.speed + 10;
//     console.log(`New speed ${accelerate} km/h`);
// };

// Car.prototype.break = function () {
//     const breakCar = this.speed - 5;
//     console.log(`Speed after breaking ${breakCar} km/h`);
// }

// const car1 = new Car ('BMW', 120);
// const car2 = new Car ('Mercedes', 95);

// car1.accelerate();
// car1.accelerate();
// car2.accelerate();
// car1.break();
// car2.break();

//Challenge 2

class Car {
    constructor(make,speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        return this.speed += 10;
    }
    break() {
        return this.speed -= 5;
    }
    get speedUS() {
        return this.speed/1.6
    }
    set speedUS(speed) {
        return this.speed = speed * 1.6;
    }
}

const car2 = new Car('BMW', 120);
console.log(car2);
console.log(car2.accelerate());
console.log(car2.speedUS); 
car2.speedUS = 80;
console.log(car2);