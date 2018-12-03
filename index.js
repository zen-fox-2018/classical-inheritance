"use strict"

class Animal {
  constructor() {
    this._num_legs = 2
    this._is_warm_blooded = false
  }
}

class Chicken extends Animal {
  constructor() {
    super()
    this._has_wings = true
  }
  use_its_wing_to_fly() {
    console.log(`No, chicken can't fly`)
  }
}

class Chimpanzee extends Animal {
}

class SuperPower extends Animal {
  get name() {
    return this._name
  }
  use_laser_vision() {
    console.log(`${this.name} use laser vision to burn its enemies!`);
  }

  be_invisible() {
    console.log(`${this.name} is looking invisible now, no one can see him`)
  }
}

class Frog extends SuperPower {
  constructor(name) {
    super()
    this._name = name
    this._num_legs = 4
  }
}

class Dog extends SuperPower {
  constructor(name) {
    super()
    this._name = name
    this._num_legs = 4
    this._is_warm_blooded = true
  }
}

let monyet = new Chimpanzee()
let ayam = new Chicken()
let kodok = new Frog('Anthony')
let anjing = new Dog('Jacob')
console.log(ayam);
ayam.use_its_wing_to_fly()
kodok.use_laser_vision()
anjing.be_invisible()
// console.log(anjing);
