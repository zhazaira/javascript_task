// Task 1
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  
    this.accelerate = function() {
      this.speed += 10;
      console.log("${this.make} accelerated. New speed: ${this.speed} km/h");
    };
  
    this.brake = function() {
      this.speed -= 5;
      console.log("${this.make} braked. New speed: ${this.speed} km/h");
    };
  }
  
  const car1 = new Car('BMW', 120);
  const car2 = new Car('Mercedes', 95);
  
  car1.accelerate();
  car1.accelerate();
  car1.brake();
  
  car2.accelerate();
  car2.brake();
  car2.brake();
  

// Task 2
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log("${this.make} accelerated. New speed: ${this.speed} km/h");
    }
  
    brake() {
      this.speed -= 5;
      console.log("${this.make} braked. New speed: ${this.speed} km/h");
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speedInMilesPerHour) {
      this.speed = speedInMilesPerHour * 1.6;
    }
  }
  
  const car1 = new CarCl('Ford', 120);
  console.log("${car1.make} is going at ${car1.speed} km/h");
  console.log("${car1.make} is going at ${car1.speedUS} mi/h");
  
  car1.accelerate();
  console.log("${car1.make} is going at ${car1.speed} km/h");
  console.log("${car1.make} is going at ${car1.speedUS} mi/h");
  
  car1.brake();
  console.log("${car1.make} is going at ${car1.speed} km/h");
  console.log("${car1.make} is going at ${car1.speedUS} mi/h");
  

// Task 3
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  
  Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log("${this.make} accelerated. New speed: ${this.speed} km/h");
  };
  
  Car.prototype.brake = function() {
    this.speed -= 5;
    console.log("${this.make} braked. New speed: ${this.speed} km/h");
  };
  
  function EV(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
  }
  
  EV.prototype = Object.create(Car.prototype);
  
  EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log("${this.make} battery charged to ${this.charge}%");
  };
  
  EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log("${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%");
  };
  
  const tesla = new EV('Tesla', 120, 23);
  console.log("${tesla.make} going at ${tesla.speed} km/h, with a charge of ${tesla.charge}%");
  
  tesla.accelerate();
  tesla.brake();
  tesla.chargeBattery(90);
  tesla.accelerate();

  

// Task 4 
class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log("${this.make} accelerated. New speed: ${this.speed} km/h");
      return this;
    }
  
    brake() {
      this.speed -= 5;
      console.log("${this.make} braked. New speed: ${this.speed} km/h");
      return this;
    }
  }
  
  class EVCl extends CarCl {
    #charge;
  
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      console.log("${this.make} battery charged to ${this.#charge}%");
      return this;
    }
  
    getCharge() {
      return this.#charge;
    }
  
    accelerate() {
      this.speed += 20;
      this.#charge -= 1;
      console.log("${this.make} going at ${this.speed} km/h, with a charge of ${this.getCharge()}%");
      return this;
    }
  }
  
  const rivian = new EVCl('Rivian', 120, 23);
  console.log(`${rivian.make} going at ${rivian.speed} km/h, with a charge of ${rivian.getCharge()}%`);
  
  rivian.accelerate().brake().chargeBattery(90).accelerate();
  
  